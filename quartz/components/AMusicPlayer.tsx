import { QuartzComponent, QuartzComponentConstructor } from "./types"

const AMusicPlayer: QuartzComponent = () => {
  return (
    <div className="aplayer-container">
      <div id="player"></div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            // 确保 DOM 完全加载后再初始化 APlayer
            document.addEventListener('DOMContentLoaded', function() {
              const ap = new APlayer({
                container: document.getElementById('player'),
                fixed: true,
                mini: false,
                autoplay: false,
                theme: '#FADFA3',
                loop: 'all',
                order: 'list',
                preload: 'auto',
                volume: 0.7,
                mutex: true,
                listFolded: false,
                listMaxHeight: '150px',
                lrcType: 0,
                audio: [
                  {
                    name: 'シリウスの心臓',
                    artist: 'ヰ世界情緒',
                    url: '/ヰ世界情緒 - シリウスの心臓.flac', 
                    cover: '/ヰ世界情緒 - シリウスの心臓.jpg',
                    type: 'flac'
                  }
                ]
              });
            });
          `,
        }}
      />
    </div>
  )
}

AMusicPlayer.css = `
/* 确保播放器在页面顶部 */
.aplayer {
  z-index: 1000; 
}
.aplayer.aplayer-fixed {
    bottom: 0;
    left: 0;
    right: 0;
}
`

export default (() => AMusicPlayer) satisfies QuartzComponentConstructor