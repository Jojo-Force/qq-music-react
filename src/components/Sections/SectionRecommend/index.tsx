import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useRef } from "react";

const imgs = [
      {
          imgSrc: "img/recommend/1.jpg",
          classification: "说唱",
          title: "TizzyT全新专辑正式上线",
      },
    {
        imgSrc: "img/recommend/2.jpg",
        classification: "商城",
        title: "张艺兴「大航海·无远弗届」巡演礼盒",
    },
    {
        imgSrc: "img/recommend/3.jpg",
        classification: "星光卡",
        title: "RIIZE典藏星光卡正式上线",
    },
    {
        imgSrc: "img/recommend/1.jpg",
        classification: "说唱",
        title: "TizzyT全新专辑正式上线",
    },
    {
        imgSrc: "img/recommend/2.jpg",
        classification: "商城",
        title: "张艺兴「大航海·无远弗届」巡演礼盒",
    },
    {
        imgSrc: "img/recommend/3.jpg",
        classification: "星光卡",
        title: "RIIZE典藏星光卡正式上线",
    },
    {
        imgSrc: "img/recommend/1.jpg",
        classification: "说唱",
        title: "TizzyT全新专辑正式上线",
    },
    {
        imgSrc: "img/recommend/2.jpg",
        classification: "商城",
        title: "张艺兴「大航海·无远弗届」巡演礼盒",
    },
    {
        imgSrc: "img/recommend/3.jpg",
        classification: "星光卡",
        title: "RIIZE典藏星光卡正式上线",
    },
];
const SectionRecommend = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);
  let len = 820;
  const childNum = 3;
  let moveLen = 0;
  const maxPage = 3 - 1;
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
    <section ref={section} className={s.sectionRecommend}>
      <button className={s.leftBtn} onClick={leftBtnClick}>
        <ion-icon class={s.leftIcon} name="chevron-back-outline"></ion-icon>
      </button>
      <button className={s.rightBtn} onClick={rightBtnClick}>
        <ion-icon
          class={s.rightIcon}
          name="chevron-forward-outline"
        ></ion-icon>
      </button>
      <h1>精彩推荐</h1>
      <div className={s.imgBox}>
        <div ref={imgBoxSub1} className={s.imgBoxSub1}>
          {imgs.map((img, index) => (
            <FigureBox
              imgSrc={img.imgSrc}
              classification={img.classification}
              title={img.title}
            ></FigureBox>
          ))}
        </div>

        <div className="dots">
          <button className="dot dot-select" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
          <button className="dot" onClick={dotClick}></button>
        </div>
      </div>
    </section>
  );
};

export default SectionRecommend;
