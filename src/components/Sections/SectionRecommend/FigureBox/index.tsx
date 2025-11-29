import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
    classification: string;
    title: string;
}

const FigureBox = ({imgSrc,
                       classification,title}:FigureBoxProps) => {
    return (
        <figure className={s.figureOut}>
            <div className={s.container}>
                <img
                    className={s.sectionRecommendImg}
                    alt="song"
                    src={imgSrc}
                />
            </div>
            <p className={s.figureTitle}><span className={s.classification}>{classification}</span>{title}</p>
        </figure>
    )
}


export default FigureBox;

