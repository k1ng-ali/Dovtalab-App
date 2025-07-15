import {useTranslation} from "react-i18next";
import "./Styles/TopUser.css"

interface props {
    type: string;
    name: string;
    topic?: string;
    point: number;
    id: number;
}

export default function TopUser(props:props) {
    const {t} = useTranslation("home");
    return (
        <div className={`topUser ${props.type + "-container"}`}>
            <div className="left">
                <div className={`num ${props.type + "-num"}`}>{props.id}</div>
                <div className="user-info">
                    <h3>{props.name}</h3>
                    <p>{props.topic ? props.topic : ""}</p>
                </div>
            </div>
            <div className="right">
                <h3 className={`${props.type + "-point"}`}>{props.point}</h3>
                <p>{props.topic ? t("top.point-text") : ""}</p>
            </div>
        </div>
    )
}
