import "./Styles/TopicStat.css"

interface props {
    id: number;
    subject: string;
    score: number;
    total: number;
    color: string;
}
export default function TopicStat(props: props) {
    return (
        <div className="topic-stat">
            <div className={"left-stat"}>
                <div className={"point"} style={{backgroundColor: props.color}}></div>
                <h3>{props.subject}</h3>
            </div>
            <div className={"right-stat"}>
                <h3>{props.score}/{props.total}</h3>
                <div className={"progress"}>
                    <div className={"progress-bar"} style={{ width: `${(props.score / props.total) * 100}%`, backgroundColor:props.color}}></div>
                </div>
            </div>
        </div>
    )
}
