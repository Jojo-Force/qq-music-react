import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import {useRef} from "react";

const img =[
    {
        imgSrc: "img/newsong/1.jpg",
        songName: "念旧的人都困在回忆里 (Belove",
        singerNames: ["刘宇宁","银河快递 (Galaxy Ex"],
        songTime: "03:14",
    },

]
const SectionNewSong = ()=>{
    // <FigureBox imgSrc={img[0].imgSrc} songName={img[0].songName} singerNames={img[0].singerNames}
    //            songTime={img[0].songTime}></FigureBox>
    const imgBoxSub1 = useRef<HTMLDivElement>(null);
    let len = 820;
    let childNum = 5;
    let moveLen= 0;
    let maxPage = childNum-1;
    let curPage = 0;

    const getLen = () =>{
        const sub = imgBoxSub1.current;
        const computedStyle = window.getComputedStyle(sub);
        //获得gap
        const gap = parseInt(computedStyle.gap, 10);
        //获得子元素宽度
        const chirdWidth = sub.children[0].offsetWidth;
        //获得len
        len = chirdWidth * childNum + gap * childNum;
        console.log('gap:', gap);
        console.log('len:', len);
    }

    const rightBtnClick = ()=>{

        getLen();
        const dots = document.querySelector(".dots");
        dots.children[curPage].classList.remove("dot-select");
        if(curPage === maxPage){
            curPage = 0
        } else {
            curPage += 1;
        }
        moveLen = curPage* (-len);
        dots.children[curPage].classList.add("dot-select");
        const sub1 = imgBoxSub1.current;
        sub1.style.transform = `translate(${moveLen}px, 0)`;

        console.log(curPage);
    }

    const leftBtnClick = ()=>{
        const dots = document.querySelector(".dots");
        dots.children[curPage].classList.remove("dot-select");
        if(curPage === 0){
            curPage = maxPage;
        }
        else {
            curPage -= 1;
        }
        moveLen = curPage* (-len);
        dots.children[curPage].classList.add("dot-select");
        const sub1 = imgBoxSub1.current;
        sub1.style.transform = `translate(${moveLen}px, 0)`;

        console.log(curPage);
    }

    const dotClick = (event)=>{
        /*取消原来选中*/
        const child = document.querySelector('.dot-select');
        child.classList.remove("dot-select");

        /*当前点击按钮获得选中*/
        event.currentTarget.classList.add("dot-select");
        const parent = document.querySelector('.dots');
        const index = Array.from(parent.children).indexOf(event.currentTarget);

        /*计算curPage和移动距离*/
        curPage = index;
        moveLen = curPage* (-len);

        const sub1 = imgBoxSub1.current;
        sub1.style.transform = `translate(${moveLen}px, 0)`;
    }

    return (
        <section className={s.sectionNewSong}>
            <button className={s.leftBtn} onClick={leftBtnClick}>
                {/*<ion-icon className={s.leftIcon} name="chevron-back-outline"></ion-icon>*/}
            </button>
            <button className={s.rightBtn} onClick={rightBtnClick}>
                {/*<ion-icon className={s.rightIcon} name="chevron-forward-outline"></ion-icon>*/}
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
            <div className={s.imgBox}>
                <div ref={imgBoxSub1} className={s.imgBoxSub1}>

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
    )
}

export default SectionNewSong;