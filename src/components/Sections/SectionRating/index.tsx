import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useRef } from "react";

const imgs = [
    {
        title: "热歌",
        songs:[
            {
                songName: "恋人",
                singerNames: ["李荣浩"],
            },
            {
                songName: "第57次取消发送",
                singerNames: ["休眠火山"],
            },
            {
                songName: "第57次取消发送",
                singerNames: ["菲菲公主（陆绮菲）"],
            },
        ]
    },
    {
        title: "新歌",
        songs:[
            {
                songName: "两三句 (趁着灯火不算清晰)",
                singerNames: ["宋佳野"],
            },
            {
                songName: "Can't stop the rain",
                singerNames: ["鹭卓"],
            },
            {
                songName: "NOT CUTE ANYMORE",
                singerNames: ["ILLIT"],
            },
        ]
    },
    {
        title: "流行指数",
        songs:[
            {
                songName: "第57次取消发送",
                singerNames: ["休眠火山"],
            },
            {
                songName: "念旧的人都困在回忆里 (Beloved)",
                singerNames: ["刘宇宁/银河快递 (Galaxy Express)"],
            },
            {
                songName: "NOT CUTE ANYMORE",
                singerNames: ["ILLIT (아일릿)"],
            },
        ]
    },
    {
        title: "欧美",
        songs:[
            {
                songName: "The Fate of Ophelia (Alone In My Tower Acoustic Version)",
                singerNames: ["Taylor Swift"],
            },
            {
                songName: "Sacrifice 争 (Anyma Remix)",
                singerNames: ["英雄联盟/Anyma/G.E.M. 邓紫棋"],
            },
            {
                songName: "her (feat. Annika Wells)",
                singerNames: ["JVKE/Annika Wells"],
            },
        ]
    },
    {
        title: "韩国",
        songs:[
            {
                songName: "ONE MORE TIME",
                singerNames: ["ALLDAY PROJECT"],
            },
            {
                songName: "NOT CUTE ANYMORE",
                singerNames: ["ILLIT (아일릿)"],
            },
            {
                songName: "Ketchup And Lemonade (NINGNING Solo)",
                singerNames: ["aespa (에스파)"],
            },
        ]
    },
];

const SectionRating = () => {
  return (
    <section className={s.sectionRating}>
      <h1>排行榜</h1>
      <div className={s.imgBox}>
        <div className={s.imgBoxSub1}>
          {imgs.map((img, index) => (
            <FigureBox
                img={img}
            ></FigureBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionRating;
