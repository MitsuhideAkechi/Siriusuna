---
title: P4 Design Document
published: 2025-12-11
tags:
  - 计算机组成
  - CPU
---

# 体系结构

指令集: `add`, `sub`, `ori`, `lw`, `sw`, `beq`, `lui`, `nop`, `jr`, `jal`
端口:

| 信号    | 方向 | 描述             |
| ------- | ---- | ---------------- |
| `clk`   | I    | 时钟信号         |
| `reset` | I    | **同步**复位信号 |

# 基本模块

## IFU

### PC & NPC

- Moore 状态机：
  - 下一状态：NPC
    - PC + 4
    - PC + 4 + Offset
    - Jump
  - 输出：PC

#### PC

- 元件: 寄存器
- 端口:

  | 信号        | 方向 | 描述             |
  | ----------- | ---- | ---------------- |
  | `clk`       | I    | 时钟信号         |
  | `reset`     | I    | **同步**复位信号 |
  | `NPC[31:0]` | I    | 下一指令地址     |
  | `PC[31:0]`  | O    | 取指令地址       |

#### NPC

- 端口:

  | 信号            | 方向 | 描述                              |
  | --------------- | ---- | --------------------------------- |
  | `PC[31:0]`      | I    | 当前指令地址                      |
  | `ra[31:0]`      | I    | `jr`指令, 寄存器寻址, 跳转地址    |
  | `offset[15:0]`  | I    | 地址偏移量                        |
  | `imm[25:0]`     | I    | J 型指令,相对 PC 寻址, 跳转地址   |
  | `NPCSel[1:0]`   | I    | 下一 PC 选择信号                  |
  | `Zero`          | I    | rs 和 rt 相等标志(1=相等, 0=不等) |
  | `PCPlus4[31:0]` | O    | 当前指令地址+4                    |
  | `NPC[31:0]`     | O    | 下一指令地址                      |

- `NPCSel`编码:

  | NPCSel | 含义          |
  | ------ | ------------- |
  | `00`   | 顺序执行      |
  | `01`   | J 型跳转      |
  | `10`   | JR 寄存器跳转 |
  | `11`   | 分支跳转      |

### IM

- 元件: ROM
- 地址范围: 0x00003000 ~ 0x00006FFF
- 实际地址宽度:
  - `0x00006FFF - 0x00003000 + 1 = 0x3FFF + 1 = 0x4000`
  - `0x4000 -> 16384Byte`
  - `16384 / 4 = 4096 = 2 ** 12`
- 按照指令寻址: `ROM_addr[11:0] = (PC - 0x00003000) >> 2`
- 端口:

  | 信号       | 方向 | 描述       |
  | ---------- | ---- | ---------- |
  | `A[31:0]`  | I    | 取指令地址 |
  | `RD[31:0]` | O    | 取出指令   |

## RF

| 信号        | 方向 | 描述                           |
| ----------- | ---- | ------------------------------ |
| `clk`       | I    | 时钟信号                       |
| `reset`     | I    | **同步**复位信号               |
| `WE`        | I    | 写使能信号                     |
| `A1[4:0]`   | I    | 地址输入信号,读出到 RD1        |
| `A2[4:0]`   | I    | 地址输入信号,读出到 RD2        |
| `A3[4:0]`   | I    | 地址输入信号，写入的目标寄存器 |
| `WD[31:0]`  | I    | 32 位数据输入信号              |
| `RD1[31:0]` | O    | 输出 A1 指定的寄存器数据       |
| `RD2[31:0]` | O    | 输出 A2 指定的寄存器数据       |

## ALU

`ALUControl`编码:

| 运算    | 编码 |
| ------- | ---- |
| `ori`   | 0001 |
| `sll16` | 0101 |
| `add`   | 0110 |
| `sub`   | 0111 |

端口:

| 信号              | 方向 | 描述                             |
| ----------------- | ---- | -------------------------------- |
| `SrcA`            | I    | 操作数 1                         |
| `SrcB`            | I    | 操作数 2                         |
| `ALUControl[3:0]` | I    | 运算种类控制信号                 |
| `Result[31:0]`    | O    | 运算结果                         |
| `zero`            | O    | 两个操作数是否相等(用于分支指令) |

## DM

- 元件: RAM, 读写双端口分离
- 地址范围: 0x00000000 ~ 0x00002FFF
- 端口:

  | 信号       | 方向 | 描述             |
  | ---------- | ---- | ---------------- |
  | `clk`      | I    | 时钟信号         |
  | `reset`    | I    | **同步**复位信号 |
  | `WE`       | I    | 写使能信号       |
  | `A[31:0]`  | I    | 读写地址         |
  | `WD[31:0]` | I    | 写入数据         |
  | `RD[31:0]` | O    | 读出数据         |

## EXT

| 信号            | 方向 | 描述                                   |
| --------------- | ---- | -------------------------------------- |
| `imm[15:0]`     | I    | 指令中的立即数                         |
| `Ext_op`        | I    | 扩展控制信号(0=无符号扩展，1=符号扩展) |
| `Ext_out[31:0]` | O    | 扩展后的结果                           |

## Controller

端口:

| 信号              | 方向 | 描述                                                       |
| ----------------- | ---- | ---------------------------------------------------------- |
| `Opcode[5:0]`     | I    | 指令的`[31:26]`, op 部分                                   |
| `Funct[5:0]`      | I    | *R 指令*的`[5:0]`, funct 部分                              |
| `MemtoReg[1:0]`   | O    | 寄存器回写的数据来源(00=ALU 结果, 01=内存数据, 10=PCPlus4) |
| `MemWrite`        | O    | DM 写使能信号                                              |
| `NPCSel[1:0]`     | O    | 下一 PC 选择信号                                           |
| `ALUSrc`          | O    | ALU 第二操作数选择（0=寄存器, 1=立即数）                   |
| `RegDst[1:0]`     | O    | 寄存器写入目标（00=rt, 01=rd, 10=0x1F）                    |
| `ExtOp`           | O    | 扩展方式(0=无符号, 1=有符号)                               |
| `RegWrite`        | O    | 寄存器写使能信号                                           |
| `ALUControl[3:0]` | O    | ALU 运算选择信号                                           |

# 指令

指令集: `add`, `sub`, `ori`, `lw`, `sw`, `beq`, `lui`, `nop`, `jr`, `jal`

- 控制信号

| 指令  | 信号            |            |               |          |               |            |         |              |
| ----- | --------------- | ---------- | ------------- | -------- | ------------- | ---------- | ------- | ------------ |
|       | `MemtoReg[1:0]` | `MemWrite` | `NPCSel[1:0]` | `ALUSrc` | `RegDst[1:0]` | `RegWrite` | `ExtOp` | `ALUControl` |
| R     | 00              | 0          | 00            | 0        | 01            | 1          | 0       | 根据`funct`  |
| `ori` | 00              | 0          | 00            | 1        | 00            | 1          | 0       | 0001(or)     |
| `lw`  | 01              | 0          | 00            | 1        | 00            | 1          | 1       | 0110(add)    |
| `sw`  | 00              | 1          | 00            | 1        | 00            | 0          | 1       | 0110(add)    |
| `beq` | 00              | 0          | 11            | 0        | 00            | 0          | 1       | 0111(sub)    |
| `lui` | 00              | 0          | 00            | 1        | 00            | 1          | 0       | 0101(sll16)  |
| `jr`  | 00              | 0          | 10            | 0        | 00            | 0          | 0       | 0000         |
| `jal` | 00              | 0          | 01            | 0        | 10            | 1          | 0       | 0000         |

# 额外测试

```asm
# 寄存器初始化与运算
ori $a0, $0, 123        # $a0 = 123
ori $a1, $a0, 456       # $a1 = 123 | 456 = 507 (0x1FB)
lui $a2, 123            # $a2 = 123 << 16 = 0x007B0000 (符号位=0)
lui $a3, 0xffff         # $a3 = 0xFFFF0000 (符号位=1)
ori $a3, $a3, 0xffff    # $a3 = 0xFFFFFFFF = -1

add $s0, $a0, $a2       # 正 + 正
add $s1, $a0, $a3       # 正 + 负
add $s2, $a3, $a3       # 负 + 负

# 存储与加载
ori $t0, $0, 0x0000     # $t0 = 0x00000000

sw $a0, 0($t0)
sw $a1, 4($t0)
sw $a2, 8($t0)
sw $a3, 12($t0)
sw $s0, 16($t0)
sw $s1, 20($t0)
sw $s2, 24($t0)

lw $a0, 0($t0)
lw $a1, 12($t0)         # $a1 = $a3 = -1
sw $a0, 28($t0)
sw $a1, 32($t0)         # 正偏移

ori $t1, $0, 0x0038 # $t1 = 0x38
sw $a0, -4($t1)         # 存到 0x34
sw $a1, -8($t1)         # 存到 0x30
sw $a2, -12($t1)        # 存到 0x2C

# BEQ 跳转测试
# 正偏移
ori $a0, $0, 1
ori $a1, $0, 2
ori $a2, $0, 1

beq $a0, $a1, loop1     # 不相等，不跳
beq $a0, $a2, loop2     # 相等，跳转到 loop2

loop1:
sw $a0, 36($t0)         # 应存储114
add $a3, $a3, $a3

loop2:
sw $a1, 40($t0)         # 应执行

# 负偏移测试
lui $t2, 0xffff
ori $t2, $t2, 0xffff    # $t2 = -1 = $a3
ori $a0, $0, 114
beq $a3, $t2, loop1     # 相等，应跳回一次

# jr, jal 测试
jal func1              # 跳到 func1
sw  $v0, 56($t0)       # func1 返回后，检查返回值 v0 是否为 777

# 测试 jr $ra（函数返回）
# 在 func1 中实现

# 测试 jr $t3（非 $ra 寄存器跳转）
ori $t3, $0, 0x30c4    # 提前准备跳转目标地址(end_jr)
jal func2              # 调用 func2
nop


# 函数
func1:
    ori $v0, $0, 777     # 设置返回值
    jr  $ra              # 返回
    nop

func2:
    ori $v1, $0, 888     # 设置返回值
    jr  $t3              # 跳到 end_jr
    lui $v1, 111     # 不应该执行
    nop

end_jr:
    sw $v1, 60($t0)      # 确认执行到了 end_jr, $v1=888
    nop
```

# P4 思考题

1. 阅读下面给出的 DM 的输入示例中（示例 DM 容量为 4KB，即 32bit × 1024 字），根据你的理解回答，这个 addr 信号又是从哪里来的？
   地址信号 addr 位数为什么是 [11:2] 而不是 [9:0] ？
   1024 个字, `1024 = 2 ** 10`, 所以需要 10 位地址寻址. `addr` 信号来自于 ALU 的计算.
   而且, 因为 MIPS 是字节寻址的, 而在 DM 里是字寻址, 4 字节一字, 因此后两位固定为 0, 且 DM 一个是地址右移两位, 所以取 `[11:2]`.

2. 思考上述两种控制器设计的译码方式，给出代码示例，并尝试对比各方式的优劣。
   方法一: 按照指令编码(我的实现方式)

```verilog
    always @(*) begin
        case (opcode)
            6'b000000: begin
                case (funct)
                    `ADD: begin
                        MemtoReg = 2'b00;
                        MemWrite = 1'b0;
                        RegWrite = 1'b1;
                        ALUSrc = 1'b0;
                        RegDst = 2'b01;
                        Ext_op = 1'b0;
                        NPCSel = `SEQU;
                        ALUControl = `ADD_ALU;
                    end
                    `SUB: begin
                        MemtoReg = 2'b00;
                        MemWrite = 1'b0;
                        RegWrite = 1'b1;
                        ALUSrc = 1'b0;
                        RegDst = 2'b01;
                        Ext_op = 1'b0;
                        NPCSel = `SEQU;
                        ALUControl = `SUB_ALU;
                    end
                    `JR: begin
                        MemtoReg = 2'b00;
                        MemWrite = 1'b0;
                        RegWrite = 1'b0;
                        ALUSrc = 1'b0;
                        RegDst = 2'b00;
                        Ext_op = 1'b0;
                        NPCSel = `JREG;
                        ALUControl = 4'b0000;
                    end
                    default: begin
                        MemtoReg = 2'b00;
                        MemWrite = 1'b0;
                        RegWrite = 1'b0;
                        ALUSrc = 1'b0;
                        RegDst = 2'b00;
                        Ext_op = 1'b0;
                        NPCSel = `SEQU;
                        ALUControl = 4'b0000;
                    end
                endcase
            end
            `ORI: begin
                MemtoReg = 2'b00;
                MemWrite = 1'b0;
                RegWrite = 1'b1;
                ALUSrc = 1'b1;
                RegDst = 2'b00;
                Ext_op = 1'b0;
                NPCSel = `SEQU;
                ALUControl = `ORI_ALU;
            end
            `LW: begin
                MemtoReg = 2'b01;
                MemWrite = 1'b0;
                RegWrite = 1'b1;
                ALUSrc = 1'b1;
                RegDst = 2'b00;
                Ext_op = 1'b1;
                NPCSel = `SEQU;
                ALUControl = `ADD_ALU;
            end
            `SW: begin
                MemtoReg = 2'b00;
                MemWrite = 1'b1;
                RegWrite = 1'b0;
                ALUSrc = 1'b1;
                RegDst = 2'b00;
                Ext_op = 1'b1;
                NPCSel = `SEQU;
                ALUControl = `ADD_ALU;
            end
            `LUI: begin
                MemtoReg = 2'b00;
                MemWrite = 1'b0;
                RegWrite = 1'b1;
                ALUSrc = 1'b1;
                RegDst = 2'b00;
                Ext_op = 1'b0;
                NPCSel = `SEQU;
                ALUControl = `LUI_ALU;
            end
            `BEQ: begin
                MemtoReg = 2'b00;
                MemWrite = 1'b0;
                RegWrite = 1'b0;
                ALUSrc = 1'b0;
                RegDst = 2'b01;
                Ext_op = 1'b1;
                NPCSel = `BRAN;
                ALUControl = `SUB_ALU;
            end
            `JAL: begin
                MemtoReg = 2'b10;
                MemWrite = 1'b0;
                RegWrite = 1'b1;
                ALUSrc = 1'b0;
                RegDst = 2'b10;
                Ext_op = 1'b0;
                NPCSel = `JUMP;
                ALUControl = 4'b0000;
            end
            default: begin
                MemtoReg = 2'b00;
                MemWrite = 1'b0;
                RegWrite = 1'b0;
                ALUSrc = 1'b0;
                RegDst = 2'b00;
                Ext_op = 1'b0;
                NPCSel = `SEQU;
                ALUControl = 4'b0000;
            end
        endcase
    end
```

优点是比较清晰, 每条指令对应的各个信号, 并且可以清楚看到支持的每一条指令, 并且容易和设计表格对应. 并且在扩展时只需要增加指令, 不需要修改原有代码.  
缺点是指令集更大的时候, 过于冗长复杂.

方法二: 按照信号进行编码:
伪代码:

```verilog
    NPCSel = (beq)     ? `BRAN :
             (jr)      ? `JREG :
             (j | jal) ? `JUMP :
                         `SEQU;
```

优点是方便观察每个信号, 并且类似于或阵列的硬件构造, 根据指令选择信号. 并且代码长度较短, 比较简洁.
缺点是增加指令时, 要修改原有代码, 可能引入 bug.

3. 在相应的部件中，复位信号的设计都是同步复位，这与 P3 中的设计要求不同。请对比同步复位与异步复位这两种方式的 reset 信号与 clk 信号优先级的关系。
   异步复位具有最高优先级. 不管时钟是否到来, 异步复位会立即把寄存器进行复位, 无需时钟控制.
   同步复位优先级低于时钟. 只有在时钟沿到来时复位才生效，时钟的信号更加优先.

4. C 语言是一种弱类型程序设计语言。C 语言中不对计算结果溢出进行处理，这意味着 C 语言要求程序员必须很清楚计算结果是否会导致溢出。因此，如果仅仅支持 C 语言，MIPS 指令的所有计算指令均可以忽略溢出。 请说明为什么在忽略溢出的前提下，addi 与 addiu 是等价的，add 与 addu 是等价的。提示：阅读《MIPS32® Architecture For Programmers Volume II: The MIPS32® Instruction Set》中相关指令的 Operation 部分。

- `add`:

```
 temp ← (GPR[rs]31||GPR[rs]31..0) + (GPR[rt]31||GPR[rt]31..0)
 if temp32 ≠ temp31 then
 SignalException(IntegerOverflow)
 else
 GPR[rd] ← temp
 endif
```

- `addu`:
  > Programming Notes:
  > ADDU performs the same arithmetic operation but does not trap on overflow.

```
 temp← GPR[rs] + GPR[rt]
 GPR[rd]← temp
```

可见, `add` 和 `addu` 的唯一区别就是 `add` 会在发生溢出时发出异常, 而 `addu` 不会, 所以忽略掉溢出(也就是 `add` 的 `SignalException(IntegerOverflow)`) 两者是等价的.  
`addi` 和 `addiu` 同理.
