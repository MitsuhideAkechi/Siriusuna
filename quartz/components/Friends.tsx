/*
 * Under Developping...
*/

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import yaml from "js-yaml"
import fs from "fs"
import path from "path"

interface FriendEntry {
  name: string
  url: string
  cover: string
  desc: string
  tags: string[]
}

function Friends({ fileData }: QuartzComponentProps) {
  if (fileData.slug !== "friends") {
    return null
  }

  const friendsFilePath = path.join(process.cwd(), "static", "data", "friends.yml")

  let items: FriendEntry[] = []

  try {
    const fileContent = fs.readFileSync(friendsFilePath, "utf-8")
    items = yaml.load(fileContent) as FriendEntry[]
  } catch (err) {
    console.error(`Error loading friends file at ${friendsFilePath}:`, err)
    return (
      <div style={{ color: "red", padding: "1rem", border: "1px solid red" }}>
        无法加载友链数据，请检查 static/data/friends.yml 是否存在。
      </div>
    )
  }

  return (
    <div class="friends-grid">
      {items.map((item) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" class="friend-card-link">
          <div class="friend-card">
            <div class="friend-cover-container">
                <img src={item.cover} alt={item.name} class="friend-cover" loading="lazy" />
            </div>
            
            <div class="friend-content">
              <h3 class="friend-title">{item.name}</h3>
              <p class="friend-desc">{item.desc}</p>
              
              {item.tags && item.tags.length > 0 && (
                <div class="friend-tags">
                  {item.tags.map(tag => (
                    <span class="friend-tag">#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}


Friends.css = `
.friends-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

/* 响应式布局：类似 sm:grid-cols-2 lg:grid-cols-3 */
@media (min-width: 600px) {
  .friends-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .friends-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.friend-card-link {
  text-decoration: none !important; /* 移除 Quartz 默认链接下划线 */
  color: inherit !important;
  display: block;
  height: 100%;
}

.friend-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--lightgray);
  background: var(--light);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* 悬停效果 */
.friend-card:hover {
  transform: translateY(-4px);
  border-color: var(--secondary);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.friend-cover-container {
  width: 100%;
  height: 140px;
  overflow: hidden;
  background-color: var(--lightgray);
}

.friend-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* 图片微缩放效果 */
.friend-card:hover .friend-cover {
  transform: scale(1.05);
}

.friend-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.friend-title {
  margin: 0 0 0.5rem 0 !important;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
}

.friend-desc {
  font-size: 0.9rem;
  color: var(--darkgray);
  margin: 0 0 1rem 0;
  line-height: 1.4;
  flex-grow: 1; /* 让描述占据剩余空间，保证底部标签对齐 */
}

.friend-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto; /* 推到底部 */
}

.friend-tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  background-color: var(--lightgray);
  color: var(--darkgray);
}
`

export default (() => Friends) satisfies QuartzComponentConstructor