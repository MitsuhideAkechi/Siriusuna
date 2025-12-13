---
title: Final Design Document
published: 2025-12-11
tags:
  - 计算机组成
  - CPU
---

# 体系结构

- 指令集:
  ```
  add, sub, and, or, slt, sltu, lui
  addi, andi, ori
  lb, lh, lw, sb, sh, sw
  mult, multu, div, divu, mfhi, mflo, mthi, mtlo
  beq, bne, jal, jr
  mfc0, mtc0, eret, syscall
  ```
- 端口:

  | 信号                   | 方向 | 描述                            |
  | ---------------------- | ---- | ------------------------------- |
  | `clk`                  | I    | 时钟信号                        |
  | `reset`                | I    | **同步**复位信号                |
  | `interrupt`            | I    | 来自外界的一个中断信号          |
  | `i_inst_rdata[31:0]`   | I    | i_inst_addr 对应的 32 位指令    |
  | `m_data_rdata[31:0]`   | I    | 数据存储器存储的相应数据        |
  | `i_inst_addr[31:0]`    | O    | 需要进行取指操作的流水级 PC     |
  | `m_data_addr[31:0]`    | O    | 待写入/读出的数据存储器相应地址 |
  | `m_data_wdata[31:0]`   | O    | 待写入数据存储器相应数据        |
  | `m_data_byteen[3:0]`   | O    | 四位字节使能                    |
  | `m_inst_addr[31:0]`    | O    | M 级 PC                         |
  | `w_grf_we`             | O    | GRF 写使能信号                  |
  | `w_grf_addr [4:0]`     | O    | GRF 中待写入寄存器编号          |
  | `w_grf_wdata [31:0]`   | O    | GRF 中待写入数据                |
  | `w_inst_addr [31:0]`   | O    | W 级 PC                         |
  | `macroscopic_pc[31:0]` | O    | 宏观 PC                         |

# 基本模块

# Bridge

- 端口:

| 信号                            | 方向 | 描述                          |
| ------------------------------- | ---- | ----------------------------- |
| `From_CPU_i_inst_addr[31:0]`    | I    | 来自 CPU 的取指地址           |
| `To_CPU_i_inst_rdata[31:0]`     | O    | 返回给 CPU 的取指数据         |
| `From_CPU_macroscopic_PC[31:0]` | I    | CPU 的宏观 PC 值              |
| `To_CPU_HW_interrupt[5:0]`      | O    | 发送给 CPU 的硬件中断信号     |
| `From_CPU_m_inst_addr[31:0]`    | I    | CPU M 级指令地址              |
| `From_CPU_m_data_addr[31:0]`    | I    | CPU M 级数据地址              |
| `From_CPU_m_data_byteen[3:0]`   | I    | CPU M 级数据字节使能          |
| `From_CPU_m_wdata[31:0]`        | I    | CPU M 级写数据                |
| `To_CPU_m_rdata[31:0]`          | O    | 返回给 CPU 的 M 级读数据      |
| `From_CPU_w_inst_addr[31:0]`    | I    | CPU W 级指令地址              |
| `From_CPU_w_grf_wdata[31:0]`    | I    | CPU W 级写入 GRF 的数据       |
| `From_CPU_w_grf_addr[4:0]`      | I    | CPU W 级 GRF 写地址           |
| `From_CPU_w_grf_we`             | I    | CPU W 级 GRF 写使能           |
| `To_tb_i_inst_addr[31:0]`       | O    | 输出给测试平台的取指地址      |
| `From_tb_i_inst_rdata[31:0]`    | I    | 来自测试平台的指令数据        |
| `To_tb_macroscopic_PC[31:0]`    | O    | 输出给测试平台的宏观 PC       |
| `To_tb_m_interrupt_addr[31:0]`  | O    | 输出给测试平台的中断地址      |
| `To_tb_m_interrupt_byteen[3:0]` | O    | 输出给测试平台的中断字节使能  |
| `From_tb_interrupt`             | I    | 来自测试平台的中断信号        |
| `To_tb_m_inst_addr[31:0]`       | O    | 输出给测试平台的 M 级指令地址 |
| `To_tb_m_data_addr[31:0]`       | O    | 输出给测试平台的数据地址      |
| `To_tb_m_data_byteen[3:0]`      | O    | 输出给测试平台的数据字节使能  |
| `To_tb_m_wdata[31:0]`           | O    | 输出给测试平台的数据写入值    |
| `From_tb_m_rdata[31:0]`         | I    | 来自测试平台的数据读出值      |
| `To_tb_w_grf_we`                | O    | 输出给测试平台的 GRF 写使能   |
| `To_tb_w_grf_addr[4:0]`         | O    | 输出给测试平台的 GRF 写地址   |
| `To_tb_w_grf_wdata[31:0]`       | O    | 输出给测试平台的 GRF 写入数据 |
| `To_tb_w_inst_addr[31:0]`       | O    | 输出给测试平台的 W 级指令地址 |
| `To_tc0_addr[31:2]`             | O    | 输出给 TC0 的地址             |
| `To_tc0_we`                     | O    | 输出给 TC0 的写使能           |
| `To_tc0_Din[31:0]`              | O    | 输出给 TC0 的写数据           |
| `From_tc0_Dout[31:0]`           | I    | 来自 TC0 的读数据             |
| `From_tc0_IRQ`                  | I    | 来自 TC0 的中断信号           |
| `To_tc1_addr[31:2]`             | O    | 输出给 TC1 的地址             |
| `To_tc1_we`                     | O    | 输出给 TC1 的写使能           |
| `To_tc1_Din[31:0]`              | O    | 输出给 TC1 的写数据           |
| `From_tc1_Dout[31:0]`           | I    | 来自 TC1 的读数据             |
| `From_tc1_IRQ`                  | I    | 来自 TC1 的中断信号           |

# TC

- 端口:

  | 信号         | 方向 | 描述               |
  | ------------ | ---- | ------------------ |
  | `clk`        | I    | 时钟信号           |
  | `reset`      | I    | 同步复位信号       |
  | `Addr[31:2]` | I    | 访问地址（字对齐） |
  | `WE`         | I    | 写使能             |
  | `Din[31:0]`  | I    | 写入数据           |
  | `Dout[31:0]` | O    | 读出数据           |
  | `IRQ`        | O    | 中断信号           |

- 地址:
  - TC0: 0x0000_7F00 ~ 0x0000_7F0B
  - TC1: 0x0000_7F10 ~ 0x0000_7F1B

# 中断发生器

- 地址: 0x0000_7F20 ~ 0x0000_7F23

# CPU

- 端口:

  | 信号                   | 方向 | 描述                            |
  | ---------------------- | ---- | ------------------------------- |
  | `clk`                  | I    | 时钟信号                        |
  | `reset`                | I    | **同步**复位信号                |
  | `HW_interrupt`         | I    | 外部中断信号                    |
  | `i_inst_rdata[31:0]`   | I    | i_inst_addr 对应的 32 位指令    |
  | `m_data_rdata[31:0]`   | I    | 数据存储器存储的相应数据        |
  | `i_inst_addr[31:0]`    | O    | 需要进行取指操作的流水级 PC     |
  | `m_data_addr[31:0]`    | O    | 待写入/读出的数据存储器相应地址 |
  | `m_data_wdata[31:0]`   | O    | 待写入数据存储器相应数据        |
  | `m_data_byteen[3:0]`   | O    | 四位字节使能                    |
  | `m_inst_addr[31:0]`    | O    | M 级 PC                         |
  | `w_grf_we`             | O    | GRF 写使能信号                  |
  | `w_grf_addr [4:0]`     | O    | GRF 中待写入寄存器编号          |
  | `w_grf_wdata [31:0]`   | O    | GRF 中待写入数据                |
  | `w_inst_addr [31:0]`   | O    | W 级 PC                         |
  | `macroscopic_pc[31:0]` | O    | 宏观 PC (M 级 PC)               |

## F 级

### IFU

#### PC & NPC

##### PC

| 信号        | 方向 | 描述                           |
| ----------- | ---- | ------------------------------ |
| `clk`       | I    | 时钟信号                       |
| `reset`     | I    | **同步**复位信号               |
| `en`        | I    | 写使能信号, 阻塞时不可写入 NPC |
| `NPC[31:0]` | I    | 下一指令地址                   |
| `PC[31:0]`  | O    | 取指令地址                     |

##### NPC

| 信号            | 方向 | 描述                                      |
| --------------- | ---- | ----------------------------------------- |
| `F_PC[31:0]`    | I    | F 级指令当地址                            |
| `ra[31:0]`      | I    | `jr`指令, 寄存器寻址, 跳转地址            |
| `offset[15:0]`  | I    | 地址偏移量                                |
| `imm[25:0]`     | I    | J 型指令,相对 PC 寻址, 跳转地址           |
| `NPCSel[1:0]`   | I    | 下一 PC 选择信号                          |
| `Zero`          | I    | rs 和 rt 相等标志(1=相等, 0=不等)         |
| `CP0Req`        | I    | 来自 CP0 的暂停信号, 跳转至 `0x0000_4180` |
| `PCPlus4[31:0]` | O    | 当前指令地址+4                            |
| `NPC[31:0]`     | O    | 下一指令地址                              |

**由于延迟槽, 跳转指令在 D 级时, 决定跳转与否时, 后一条指令已经取出, 也就是 PC 已经加 4, 因此偏移量无需 PC + 4 + offset, 而是 F_PC + offset**  
**同理, J 型指令, 需要的是 PC + 4 的高四位, 只需要 F_PC 的高四位即可**  
**`jr` 指令要存储的是 PC + 8**

**`eret`并无延迟槽, 可以直接改写 NPC, 随后当作顺序执行的指令编码, 以防止延迟槽产生.**

- `NPCSel`编码:

  | NPCSel | 含义          |
  | ------ | ------------- |
  | `00`   | 顺序执行      |
  | `01`   | J 型跳转      |
  | `10`   | JR 寄存器跳转 |
  | `11`   | 分支跳转      |

**若 `NPCSel` 不为 `2'b00`, 则 `BD` 置为 1**

#### IM(外置)

| 信号                 | 方向 | 描述                         |
| -------------------- | ---- | ---------------------------- |
| `i_inst_addr[31:0]`  | I    | 需要进行取指操作的流水级 PC  |
| `i_inst_rdata[31:0]` | O    | i_inst_addr 对应的 32 位指令 |

### FDReg

| 信号              | 方向 | 描述                                                         |
| ----------------- | ---- | ------------------------------------------------------------ |
| `clk`             | I    | 时钟信号                                                     |
| `reset`           | I    | **同步**复位信号                                             |
| `en`              | I    | 写入使能信号, 阻塞时无效, 不得进入 D 级                      |
| `clr`             | I    | 清除信号, 阻塞时有效, 清除 F 级要进入 D 级中的信息, 插入气泡 |
| `CP0Req`          | I    | 清除流水线, 但保留 PC 和 BD                                  |
| `F_PC[31:0]`      | I    | F 级指令的 PC                                                |
| `F_instr[31:0]`   | I    | F 级取出的指令                                               |
| `F_PCplus8[31:0]` | I    | F 级取出的指令对应的 PC + 8                                  |
| `D_instr[31:0]`   | O    | 传入 D 级的指令                                              |
| `D_PCplus8[31:0]` | O    | 传入 D 级的指令对应的 PC + 8                                 |
| `D_PC[31:0]`      | O    | D 级指令的 PC                                                |

## D 级

### RF

| 信号        | 方向 | 描述                           |
| ----------- | ---- | ------------------------------ |
| `clk`       | I    | 时钟信号                       |
| `reset`     | I    | **同步**复位信号               |
| `clr`       | I    | 清空当前错误分支预测           |
| `WE`        | I    | 写使能信号                     |
| `A1[4:0]`   | I    | 地址输入信号,读出到 RD1        |
| `A2[4:0]`   | I    | 地址输入信号,读出到 RD2        |
| `A3[4:0]`   | I    | 地址输入信号，写入的目标寄存器 |
| `WD[31:0]`  | I    | 32 位数据输入信号              |
| `RD1[31:0]` | O    | 输出 A1 指定的寄存器数据       |
| `RD2[31:0]` | O    | 输出 A2 指定的寄存器数据       |

### EXT

| 信号            | 方向 | 描述                                   |
| --------------- | ---- | -------------------------------------- |
| `imm[15:0]`     | I    | 指令中的立即数                         |
| `Ext_op`        | I    | 扩展控制信号(0=无符号扩展，1=符号扩展) |
| `Ext_out[31:0]` | O    | 扩展后的结果                           |

### DEReg

| 信号              | 方向 | 描述                                                         |
| ----------------- | ---- | ------------------------------------------------------------ |
| `clk`             | I    | 时钟信号                                                     |
| `reset`           | I    | **同步**复位信号                                             |
| `clr`             | I    | 清除信号, 阻塞时有效, 清除 D 级要进入 E 级中的信息, 插入气泡 |
| `CP0Req`          | I    | 清除流水线, 但保留 PC 和 BD                                  |
| `D_PCplus8[31:0]` | I    | 本条指令对应的 PC + 8                                        |
| `D_PC[31:0]`      | I    | D 级指令的 PC                                                |
| `D_instr[31:0]`   | I    | D 级译码的指令                                               |
| `D_RD1[31:0]`     | I    | 从寄存器读出的 RD1 数据                                      |
| `D_RD2[31:0]`     | I    | 从寄存器读出的 RD2 数据                                      |
| `D_A3[4:0]`       | I    | 本条指令目的寄存器                                           |
| `D_ext[31:0]`     | I    | D 级立即数扩展结果                                           |
| `E_PCplus8[31:0]` | O    | 进入 E 级的 PC + 8                                           |
| `E_instr[31:0]`   | O    | 进入 E 级的指令编码                                          |
| `E_RD1[31:0]`     | O    | 进入 E 级的 RD1 数据                                         |
| `E_RD2[31:0]`     | O    | 进入 E 级的 RD2 数据                                         |
| `E_A3[4:0]`       | O    | 进入 E 级的目的寄存器                                        |
| `E_ext[31:0]`     | O    | 进入 E 级的扩展立即数结果                                    |
| `E_PC[31:0]`      | O    | E 级指令的 PC                                                |

### CMP

| 信号        | 方向 | 描述     |
| ----------- | ---- | -------- |
| `inA[31:0]` | I    | 比较数 A |
| `inB[31:0]` | I    | 比较数 B |
| `cond[5:0]` | I    | 比较类型 |
| `zero`      | O    | 比较结果 |

## E 级

### ALU

`ALUControl`编码:

| 运算    | 编码 |
| ------- | ---- |
| `or`    | 0001 |
| `add`   | 0010 |
| `and`   | 0011 |
| `sll16` | 0101 |
| `slt`   | 0110 |
| `sub`   | 0111 |
| `sltu`  | 1000 |

端口:

| 信号              | 方向 | 描述             |
| ----------------- | ---- | ---------------- |
| `SrcA`            | I    | 操作数 1         |
| `SrcB`            | I    | 操作数 2         |
| `ALUControl[3:0]` | I    | 运算种类控制信号 |
| `Result[31:0]`    | O    | 运算结果         |

### MDU

- 内部结构:
  - 乘除法计算组合逻辑
  - `HI`, `LO` 寄存器, `counter` 寄存器(记录运算周期数)
- 端口:

  | 信号              | 方向 | 描述                                                    |
  | ----------------- | ---- | ------------------------------------------------------- |
  | `clk`             | I    | 时钟信号                                                |
  | `reset`           | I    | **同步**复位信号                                        |
  | `start`           | I    | 乘除法运算起始信号                                      |
  | `SrcA[31:0]`      | I    | 操作数 1                                                |
  | `SrcB[31:0]`      | I    | 操作数 2                                                |
  | `funct[5:0]`      | I    | 指令类型, 与 `MDU_Act` 配合判断是否为某个乘除法相关指令 |
  | `MDU_Act`         | I    | 是否启动 MDU 运算(0=非乘除法指令, 否; 1=乘除法指令,是)  |
  | `MDUResult[31:0]` | O    | 输出结果                                                |
  | `busy`            | O    | 运算处理中信号                                          |

### EMReg

| 信号                | 方向 | 描述                        |
| ------------------- | ---- | --------------------------- |
| `clk`               | I    | 时钟信号                    |
| `reset`             | I    | **同步**复位信号            |
| `CP0Req`            | I    | 清除流水线, 但保留 PC 和 BD |
| `E_PCplus8[31:0]`   | I    | 本条指令对应的 PC + 8       |
| `E_PC[31:0]`        | I    | E 级指令的 PC               |
| `E_instr[31:0]`     | I    | E 级执行的的指令            |
| `E_ALUResult[31:0]` | I    | E 级 ALU 产生的结果         |
| `E_RD2[31:0]`       | I    | 从寄存器读出的第二个操作数  |
| `E_A3[4:0]`         | I    | 本条指令的目的寄存器        |
| `M_PCplus8[31:0]`   | O    | 本条指令对应的 PC + 8       |
| `M_instr[31:0]`     | O    | M 级执行的的指令            |
| `M_ALUResult[31:0]` | O    | 传入 M 级的 ALU 计算结果    |
| `M_RD2[31:0]`       | O    | 传入 M 级的第二个操作数     |
| `M_A3[4:0]`         | O    | 传入 M 级的目的寄存器序号   |
| `M_PC[31:0]`        | O    | M 级指令的 PC               |

## M 级

### CP0

- 端口:

  | 信号                | 方向 | 描述                           |
  | ------------------- | ---- | ------------------------------ |
  | `clk`               | I    | 时钟信号                       |
  | `reset`             | I    | **同步**复位信号               |
  | `en`                | I    | 写使能信号                     |
  | `CP0_addr[4:0]`     | I    | CP0 寄存器地址                 |
  | `CP0_in[31:0]`      | I    | 写入 CP0 的数据                |
  | `VPC[31:0]`         | I    | 受害 PC                        |
  | `BD`                | I    | 是否处于延迟槽                 |
  | `Exccode[4:0]`      | I    | 异常类型编码                   |
  | `HW_interrupt[5:0]` | I    | 外部硬件中断向量               |
  | `EXL_clr`           | I    | EXL 清零信号, 用于从内核态返回 |
  | `CP0_out[31:0]`     | O    | 从 CP0 读出的数据              |
  | `EPC_out[31:0]`     | O    | 输出异常发生时的 PC            |
  | `Req`               | O    | 是否请求异常处理               |

- 寄存器:

  - `SR` 寄存器(12):
    - `IM`: 每个外设中断的分开关, 置 1 开.
    - `EXL`: 是否处理*异常和中断* **_(0=是, 1=否)_**(因为置为 1 表示处于核心态)
    - `IE`: 是否处理*外部中断*

  | 位宽 | `31:16` | `15:10` | `9:2` | `1` | `0` |
  | ---- | ------- | ------- | ----- | --- | --- |
  | `SR` |         | IM      |       | EXL | IE  |

  - `Cause` 寄存器(13):

    - `BD`: 当前指令是否为延迟槽指令(是=1, 否=0)
    - `IP`: 当有外部中断时, 记录外部中断的来源外设, 来源置 1.
    - `Exccode`: 异常类型码.

  | 位宽    | `31` | `30:16` | `15:10` | `9:7` | `6:2`   | `1:0` |
  | ------- | ---- | ------- | ------- | ----- | ------- | ----- |
  | `Cause` | BD   |         | IP      |       | Exccode |       |

  - `EPC` 寄存器(14): 记录异常处理结束后需要返回的 PC.

### ByteDance

| 信号         | 方向 | 描述      |
| ------------ | ---- | --------- |
| `addr[31:0]` | I    | 访问地址  |
| `data[31:0]` | I    | 取出内容  |
| `load[5:0]`  | I    | load 指令 |
| `Dout[31:0]` | O    | 最终输出  |

### BE

| 信号          | 方向 | 描述       |
| ------------- | ---- | ---------- |
| `addr[31:0]`  | I    | 访问地址   |
| `data[31:0]`  | I    | 存入内容   |
| `store[5:0]`  | I    | store 指令 |
| `byteen[3:0]` | O    | 字节写使能 |
| `Din[31:0]`   | O    | 最终输入   |

### DM(外置)

| 信号                 | 方向 | 描述                            |
| -------------------- | ---- | ------------------------------- |
| `m_data_addr[31:0]`  | I    | 待写入/读出的数据存储器相应地址 |
| `m_data_wdata[31:0]` | I    | 待写入数据存储器相应数据        |
| `m_data_byteen[3:0]` | I    | 四位字节使能                    |
| `m_inst_addr[31:0]`  | I    | M 级 PC                         |
| `m_data_rdata[31:0]` | O    | 数据存储器存储的相应数据        |

### MWReg

| 信号                | 方向 | 描述                                 |
| ------------------- | ---- | ------------------------------------ |
| `clk`               | I    | 时钟信号                             |
| `reset`             | I    | **同步**复位信号                     |
| `CP0Req`            | I    | 清除流水线, 但保留 PC                |
| `M_PC[31:0]`        | I    | M 级指令的 PC                        |
| `M_PCplus8[31:0]`   | I    | 本条指令对应的 PC + 8                |
| `M_instr[31:0]`     | I    | M 级执行的的指令                     |
| `M_ALUResult[31:0]` | I    | 传入 M 级的, 本条指令的 ALU 计算结果 |
| `M_RD_Mem[31:0]`    | I    | M 级读出的 DM 数据                   |
| `M_A3[4:0]`         | I    | 本条指令的目的寄存器序号             |
| `W_instr[31:0]`     | O    | 传入 W 级的指令                      |
| `W_PCplus8[31:0]`   | O    | 本条指令对应的 PC + 8                |
| `W_ALUResult[31:0]` | O    | 传入 W 级的, 本条指令的 ALU 计算结果 |
| `W_RD_Mem[31:0]`    | O    | 传入 W 级的, 本条指令读出的 DM 数据  |
| `W_A3[4:0]`         | O    | 传入 W 级的,本条指令的目的寄存器序号 |
| `W_PC[31:0]`        | O    | W 级指令的 PC                        |

## Controller

端口:

| 信号              | 方向 | 描述                                                       |
| ----------------- | ---- | ---------------------------------------------------------- |
| `Opcode[5:0]`     | I    | 指令的`[31:26]`, op 部分                                   |
| `Funct[5:0]`      | I    | *R 指令*的`[5:0]`, funct 部分                              |
| `rs[5:0]`         | I    | 用于判断`mfc0`, `mtc0`                                     |
| `MemtoReg[1:0]`   | O    | 寄存器回写的数据来源(00=ALU 结果, 01=内存数据, 10=PCPlus8) |
| `NPCSel[1:0]`     | O    | 下一 PC 选择信号                                           |
| `ALUSrc`          | O    | ALU 第二操作数选择(0=寄存器, 1=立即数)                     |
| `RegDst[1:0]`     | O    | 寄存器写入目标（00=rt, 01=rd, 10=0x1F）                    |
| `ExtOp`           | O    | 扩展方式(0=无符号, 1=有符号)                               |
| `RegWrite`        | O    | 寄存器写使能信号                                           |
| `ALUControl[3:0]` | O    | ALU 运算选择信号                                           |
| `t_rs[2:0]`       | O    | 距离需要 rs 寄存器的值的周期数                             |
| `t_rt[2:0]`       | O    | 距离需要 rt 寄存器的值的周期数                             |
| `t[2:0]`          | O    | 距离产生可用数值的周期数                                   |
| `MDU_mf`          | O    | 指令是否是 `mfhi`, `mflo`(0=否, 1=是)                      |
| `start`           | O    | 乘除法计算开始                                             |
| `MDU_Act`         | O    | MDU 模块激活信号, 指令为乘除法相关指令时激活               |
| `CP0Write`        | O    | 写入 CP0 的寄存器                                          |
| `CP0Read`         | O    | 指令为`mfc0`, 读取了 CP0 内寄存器的值                      |
| `Exccode[4:0]`    | O    | **D 级**产生的异常                                         |

# 指令

指令集:

```
add, sub, and, or, slt, sltu, lui
addi, andi, ori
lb, lh, lw, sb, sh, sw
mult, multu, div, divu, mfhi, mflo, mthi, mtlo
beq, bne, jal, jr
mfc0, mtc0, eret, syscall
```

- 控制信号

| 指令                           | 信号                |               |               |               |            |         |              |
| ------------------------------ | ------------------- | ------------- | ------------- | ------------- | ---------- | ------- | ------------ |
|                                | `MemtoReg[1:0]`     | `NPCSel[1:0]` | `ALUSrc`      | `RegDst[1:0]` | `RegWrite` | `ExtOp` | `ALUControl` |
| R(`jr` excluded, MDU excluded) | 00                  | 00            | 0             | 01            | 1          | 0       | 根据`funct`  |
| `ori`,`addi`,`and`             | 00                  | 00            | 1             | 00            | 1          | 0       | 0001(or)     |
| `lw`, `lh`, `lb`               | 01                  | 00            | 1             | 00            | 1          | 1       | 0110(add)    |
| `sw`, `sh`, `sb`               | 00                  | 00            | 1             | 00            | 0          | 1       | 0110(add)    |
| `beq`, `bne`                   | 00                  | 11            | 0             | 00            | 0          | 1       | 0111(sub)    |
| `lui`                          | 00                  | 00            | 1             | 00            | 1          | 0       | 0101(sll16)  |
| `jr`                           | 00                  | 10            | 0             | 00            | 0          | 0       | 0000         |
| `jal`                          | 00                  | 01            | 0             | 10            | 1          | 0       | 0000         |
| `mult`, `multu`, `div`, `divu` | 00                  | 00            | 0             | 00            | 0          | 0       | 0000         |
| `mfhi`, `mflo`                 | 00                  | 00            | 0             | 01            | 1          | 0       | 0000         |
| `mthi`, `mtlo`                 | 00                  | 00            | 0             | 00            | 0          | 0       | 0000         |
| `syscall`, `eret`              | 00                  | 00            | 0             | 00            | 0          | 0       | 0000         |
| `mfc0`                         | 00(与 ALU 结果合流) | 00            | 0             | 01            | 1          | 0       | 0000         |
| `mtc0`                         | 00                  | 00            | 0(从 rt 写入) | 00            | 0          | 0       | 0000         |

**`eret` 在 M 级产生一个 `EXL_clr`**

# 转发与阻塞:

1. 考虑:

- $t, t_{use}, t_{new}$, 如果 WA 的话, 一定要检查一下.
- 需不需要转发/被转发
- 需不需要阻塞/被阻塞
- 被阻塞怎么办
- 关于写未定寄存器的访存类
  - 应该注意 E, M 级的转发与阻塞. 具体而言:
    - 在 W 级已经确认寄存器, 并且和其余数据合流了.
    - 而在 M 级到 W 级的时候要修正真正访问的寄存器.
    - 在 E 级不要阻塞不可能访问的寄存器, 在 M 级根据确定的寄存器决定阻塞与否.
  - `assign M_A3_F = (M_opcode == OPCODE) ? NEW_A3_VALUE : M_A3;`, 所有 M 级出发的转发(除 Plus8), 都用新寄存器地址
- 关于阻塞:
  - 对方写的是 0 号寄存器吗?
  - 对方用的寄存器和我们写入的寄存器一样吗?
  - 对方会用到这个寄存器吗? (使用时间是不是 `4'hf`?)
  - 对方使用的时间是否晚于我们这条指令可以产生数据的时间?
- 关于跳转并清空延迟槽:
  - 对于分支: 更改 CMP 模块,决定分支逻辑. 清空延迟操给一个 signal.
  - 对于链接: 更改 MIPS 模块,在 Plus8 转发相关判断增加这条指令的 opcode.
  - 对于清空延迟槽: 在 FDReg 增加一个`FD_clr`信号, 如果需要清空就激活.
  - 但必须注意和阻塞的配合: 当指令被阻塞在 D 级, 是不能允许 FDReg 被清零的, 否则指令会自我清理, 也就是:
    `signal_F = (signal & (~stall))`, `FD_clr = signal_F`
- 关于未定写使能:
  - `RegWrite` 和 `t` 均无法由指令名获得.
  - 因此, 我们默认打开 `RegWrite`, 根据他正常写入的阶段编写`t`.
  - 为了应对不写入需要从 ALU 放出一个`signal`信号, **不满足写入置为 1**. 这个信号随着指令流水到 W 级.
  - 在 W 级, `signal` 为 1 的时候, 将写使能关闭; 在 E,M,W 级, `signal`为 1 的时候, `t`设置为`4'hf`:
    `assign W_WriteReg_F = (W_RegWrite & (~W_signal));`,
    `assign E_t = (E_signal) ? 4'hf : ...`(`M_t`, `W_t`同理)
  - 或者: 在 E 级检测到`signal`为 1, 就把写入寄存器改为 0 号寄存器: `assign E_A3_F = signal ? 5'b00000 : E_A3;`
- 一定注意加接口后, 在以下地方修改:
  - `mips.v`实例化接口修改
  - 模块本身接口修改
  - **模块本身内部修改**

2. 始末点:

- 起点: DE 寄存器发出的 PC@D+8; EM 寄存器出来的 ALUResult, PC@D+8; W 级 GRF 写入前的 WD.
- 终点: D 级 GRF 出来的 RD1, RD2; DE 寄存器出来, 进入 Mux 和 ALU 前的 SrcA, SrcB; M 级写入 DM 的 WD.
  共 $4 \times 5 - 2 - 3 = 15$ 种路线(DE 同级转发不可能(-2); DE, EM 转发给 M 级不可能(-3)).

3. 转发判断:

   - **_T 值_**
     令 D 级、E 级、M 级、W 级分别为 0 、1 、2 、3

     | 指令                           | $t$ | $t_{rs}$ | $t_{rt}$ |
     | ------------------------------ | --- | -------- | -------- |
     | R(`jr` excluded, MDU excluded) | 2   | 1        | 1        |
     | `ori`, `addi`, `andi`          | 2   | 1        | X        |
     | `lw`, `lh`, `lb`               | 3   | 1        | X        |
     | `sw`, `sh`, `sb`               | X   | 1        | 2        |
     | `beq`, `bne`                   | X   | 0        | 0        |
     | `lui`                          | 2   | X        | X        |
     | `jal`                          | 0   | X        | X        |
     | `jr`                           | X   | 0        | X        |
     | `mult`, `multu`, `div`, `divu` | X   | 1        | 1        |
     | `mfhi`, `mflo`                 | 2   | X        | X        |
     | `mthi`, `mtlo`                 | X   | 1        | X        |
     | `syscall`, `eret`              | X   | X        | X        |
     | `mfc0`                         | 3   | X        | X        |
     | `mtc0`                         | X   | X        | 2        |

   - **_转发要求:_**
     - $t_{rt} \ge t - \Delta t$
     - $t_{rs} \ge t - \Delta t$
     - 即: $t_{use} \ge t_{new}$
     - 其中, $t_{use} = t_{rs, rt} - t_{level}, t_{new} = t - t_{level}, level_{D, E, M, W}=0, 1, 2, 3$ 都是距离需要/可用的级别数

4. 阻塞判断:
   - 需要使用转发, 但时间不允许的.
   - MDU 模块正在运行, 但 D 级为乘除法相关指令的.
   - `mtc0` 还未写入(在 D, E 级), 但 D 级为`eret`的.

**阻塞时, 如果同时有异常信号 `Req` , 那么 `PC_en` 不能关闭**

# 异常与中断

- 异常类型: `Int`, `AdEL`, `AdES`, `Syscall`, `RI`, `Ov`
- 判断位置:
  - F 级: `AdEL`(取指异常)
  - D 级: `RI`, `Syscall`(在 D 级的指令解析中一并判断)
  - E 级: `AdEL`, `AdES`, `RI`
  - M 级: 接受前面流水的异常, 以及外部中断信号.

# 测评

**_关于 Editor:_**
`E:\\Microsoft\ VS\ Code\\Code.exe -r . -r -g $1:$2`

```asm
    # 0. 初始化
    ori  $s0, $0, 0         # $s0 作为写入内存的地址指针 (Base Address)
    nop

    # 1. 基础 ALU 指令测试 (无冲突)
    # Test LUI & ORI
    lui  $t0, 0x1234        # $t0 = 0x12340000
    ori  $t0, $t0, 0x5678   # $t0 = 0x12345678
    sw   $t0, 0($s0)        # [ADDR 0x00] Expect: 0x12345678
    addi $s0, $s0, 4

    # Test ADD & ADDI
    addi $t1, $0, 10        # $t1 = 10
    add  $t2, $t1, $t1      # $t2 = 20
    sw   $t2, 0($s0)        # [ADDR 0x04] Expect: 0x00000014
    addi $s0, $s0, 4

    # Test SUB
    sub  $t3, $t2, $t1      # $t3 = 20 - 10 = 10
    sw   $t3, 0($s0)        # [ADDR 0x08] Expect: 0x0000000A
    addi $s0, $s0, 4

    # Test SLT
    addi $t4, $0, -1        # $t4 = 0xFFFFFFFF (-1)
    addi $t5, $0, 10        # $t5 = 10
    slt  $t6, $t4, $t5      # -1 < 10 ? True (1)
    sw   $t6, 0($s0)        # [ADDR 0x0C] Expect: 0x00000001
    addi $s0, $s0, 4

    # Test SLTU
    sltu $t6, $t4, $t5      # 0xFFFFFFFF < 10 ? False (0)
    sw   $t6, 0($s0)        # [ADDR 0x10] Expect: 0x00000000
    addi $s0, $s0, 4


    # 2. 数据冲突与转发测试 (Forwarding)

    # 2.1 ALU-ALU Forwarding (M->E, W->E)
    addi $t1, $0, 0x11
    add  $t2, $t1, $t1      # $t2 = 0x22
    # M->E & W->E Forwarding
    add  $t3, $t2, $t1      # $t3 = 0x22 + 0x11 = 0x33
    sw   $t3, 0($s0)        # [ADDR 0x14] Expect: 0x00000033
    addi $s0, $s0, 4

    # 2.2 Mem-ALU Forwarding (W->E)
    lw   $t1, -4($s0)       # Load 0x33 back into $t1
    nop
    add  $t2, $t1, $t1      # $t2 = 0x66
    sw   $t2, 0($s0)        # [ADDR 0x18] Expect: 0x00000066
    addi $s0, $s0, 4


    # 3. 暂停测试 (Stalling)

    # 3.1 Load-Use Hazard
    lw   $t1, -4($s0)       # Load 0x66
    add  $t2, $t1, $0       # 立即使用 $t1。
                            # 若暂停成功，$t2 = 0x66
    sw   $t2, 0($s0)        # [ADDR 0x1C] Expect: 0x00000066
    addi $s0, $s0, 4


    # 4. 分支与控制冲突测试

    # 4.1 Branch Data Hazard (需要转发到 D 级 CMP)
    addi $t1, $0, 5
    addi $t2, $0, 5
    # $t2 在 E 级，$t1 在 M 级，CMP 在 D 级进行比较
    # 如果没有转发到 D 级，比较将失败
    beq  $t1, $t2, branch_ok
    addi $t3, $0, 0xBAD     # 如果没跳转，写入错误码
    sw   $t3, 0($s0)
    jal  branch_end

branch_ok:
    addi $t3, $0, 0xC00D    # 跳转成功
    sw   $t3, 0($s0)        # [ADDR 0x20] Expect: 0x0000C00D
    addi $s0, $s0, 4

branch_end:

    # 4.2 JAL & JR 测试
    jal  my_function        # $ra = PC + 8
    nop                     # Delay slot (Standard MIPS) or just buffer

    # 返回后继续执行
    sw   $v0, 0($s0)        # [ADDR 0x24] Expect: 0x00000077 (Func result)
    addi $s0, $s0, 4
    jal  skip_func

my_function:
    addi $v0, $0, 0x77      # Set return value
    jr   $ra                # Return
    nop

skip_func:


    # 5. 访存位宽测试 (SB, SH, LB, LH)

    # 将 0x12345678 写入内存，然后测试部分加载
    lui  $t0, 0x1234
    ori  $t0, $t0, 0x5678   # 0x12345678
    sw   $t0, 0($s0)

    # LB Test (Byte 0, Little Endian -> 0x78)
    lb   $t1, 0($s0)        # Expect 0x78

    # SB Test (Store 0xAA to Byte 1)
    # Memory: 12 34 56 78 -> 12 34 AA 78
    addi $t2, $0, 0xAA
    sb   $t2, 1($s0)        # [ADDR 0x28] Expect: 0x1234AA78

    # LH Test (Load halfword lower)
    # Expect 0xAA78 -> 0xFFFFAA78
    lh   $t3, 0($s0)

    # 保存结果进行检查
    sw   $t3, 4($s0)        # [ADDR 0x2C] Expect: 0xFFFFAA78
    addi $s0, $s0, 8        # Skip the scratch space


    # 6. MDU 测试

    # 6.1 MT/MF 数据移动测试
    # 测试能否手动修改 HI/LO 寄存器
    lui  $t0, 0xAABB
    ori  $t0, $t0, 0xCCDD   # $t0 = 0xAABBCCDD
    lui  $t1, 0x1122
    ori  $t1, $t1, 0x3344   # $t1 = 0x11223344

    mthi $t0                # HI = 0xAABBCCDD
    mtlo $t1                # LO = 0x11223344

    mfhi $t2                # 读回 HI
    mflo $t3                # 读回 LO

    sw   $t2, 0($s0)        # [ADDR 0x30] Expect: 0xAABBCCDD (MTHI check)
    addi $s0, $s0, 4
    sw   $t3, 0($s0)        # [ADDR 0x34] Expect: 0x11223344 (MTLO check)
    addi $s0, $s0, 4

    # 6.2 MULT + 立即读取
    # 10 * -2 = -20 (0xFFFFFFEC)
    addi $t1, $0, 10
    addi $t2, $0, -2

    mult $t1, $t2

    # 立即读取，流水线应在此处暂停，直到 Busy 信号拉低
    # 如果没有暂停机制，这里会读到旧数据 (0x11223344)
    mflo $t3

    sw   $t3, 0($s0)        # [ADDR 0x38] Expect: 0xFFFFFFEC (-20)
    addi $s0, $s0, 4

    # 6.3 MULTU + 流水线并行性测试
    # 0x80000000 * 2
    # 2147483648 * 2 = 4294967296 (0x1_00000000) -> HI=1, LO=0

    lui  $t1, 0x8000        # $t1 = 0x80000000
    addi $t2, $0, 2

    multu $t1, $t2

    # 在乘法进行期间，执行无关指令，测试流水线是否继续流动
    # 理论上 CPU 不应暂停，因为没有访问 HI/LO
    addi $t4, $0, 1
    add  $t5, $t4, $t4
    nop
    nop
    nop

    # 此时大约过去了3-4周期，乘法还没完或者刚完
    # 此时读取，暂停时间应该比 6.2 短，或者如果不需暂停则直接通过
    mfhi $t6
    mflo $t7

    sw   $t6, 0($s0)        # [ADDR 0x3C] Expect: 0x00000001 (HI)
    addi $s0, $s0, 4
    sw   $t7, 0($s0)        # [ADDR 0x40] Expect: 0x00000000 (LO)
    addi $s0, $s0, 4

    # 检查中间的无关指令是否执行正确
    sw   $t5, 0($s0)        # [ADDR 0x44] Expect: 0x00000002
    addi $s0, $s0, 4

    # 6.4 DIV (有符号除法) + 余数符号测试
    # -13 / 5 = -2 ... -3
    addi $t1, $0, -13
    addi $t2, $0, 5

    div  $t1, $t2

    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop

    mflo $t3                # Quotient
    mfhi $t4                # Remainder

    sw   $t3, 0($s0)        # [ADDR 0x48] Expect: 0xFFFFFFFE (-2)
    addi $s0, $s0, 4
    sw   $t4, 0($s0)        # [ADDR 0x4C] Expect: 0xFFFFFFFD (-3)
    addi $s0, $s0, 4

    # 6.5 DIVU + 立即读取
    # 0xFFFFFFFF / 2 = 0x7FFFFFFF ... 1
    addi $t1, $0, -1
    addi $t2, $0, 2

    divu $t1, $t2

    # 流水线暂停 10 个周期
    mflo $t3
    mfhi $t4

    sw   $t3, 0($s0)        # [ADDR 0x50] Expect: 0x7FFFFFFF
    addi $s0, $s0, 4
    sw   $t4, 0($s0)        # [ADDR 0x54] Expect: 0x00000001
    addi $s0, $s0, 4

    # 结束
end:
```

异常测试:

```asm
main:
    # CP0 指令与异常测试 (Exceptions)

    # 6.1 MFC0/MTC0
    addi    $t0, $0, 0xFC00         # Int Mask
    mtc0    $t0, $12                # Write Status Register
    nop
    mfc0    $t1, $12                # Read back

    # 6.2 Syscall Exception
    # 预期：跳转到 0x4180，处理后返回下一条指令
    ori     $v0, $0, 0xAAAA
    syscall
    nop

    # 6.3 Overflow Exception
    # 构造溢出: 0x7FFFFFFF + 1
    lui     $t0, 0x7FFF
    ori     $t0, $t0, 0xFFFF
    addi    $t0, $t0, 1             # Should Trigger Exception
    nop

    # 6.4 AdEL (Load Unaligned)
    lw      $t0, 1($0)

    # End of Test
end_loop:
    beq     $0, $0, end_loop
    nop


#### 此处省略 nop 填充至0x4180

# Exception Handler
handler:
    # 1. 保存上下文

    mfc0    $k0, $13            # Read Cause
    mfc0    $k1, $14            # Read EPC

    # 提取 ExcCode (Bit 6:2)
    andi    $k0, $k0, 0x007C
    srl     $k0, $k0, 2

    # 判断是否为 Syscall (Code 8)
    addi    $26, $0, 8          # $k0 usage conflict workaround
    beq     $k0, $26, handle_sys
    nop

    # 判断是否为 Overflow (Code 12)
    addi    $26, $0, 12
    beq     $k0, $26, handle_ov
    nop

    # 其他异常 (如中断)，默认跳过
    b       return_epc
    nop

handle_sys:
    # Syscall 处理: EPC = EPC + 4
    addi    $k1, $k1, 4
    mtc0    $k1, $14            # Update EPC
    # 可以在这里做一些标志位写入，证明syscall被处理
    ori     $27, $0, 0xSYS      # Mark $k1 ($27)
    b       exit_handler
    nop

handle_ov:
    # Overflow 处理: 同样跳过当前指令
    addi    $k1, $k1, 4
    mtc0    $k1, $14
    ori     $27, $0, 0x0FE      # Mark Overflow
    b       exit_handler
    nop

return_epc:
    # 对于中断，通常返回原 EPC；对于其他 Fault，视情况而定
    # 简单的测试中，我们假设让它继续执行
    addi    $k1, $k1, 4
    mtc0    $k1, $14

exit_handler:
    eret
```

# 思考题

1. 请查阅相关资料，说明鼠标和键盘的输入信号是如何被 CPU 知晓的？

   键盘与鼠标事件会由控制器写入设备寄存器, 并触发中断信号(IR). CPU 通过轮询寄存器或响应中断即可得知输入.

2. 请思考为什么我们的 CPU 处理中断异常必须是已经指定好的地址？如果你的 CPU 支持用户自定义入口地址，即处理中断异常的程序由用户提供，其还能提供我们所希望的功能吗？如果可以，请说明这样可能会出现什么问题？否则举例说明。（假设用户提供的中断处理程序合法）

   固定入口保证 CPU 在异常或中断时, 能进入已知且安全统一的处理流程, 行为良好定义并且有统一约定, 成为标准接口, 可以实现访问外设与处理异常的功能.  
   但是如果入口可变, 系统无法保证异常处理位置可靠, 可能破坏系统结构安全与异常处理行为的可预测性.  
   并且中断处理的内核态代码, 拥有访问外设的权限, 交由用户自定义的程序, 行为可能没有定义, 造成一些危险的情况; 或者可能遭受恶意用户的恶意代码的攻击, 造成损害.

3. 为何与外设通信需要 Bridge？

   Bridge 负责将 CPU 的地址空间, 字节使能等转换为外设的格式, 沟通 CPU 与外设. 它屏蔽外设差异, 让 CPU 以统一方式访问不同设备. 从而可以使得复杂的 CPU 和复杂的外设之间逻辑解耦, 每个部件只要实现 Bridge 的标准接口即可并入体系, 是高内聚低耦合的良好设计.

4. 请阅读官方提供的定时器源代码，阐述两种中断模式的异同，并针对每一种模式绘制状态移图。

   - mode 0: 一次性中断(`ctrl[2:1] == 2'b00`)

     - 行为: 启动后计数一次, 到 0 时`IRQ=1`, 并且自动清除 `ctrl[0]`, 下周期回到 `IDLE` 后就停止计数. 中断只触发一次, 但中断信号将持续有效, 直至控制寄存器中的中断屏蔽位被设置为 0.
     - 状态转移图:
       ```mermaid
       stateDiagram-v2
       IDLE --> LOAD : ctrl[0] = 1
       LOAD --> CNT : 载入 preset
       CNT --> CNT : count > 1
       CNT --> INT : count == 1 -> 变为0
       INT --> IDLE : ctrl[0] = 0
       ```

   - mode 1: 自动重置计时(`ctrl[2:1] != 2'b00`)
     - 行为: 到 0 时进入`IRQ=1`, 不关闭 `ctrl[0]`, 下周期回到 `IDLE` 后可以重新 `LOAD`, 进入 `CNT` 循环. 可周期性中断, 但每次计数循环中只产生一周期的中断信号.
     - 状态转移图:
       ```mermaid
       stateDiagram-v2
       IDLE --> LOAD : ctrl[0] = 1
       LOAD --> CNT : 载入 preset
       CNT --> CNT : count > 1
       CNT --> INT : count == 1 -> 变为0
       INT --> IDLE : _IRQ = 0
       IDLE --> LOAD : 若 ctrl[0] 仍为1 -> 再次开始
       ```

5. 倘若中断信号流入的时候，在检测宏观 PC 的一级如果是一条空泡（你的 CPU 该级所有信息均为空）指令，此时会发生什么问题？在此例基础上请思考：在 P7 中，清空流水线产生的空泡指令应该保留原指令的哪些信息？

   空泡无有效 PC, 会导致异常入口的 EPC 错误地保存`0x0000_0000`, 后续无法正确返回. 由于异常中断清空流水线时, 空泡必须至少保留: PC, BD, 确保 EPC 可以正确保存返回的地址, 以供`eret`返回, 从而使得异常恢复正确.

6. 为什么 jalr 指令为什么不能写成 jalr $31, $31？

   `jalr` 会先写回 `$ra = PC + 8`, 再用 `$ra` 作为跳转目标, 会把跳转地址覆盖成返回地址, 导致跳转目标错误.
