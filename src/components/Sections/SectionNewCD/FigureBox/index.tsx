import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
    songName: string;
    singerNames: string[];
    songTime: string;
}

const FigureBox = ({imgSrc,songName,singerNames,songTime}:FigureBoxProps) => {
    return (
        <figure className={s.figureOut}>
            <div className={s.imgContainer}>
                <img
                    className={s.sectionNewCdImg}
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
        </figure>
    )
}


export default FigureBox;

