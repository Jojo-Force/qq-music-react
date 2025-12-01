import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import {useEffect, useRef} from "react";

const imgs = [
  {
    imgSrc: "img/mv/1.jpg",
    songName: "Do What Makes You Feel Alive",
    singerNames: ["张靓颖"],
    songTimes: "2.3万",
  },
    {
        imgSrc: "img/mv/2.jpg",
        songName: "替天行盗",
        singerNames: ["黄子弘凡"],
        songTimes: "3.1万",
    },
  {
    imgSrc: "img/mv/3.jpg",
    songName: "共赴山海",
    singerNames: ["易烊千玺","十五运会和残特奥会"],
      songTimes: "1.1万",
  },

  {
    imgSrc: "img/mv/4.jpg",
    songName: "悼念爱情",
    singerNames: ["潘玮柏"],
      songTimes: "11.3万",
  },
  {
    imgSrc: "img/mv/5.jpg",
    songName: "Naughty List",
    singerNames: ["Butterbear"],
      songTimes: "9531",
  },
  {
    imgSrc: "img/mv/6.jpg",
    songName: "bandaids",
    singerNames: ["Katy Perry"],
      songTimes: "1.7万",
  },
  {
    imgSrc: "img/mv/7.jpg",
    songName: "Dancing Til I Die",
    singerNames: ["Ghost (王琳凯)"],
      songTimes: "6.8万",
  },
  {
    imgSrc: "img/mv/8.jpg",
    songName: "K歌之王 AIR（Night Version）",
    singerNames: ["陈奕迅"],
      songTimes: "2.7万",
  },
  {
    imgSrc: "img/mv/9.jpg",
    songName: "What a Day",
    singerNames: ["蔡徐坤"],
      songTimes: "126.5万",
  },
    {
        imgSrc: "img/mv/10.jpg",
        songName: "七彩光",
        singerNames: ["单依纯"],
        songTimes: "1.3万",
    },
    {
        imgSrc: "img/mv/1.jpg",
        songName: "Do What Makes You Feel Alive",
        singerNames: ["张靓颖"],
        songTimes: "2.3万",
    },
    {
        imgSrc: "img/mv/2.jpg",
        songName: "替天行盗",
        singerNames: ["黄子弘凡"],
        songTimes: "3.1万",
    },
    {
        imgSrc: "img/mv/3.jpg",
        songName: "共赴山海",
        singerNames: ["易烊千玺","十五运会和残特奥会"],
        songTimes: "1.1万",
    },

    {
        imgSrc: "img/mv/4.jpg",
        songName: "悼念爱情",
        singerNames: ["潘玮柏"],
        songTimes: "11.3万",
    },
    {
        imgSrc: "img/mv/5.jpg",
        songName: "Naughty List",
        singerNames: ["Butterbear"],
        songTimes: "9531",
    },
    {
        imgSrc: "img/mv/6.jpg",
        songName: "bandaids",
        singerNames: ["Katy Perry"],
        songTimes: "1.7万",
    },
    {
        imgSrc: "img/mv/7.jpg",
        songName: "Dancing Til I Die",
        singerNames: ["Ghost (王琳凯)"],
        songTimes: "6.8万",
    },
    {
        imgSrc: "img/mv/8.jpg",
        songName: "K歌之王 AIR（Night Version）",
        singerNames: ["陈奕迅"],
        songTimes: "2.7万",
    },
    {
        imgSrc: "img/mv/9.jpg",
        songName: "What a Day",
        singerNames: ["蔡徐坤"],
        songTimes: "126.5万",
    },
    {
        imgSrc: "img/mv/10.jpg",
        songName: "七彩光",
        singerNames: ["单依纯"],
        songTimes: "1.3万",
    },

    {
        imgSrc: "img/mv/1.jpg",
        songName: "Do What Makes You Feel Alive",
        singerNames: ["张靓颖"],
        songTimes: "2.3万",
    },
    {
        imgSrc: "img/mv/2.jpg",
        songName: "替天行盗",
        singerNames: ["黄子弘凡"],
        songTimes: "3.1万",
    },
    {
        imgSrc: "img/mv/3.jpg",
        songName: "共赴山海",
        singerNames: ["易烊千玺","十五运会和残特奥会"],
        songTimes: "1.1万",
    },

    {
        imgSrc: "img/mv/4.jpg",
        songName: "悼念爱情",
        singerNames: ["潘玮柏"],
        songTimes: "11.3万",
    },
    {
        imgSrc: "img/mv/5.jpg",
        songName: "Naughty List",
        singerNames: ["Butterbear"],
        songTimes: "9531",
    },
    {
        imgSrc: "img/mv/6.jpg",
        songName: "bandaids",
        singerNames: ["Katy Perry"],
        songTimes: "1.7万",
    },
    {
        imgSrc: "img/mv/7.jpg",
        songName: "Dancing Til I Die",
        singerNames: ["Ghost (王琳凯)"],
        songTimes: "6.8万",
    },
    {
        imgSrc: "img/mv/8.jpg",
        songName: "K歌之王 AIR（Night Version）",
        singerNames: ["陈奕迅"],
        songTimes: "2.7万",
    },
    {
        imgSrc: "img/mv/9.jpg",
        songName: "What a Day",
        singerNames: ["蔡徐坤"],
        songTimes: "126.5万",
    },
    {
        imgSrc: "img/mv/10.jpg",
        songName: "七彩光",
        singerNames: ["单依纯"],
        songTimes: "1.3万",
    },

    {
        imgSrc: "img/mv/1.jpg",
        songName: "Do What Makes You Feel Alive",
        singerNames: ["张靓颖"],
        songTimes: "2.3万",
    },
    {
        imgSrc: "img/mv/2.jpg",
        songName: "替天行盗",
        singerNames: ["黄子弘凡"],
        songTimes: "3.1万",
    },
    {
        imgSrc: "img/mv/3.jpg",
        songName: "共赴山海",
        singerNames: ["易烊千玺","十五运会和残特奥会"],
        songTimes: "1.1万",
    },

    {
        imgSrc: "img/mv/4.jpg",
        songName: "悼念爱情",
        singerNames: ["潘玮柏"],
        songTimes: "11.3万",
    },
    {
        imgSrc: "img/mv/5.jpg",
        songName: "Naughty List",
        singerNames: ["Butterbear"],
        songTimes: "9531",
    },
    {
        imgSrc: "img/mv/6.jpg",
        songName: "bandaids",
        singerNames: ["Katy Perry"],
        songTimes: "1.7万",
    },
    {
        imgSrc: "img/mv/7.jpg",
        songName: "Dancing Til I Die",
        singerNames: ["Ghost (王琳凯)"],
        songTimes: "6.8万",
    },
    {
        imgSrc: "img/mv/8.jpg",
        songName: "K歌之王 AIR（Night Version）",
        singerNames: ["陈奕迅"],
        songTimes: "2.7万",
    },
    {
        imgSrc: "img/mv/9.jpg",
        songName: "What a Day",
        singerNames: ["蔡徐坤"],
        songTimes: "126.5万",
    },
    {
        imgSrc: "img/mv/10.jpg",
        songName: "七彩光",
        singerNames: ["单依纯"],
        songTimes: "1.3万",
    },

];
const SectionMV = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);
  const imgBox = useRef<HTMLDivElement>(null);
  let len = 820;
  const childNum = 5;
  let moveLen = 0;
  const maxPage = 4 - 1;
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
    console.log("gap1:", gap);
    console.log("len1:", len);
    imgBox.current.style.width = len+"px";
  };
    useEffect(() => {
        getLen();
    },[])
  const rightBtnClick = () => {
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
    <section ref={section} className={s.sectionMv}>
      <button className={s.leftBtn} onClick={leftBtnClick}>
        <ion-icon class={s.leftIcon} name="chevron-back-outline"></ion-icon>
      </button>
      <button className={s.rightBtn} onClick={rightBtnClick}>
        <ion-icon
          class={s.rightIcon}
          name="chevron-forward-outline"
        ></ion-icon>
      </button>
      <h1>MV</h1>
      <div className="second-link-flexbox">
          <div className={s.secondLinksWrapper}>
              <button className={s.moreBtn}>
                  更多<ion-icon class={s.moreIcon} name="chevron-forward-outline"></ion-icon></button>
          <a href="#" className="second-link second-link-select">
            最新
          </a>
          <a href="#" className="second-link">
            内地
          </a>
          <a href="#" className="second-link">
            港台
          </a>
          <a href="#" className="second-link">
            欧美
          </a>
          <a href="#" className="second-link">
            韩国
          </a>
          <a href="#" className="second-link">
            日本
          </a>
          </div>
      </div>
      <div ref={imgBox} className={s.imgBox}>
        <div ref={imgBoxSub1} className={s.imgBoxSub1}>
          {imgs.map((img, index) => (
            <FigureBox
              imgSrc={img.imgSrc}
              songName={img.songName}
              singerNames={img.singerNames}
              songTimes={img.songTimes}
            ></FigureBox>
          ))}
        </div>

        <div className="dots">
          <button className="dot dot-select" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
            <button className="dot" onClick={dotClick}></button>
            <button className="dot" onClick={dotClick}></button>
        </div>
      </div>
    </section>
  );
};

export default SectionMV;
