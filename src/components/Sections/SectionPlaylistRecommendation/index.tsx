import s from "./local.module.scss";
import FigureBox from "./FigureBox";
import { useRef } from "react";

const SectionPlaylistRecommendation = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);

  let len = 820;
  const childNum = 5;
  let moveLen = 0;
  const maxPage = 5 - 1;
  let curPage = 0;

  const getLen = () => {
    const sub = imgBoxSub1.current;
    const computedStyle = window.getComputedStyle(sub);
    //获得gap
    const gap = parseInt(computedStyle.gap, 10);
    //获得子元素宽度
    const chirdWidth = sub.children[0].offsetWidth;
    //获得len
    len = chirdWidth * childNum + gap * childNum;
    console.log("gap:", gap);
    console.log("len:", len);
  };

  const rightBtnClick = () => {
    getLen();
    const dots = section.current.querySelector(".dots");
    dots.children[curPage].classList.remove("dot-select");
    if (curPage === maxPage) {
      curPage = 0;
    } else {
      curPage += 1;
    }
    moveLen = curPage * -len;
    dots.children[curPage].classList.add("dot-select");
    const sub1 = imgBoxSub1.current;
    sub1.style.transform = `translate(${moveLen}px, 0)`;

    console.log(curPage);
  };

  const leftBtnClick = () => {
    const dots = section.current.querySelector(".dots");
    dots.children[curPage].classList.remove("dot-select");
    if (curPage === 0) {
      curPage = maxPage;
    } else {
      curPage -= 1;
    }
    moveLen = curPage * -len;
    dots.children[curPage].classList.add("dot-select");
    const sub1 = imgBoxSub1.current;
    sub1.style.transform = `translate(${moveLen}px, 0)`;

    console.log(curPage);
  };

  const dotClick = (event) => {
    /*取消原来选中*/
    const child = section.current.querySelector(".dot-select");
    child.classList.remove("dot-select");

    /*当前点击按钮获得选中*/
    event.currentTarget.classList.add("dot-select");
    const parent = section.current.querySelector(".dots");
    const index = Array.from(parent.children).indexOf(event.currentTarget);

    /*计算curPage和移动距离*/
    curPage = index;
    moveLen = curPage * -len;

    const sub1 = imgBoxSub1.current;
    sub1.style.transform = `translate(${moveLen}px, 0)`;
  };

  return (
    <section ref={section} className={s.sectionPlaylistRecommendation}>
      <button className={s.leftBtn} onClick={leftBtnClick}>
        <ion-icon className={s.leftIcon} name="chevron-back-outline"></ion-icon>
      </button>
      <button className={s.rightBtn} onClick={rightBtnClick}>
        <ion-icon
          className={s.rightIcon}
          name="chevron-forward-outline"
        ></ion-icon>
      </button>
      <h1>歌单推荐</h1>
      <div className="second-link-flexbox">
        <a href="#" className="second-link second-link-select">
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
      <div className={s.imgBox}>
        <div ref={imgBoxSub1} className={s.imgBoxSub1}>
          <FigureBox
            imgSrc="img/carousel/1.webp"
            playName="抖音热歌丨潮流旋律感觉至上"
            playTimes="8.5亿"
          />
          <FigureBox
            imgSrc="img/carousel/2.webp"
            playName="抖音热门精选：浅听亿点点的心动"
            playTimes="7089.9万"
          />
          <FigureBox
            imgSrc="img/carousel/3.webp"
            playName="聚会必唱|全网精选热歌,单曲循环"
            playTimes="2.9万"
          />
          <FigureBox
            imgSrc="img/carousel/4.webp"
            playName="伤感华语：不曾想词曲能如此心酸"
            playTimes="803.4万"
          />
          <FigureBox
            imgSrc="img/carousel/5.webp"
            playName="500首抖音热歌：包你一次听个够"
            playTimes="4.1亿"
          />

          <FigureBox
            imgSrc="img/carousel/6.webp"
            playName="抖音DJ 集丨一脚油门200迈"
            playTimes="1016.3万"
          />
          <FigureBox
            imgSrc="img/carousel/7.webp"
            playName="抖音DJ 集丨一脚油门200迈"
            playTimes="1016.3万"
          />
          <FigureBox
            imgSrc="img/carousel/8.webp"
            playName="抖音DJ 集丨一脚油门200迈"
            playTimes="1016.3万"
          />
          <FigureBox
            imgSrc="img/carousel/9.webp"
            playName="抖音DJ 集丨一脚油门200迈"
            playTimes="1016.3万"
          />
          <FigureBox
            imgSrc="img/carousel/10.webp"
            playName="抖音DJ 集丨一脚油门200迈"
            playTimes="1016.3万"
          />

          <FigureBox
            imgSrc="img/carousel/10.webp"
            playName="抖音热歌丨潮流旋律感觉至上"
            playTimes="8.5亿"
          />
          <FigureBox
            imgSrc="img/carousel/2.webp"
            playName="抖音热门精选：浅听亿点点的心动"
            playTimes="7089.9万"
          />
          <FigureBox
            imgSrc="img/carousel/3.webp"
            playName="聚会必唱|全网精选热歌,单曲循环"
            playTimes="2.9万"
          />
          <FigureBox
            imgSrc="img/carousel/4.webp"
            playName="伤感华语：不曾想词曲能如此心酸"
            playTimes="803.4万"
          />
          <FigureBox
            imgSrc="img/carousel/5.webp"
            playName="500首抖音热歌：包你一次听个够"
            playTimes="4.1亿"
          />

          <FigureBox
            imgSrc="img/carousel/8.webp"
            playName="抖音热歌丨潮流旋律感觉至上"
            playTimes="8.5亿"
          />
          <FigureBox
            imgSrc="img/carousel/2.webp"
            playName="抖音热门精选：浅听亿点点的心动"
            playTimes="7089.9万"
          />
          <FigureBox
            imgSrc="img/carousel/3.webp"
            playName="聚会必唱|全网精选热歌,单曲循环"
            playTimes="2.9万"
          />
          <FigureBox
            imgSrc="img/carousel/4.webp"
            playName="伤感华语：不曾想词曲能如此心酸"
            playTimes="803.4万"
          />
          <FigureBox
            imgSrc="img/carousel/5.webp"
            playName="500首抖音热歌：包你一次听个够"
            playTimes="4.1亿"
          />

          <FigureBox
            imgSrc="img/carousel/7.webp"
            playName="抖音热歌丨潮流旋律感觉至上"
            playTimes="8.5亿"
          />
          <FigureBox
            imgSrc="img/carousel/2.webp"
            playName="抖音热门精选：浅听亿点点的心动"
            playTimes="7089.9万"
          />
          <FigureBox
            imgSrc="img/carousel/3.webp"
            playName="聚会必唱|全网精选热歌,单曲循环"
            playTimes="2.9万"
          />
          <FigureBox
            imgSrc="img/carousel/4.webp"
            playName="伤感华语：不曾想词曲能如此心酸"
            playTimes="803.4万"
          />
          <FigureBox
            imgSrc="img/carousel/5.webp"
            playName="500首抖音热歌：包你一次听个够"
            playTimes="4.1亿"
          />
        </div>

        <div className="dots">
          <button className="dot dot-select" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
        </div>
      </div>
    </section>
  );
};

export default SectionPlaylistRecommendation;
