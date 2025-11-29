import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import {useEffect, useRef} from "react";

const imgs = [
  {
    imgSrc: "img/newcd/1.jpg",
    songName: "念旧的人都困在回忆里 (Beloved)",
    singerNames: ["刘宇宁", "银河快递 (Galaxy Express)"],
    songTime: "03:14",
  },
  {
    imgSrc: "img/newcd/2.jpg",
    songName: "Gameboy",
    singerNames: ["弹壳"],
    songTime: "02:29",
  },
  {
    imgSrc: "img/newcd/3.jpg",
    songName: "澄明体",
    singerNames: ["昨夜派对（L.N Party）"],
    songTime: "04:27",
  },
  {
    imgSrc: "img/newcd/4.jpg",
    songName: "即刻上场 《即刻上场》电视剧主题曲",
    singerNames: ["路虎"],
    songTime: "03:03",
  },
  {
    imgSrc: "img/newcd/5.jpg",
    songName: "日落 (Live)",
    singerNames: ["孙燕姿"],
    songTime: "04:13",
  },
  {
    imgSrc: "img/newcd/6.jpg",
    songName: "Love Virus (Feat. I.M)",
    singerNames: ["Heize (헤이즈)", "I.M (아이엠)"],
    songTime: "03:43",
  },
  {
    imgSrc: "img/newcd/7.jpg",
    songName: "有你才能回家",
    singerNames: ["黄绮珊"],
    songTime: "05:15",
  },
  {
    imgSrc: "img/newcd/8.jpg",
    songName: "相信相信的力量 《清算》电影主题曲",
    singerNames: ["萨顶顶"],
    songTime: "03:07",
  },
  {
    imgSrc: "img/newcd/9.jpg",
    songName: "钗青锋 《月拢雁西归》网剧推广曲",
    singerNames: ["刘也"],
    songTime: "03:25",
  },
    {
        imgSrc: "img/newcd/10.jpg",
        songName: "钗青锋 《月拢雁西归》网剧推广曲",
        singerNames: ["刘也"],
        songTime: "03:25",
    },
  {
    imgSrc: "img/newcd/1.jpg",
    songName: "念旧的人都困在回忆里 (Beloved)",
    singerNames: ["刘宇宁", "银河快递 (Galaxy Express)"],
    songTime: "03:14",
  },
  {
    imgSrc: "img/newcd/2.jpg",
    songName: "Gameboy",
    singerNames: ["弹壳"],
    songTime: "02:29",
  },
  {
    imgSrc: "img/newcd/3.jpg",
    songName: "澄明体",
    singerNames: ["昨夜派对（L.N Party）"],
    songTime: "04:27",
  },
  {
    imgSrc: "img/newcd/4.jpg",
    songName: "即刻上场 《即刻上场》电视剧主题曲",
    singerNames: ["路虎"],
    songTime: "03:03",
  },
  {
    imgSrc: "img/newcd/5.jpg",
    songName: "日落 (Live)",
    singerNames: ["孙燕姿"],
    songTime: "04:13",
  },
  {
    imgSrc: "img/newcd/6.jpg",
    songName: "Love Virus (Feat. I.M)",
    singerNames: ["Heize (헤이즈)", "I.M (아이엠)"],
    songTime: "03:43",
  },
  {
    imgSrc: "img/newcd/7.jpg",
    songName: "有你才能回家",
    singerNames: ["黄绮珊"],
    songTime: "05:15",
  },
  {
    imgSrc: "img/newcd/8.jpg",
    songName: "相信相信的力量 《清算》电影主题曲",
    singerNames: ["萨顶顶"],
    songTime: "03:07",
  },
  {
    imgSrc: "img/newcd/9.jpg",
    songName: "钗青锋 《月拢雁西归》网剧推广曲",
    singerNames: ["刘也"],
    songTime: "03:25",
  },
  {
    imgSrc: "img/newcd/10.jpg",
    songName: "念旧的人都困在回忆里 (Beloved)",
    singerNames: ["刘宇宁", "银河快递 (Galaxy Express)"],
    songTime: "03:14",
  }
];
const SectionNewCD = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);
  const imgBox = useRef<HTMLDivElement>(null);
  let len = 820;
  const childNum = 5;
  let moveLen = 0;
  const maxPage = 2 - 1;
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
    <section ref={section} className={s.sectionNewCd}>
      <button className={s.leftBtn} onClick={leftBtnClick}>
        <ion-icon className={s.leftIcon} name="chevron-back-outline"></ion-icon>
      </button>
      <button className={s.rightBtn} onClick={rightBtnClick}>
        <ion-icon
          className={s.rightIcon}
          name="chevron-forward-outline"
        ></ion-icon>
      </button>
      <h1>新碟首发</h1>
      <div className="second-link-flexbox">
          <div className={s.secondLinksWrapper}>
              <button className={s.moreBtn}>
                  更多<ion-icon className={s.moreIcon} name="chevron-forward-outline"></ion-icon></button>
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
              songTime={img.songTime}
            ></FigureBox>
          ))}
        </div>

        <div className="dots">
          <button className="dot dot-select" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
        </div>
      </div>
    </section>
  );
};

export default SectionNewCD;
