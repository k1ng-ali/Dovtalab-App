import "./Styles/Tests.css"
import {useTranslation} from "react-i18next";
import {Subject, TopicIco} from "../Components/UIKits.tsx"
import { Book, Microscope, Calculator, Atom, Globe, FlaskConical, Languages, PenTool} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import {useGlobalNotification} from "../NotificationProvider.tsx";

export default function Tests() {
    const navigate = useNavigate();
    const notification = useGlobalNotification();
    const handleStart = (subjectKey: string) => {
        navigate(`/quiz/${subjectKey}`);
    };

    const notify = () => {
        notification.open({
            message: "Довталаб beta",
            description: "Барнома ҳоло дар реҷаи бета қарор дорад ва мумкин аст баъзе функсияҳо пурра фаъол набошанд.",
            style: {
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 12,
                border: "1px solid rgba(0, 0, 0, 0.05)",
            }
        })
    }

    const {t} = useTranslation("tests");
    return (
        <div>
            <h1 className="title">{t("header")}</h1>
            <h3 className={"second-title"}>{t("select-sub")}</h3>
            <div className={"banner"}>
                <h1 className={`banner-title`}>{t("banner.title")}</h1>
                <h3 className={'popular-topic'}>{t("banner.topic")}</h3>
                <button className={"banner-btn"} onClick={()=> handleStart("biology")}>{t("banner.start")}</button>
            </div>
            <div className={`subjects`}>
                <Subject topic={t("topics.biology")}
                         onClick={() => handleStart("biology")}
                         count={520}
                         isAvailable={true}>
                    <TopicIco
                        color={["#4ade80", "#16a34a"]}
                    > <Microscope/>
                    </TopicIco>
                </Subject>
                <Subject topic={t("topics.history")}
                         onClick={() => handleStart("history")}
                         count={587}
                         isAvailable={true}>
                    <TopicIco
                        color={["#fb923c", "#ea580c"]}
                    > <Book/>
                    </TopicIco>
                </Subject>
                <Subject topic={t("topics.geography")}
                         onClick={() => handleStart("geography")}
                         count={404}
                         isAvailable={true}>
                    <TopicIco
                        color={["#2dd4bf", "#0d9488"]}
                    > <Globe/>
                    </TopicIco>
                </Subject>
                <Subject topic={t("topics.lang")}
                         onClick={() => handleStart("lang")}
                         count={919}
                         isAvailable={true}>
                    <TopicIco
                        color={["#f87171", "#dc2626"]}
                    > <Languages/>
                    </TopicIco>
                </Subject>
                <Subject topic={t("topics.literature")}
                         onClick={() => handleStart("literature")}
                         count={320}
                         isAvailable={true}>
                    <TopicIco
                        color={["#9f51a1", "#8b5ad5"]}
                    > <PenTool />
                    </TopicIco>
                </Subject>
                <Subject topic={t("topics.math")}
                         onClick={() => notify()}
                         count={0}
                         isAvailable={false}>
                    <TopicIco
                        color={["#bfbfbf", "#8a8a8a"]}
                    > <Calculator/>
                    </TopicIco>
                </Subject>
                <Subject topic={t("topics.physic")}
                         onClick={() => notify()}
                         count={0}
                         isAvailable={false}>
                    <TopicIco
                        color={["#bfbfbf", "#8a8a8a"]}
                    > <Atom/>
                    </TopicIco>
                </Subject>
                <Subject topic={t("topics.chemistry")}
                         onClick={() => notify()}
                         count={0}
                         isAvailable={false}>
                    <TopicIco
                        color={["#bfbfbf", "#8a8a8a"]}
                    > <FlaskConical />
                    </TopicIco>
                </Subject>
            </div>
        </div>
    )
}
