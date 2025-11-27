import "./local.scss";

const SectionPlaylistRecommendation = () => {
  return (
    <section className="section-playlist-recommendation">
      <button className="left-btn">
        <ion-icon class="left-icon" name="chevron-back-outline"></ion-icon>
      </button>
      <button className="right-btn">
        <ion-icon class="right-icon" name="chevron-forward-outline"></ion-icon>
      </button>
      <h1>歌单推荐</h1>
      <div className="second-link-flexbox">
        <a href="#" className="second-link">
          为你推荐
        </a>
        <a href="#" className="second-link">
          经典
        </a>
        <a href="#" className="second-link">
          咖啡馆
        </a>
        <a href="#" className="second-link">
          KTV热歌
        </a>
        <a href="#" className="second-link">
          官方歌单
        </a>
        <a href="#" className="second-link">
          情歌
        </a>
      </div>
      <div className="img-box">
        <figure>
          <div className="img-container">
            <img
              className="section-playlist-img"
              alt="song"
              src="img/carousel/1.webp"
            />
          </div>
          <p className="playlist-name">抖音热歌丨潮流旋律感觉至上</p>
          <p className="play-times">播放量：8.5亿</p>
        </figure>
        <figure>
          <div className="img-container">
            <img
              className="section-playlist-img"
              alt="song"
              src="img/carousel/2.webp"
            />
          </div>
          <p className="playlist-name">抖音热门精选：浅听亿点点的心动</p>
          <p className="play-times">播放量：7089.9万</p>
        </figure>
        <figure>
          <div className="img-container">
            <img
              className="section-playlist-img"
              alt="song"
              src="img/carousel/3.webp"
            />
          </div>
          <p className="playlist-name">聚会必唱|全网精选热歌,单曲循环</p>
          <p className="play-times">播放量：2.9万</p>
        </figure>
        <figure>
          <div className="img-container">
            <img
              className="section-playlist-img"
              alt="song"
              src="img/carousel/4.webp"
            />
          </div>
          <p className="playlist-name">伤感华语：不曾想词曲能如此心酸</p>
          <p className="play-times">播放量：803.4万</p>
        </figure>
        <figure>
          <div className="img-container">
            <img
              className="section-playlist-img"
              alt="song"
              src="img/carousel/5.webp"
            />
          </div>
          <p className="playlist-name">500首抖音热歌：包你一次听个够</p>
          <p className="play-times">播放量：4.1亿</p>
        </figure>

        <div className="dots">
          <button className="dot dot-select"></button>
          <button className="dot"></button>
          <button className="dot"></button>
          <button className="dot"></button>
          <button className="dot"></button>
        </div>
      </div>
    </section>
  );
};

export default SectionPlaylistRecommendation;
