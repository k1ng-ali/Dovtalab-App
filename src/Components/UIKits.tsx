import "./Styles/UIkits.css"
import {useTranslation} from "react-i18next";
import {CheckCircle, XCircle} from 'lucide-react';
interface topicIcoProps {
    color: string[],
    ClassName?: string,
    children?: React.ReactNode,
}

export function TopicIco({color, children, ClassName}: topicIcoProps) {
    return (
        <div className={`def-container ${ClassName}`}>
            <div className={"ico-container"} style={{background:`linear-gradient(to right, ${color[0]}, ${color[1]})`}}>
                {children}
            </div>
        </div>
    )
}

interface SubjectProps {
    topic: string,
    count?: number,
    children?: React.ReactNode,
    ClassName?: string,
    isAvailable?: boolean,
    onClick?: () => void,
}
export function Subject({topic, count, children, ClassName, isAvailable, onClick}: SubjectProps){
    const {t} = useTranslation("UIKits");
    return (
        <div className={`subject-container ${ClassName}`} onClick={onClick}>
            <div className="icon-wrapper">{children}</div>
            <h3 className={"topic-name"}>{topic}</h3>
            <p className={"questions-count"}>{count} {t("subjects.questions")}</p>
            <div className="sub-footer">
                <p className={"available"}>{isAvailable ? t("subjects.available") : t("subjects.unavailable")}</p>
                <span className={`dot ${isAvailable ? "green" : "gray"}`}></span>
            </div>
        </div>

    )
}
interface OptionPros {
    variant: "default" | "wrong" | "danger" | "warning" | "success",
    option?: string,
    text?: string,
    className?: string,
}

export function OptionsButton ({variant, option, text, className}: OptionPros){
    return (
        <div className={`btn-wrapper ${className} ${variant}`}>
            <div className={`left-wrapper`}>
                <p className={`option ${variant}`}>{option}</p>
                <p className={`text ${variant}`}>{text}</p>
            </div>
            <div className={`right-wrapper ${variant}`}>
                { variant === "success" ? (
                    <CheckCircle className={"check-ico"}/>
                ) : variant === "wrong" ? (
                    <XCircle className={"check-ico"}/>
                ) : null
                }
            </div>
        </div>
    )
}

interface ButtonProps {
    variant: "default" | "blue"
    text?: string,
    className?: string,
}

export function Button ({variant, text, className}: ButtonProps) {
    return (
        <div className={`btn ${className} ${variant}`}>
            <p className={"btn-text"}>{text}</p>
        </div>
    )
}
