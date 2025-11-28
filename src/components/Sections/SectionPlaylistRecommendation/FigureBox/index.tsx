import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
    playName: string;
    playTimes: string;
}

const FigureBox = ({imgSrc,playName,playTimes}:FigureBoxProps) => {
    return (
        <figure className={s.figureOut}>
            <div className={s.imgContainer}>
                <img
                    className={s.sectionPlaylistImg}
                    alt="song"
                    src={imgSrc}
                />
            </div>
            <a className={s.playlistName} href="#">{playName}</a>
            <p className={s.playTimes}>播放量：{playTimes}</p>
        </figure>
    )
}


export default FigureBox;

