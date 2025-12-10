import { QuartzComponent, QuartzComponentConstructor } from "./types"

const AMusicPlayer: QuartzComponent = () => {
  return (
    <div className="aplayer-container">
      <div id="player"></div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
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
                    url: '/static/ヰ世界情緒 - シリウスの心臓.flac', 
                    cover: '/static/ヰ世界情緒 - シリウスの心臓.jpg',
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
.aplayer {
  z-index: 1000; 
}
.aplayer.aplayer-fixed {
    left: auto !important; 
    right: 0px !important; 
    width: 300px; /* 示例宽度 */
    bottom: 0px !important; 
}
`

export default (() => AMusicPlayer) satisfies QuartzComponentConstructor