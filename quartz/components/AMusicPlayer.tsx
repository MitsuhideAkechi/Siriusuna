import { QuartzComponent, QuartzComponentConstructor } from "./types"

const AMusicPlayer: QuartzComponent = () => {
  return (
    <div className="aplayer-container">
      <div id="player"></div>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css" />

      <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

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
                    url: 'quartz/static/ヰ世界情緒 - シリウスの心臓.flac', 
                    cover: 'quartz/static/ヰ世界情緒 - シリウスの心臓.jpg',
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

export default (() => AMusicPlayer) satisfies QuartzComponentConstructor