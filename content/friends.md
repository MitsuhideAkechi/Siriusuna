---
title: 🪢 友链
tags:
  - 主页
  - 友链
summary: Siriusuna 的友站
---

🎉 欢迎交换友链! 可以的话, 请务必让我留下你的足迹!

📌 欢迎按照下面格式告诉我你的信息:

- 昵称/博客名(sitename)
- 主页链接(url)
- 简介与备注(info)
- 头像(avatar)

> [!note]
> 我的自动化友链信息配置脚本还没搞定... 所以到时候都是我手动复制模板输入的啦, 所以信息也没什么严格格式要求, 毕竟是人来读~
> 不过相应的, 下次再来的时候, 发现我填写的有什么问题的话请务必再联系哦!

收到后我会尽快添加到友链列表~ ✨

下面是我的友链 ✨

<div class="friends-grid">

<a href="https://siriusuna.top" class="friend-card">
  <img src="/static/avatars/Siriusuna.png" class="friend-avatar" />
  <div>
    <div class="friend-name">Siriusuna</div>
    <div class="friend-desc">也就是我自己啦. 人最好的朋友是自己(?)</div>
  </div>
</a>
<a href="https://samuflore.top" class="friend-card">
  <img src="https://samuflore.top/images/avatar.jpg" class="friend-avatar" />
  <div>
    <div class="friend-name">SamuFlore's Dimension</div>
    <div class="friend-desc">德才兼備、知行合一</div>
  </div>
</a>
</div>

<div style="text-align: center;">
・・ ・ー・・ ーーー ・・・ー ・ ー・ーー ーーー ・・ー
</div>

🎐 如果你愿意把我添加到你的友链, 我也会很高兴~

🎆 在此附上我的个人信息:

```md
sitename: シリウスナ
url: https://siriusuna.top
info: 光続けば、いつかは終わる定めなのだけれど...
avatar: https://siriusuna.top/static/avatars/Siriusuna.png
```

<style>
/* 超级不优雅，但是目前还没有搞清楚渲染逻辑，只能在这里强制覆盖了。 */
.friends-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
  gap: 18px !important;
  margin-top: 20px !important;
}

.friend-card {
  display: flex !important;
  align-items: center !important;
  gap: 14px !important;
  padding: 16px 18px !important;

  /* 透明毛玻璃 */
  background: rgba(255, 255, 255, 0.14) !important;
  backdrop-filter: blur(14px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(14px) saturate(160%) !important;

  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  border-radius: 18px !important;

  text-decoration: none !important;
  transition:
    box-shadow 0.25s,
    transform 0.2s,
    border-color 0.25s !important;
}

.dark .friend-card,
html.dark .friend-card {
  background: rgba(40, 40, 40, 0.22) !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
}

.friend-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25) !important;
}

.dark .friend-card:hover,
html.dark .friend-card:hover {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45) !important;
}

.friend-avatar {
  width: 52px !important;
  height: 52px !important;
  border-radius: 50% !important;
}

.friend-name {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: var(--fg) !important;
}

.friend-desc {
  font-size: 0.86rem !important;
  color: var(--fg-muted, var(--fg)) !important;
}
</style>