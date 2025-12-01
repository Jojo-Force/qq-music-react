import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
    songName: string;
    singerNames: string[];
    songTimes: string;
}

const FigureBox = ({imgSrc,songName,singerNames,songTimes}:FigureBoxProps) => {
    return (
        <figure className={s.figureOut}>
            <div className={s.imgContainer}>
                <img
                    className={s.sectionMvImg}
                    alt="song"
                    src={imgSrc}
                />
            </div>
            <a className={s.songName} href="#">{songName}</a>
            <div className={s.singerNames}>
                {singerNames.map((name, index) => (
                    <>
                        <a className={s.singerName} href="#">{name}</a>
                        {index < singerNames.length - 1 && <> / </>}
                    </>
                ))}
            </div>
            <p className={s.songTimes} href="#">
                <ion-icon name="videocam-outline"></ion-icon>{songTimes}</p>
        </figure>
    )
}


export default FigureBox;

