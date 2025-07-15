import "./Styles/Home.css"
import {useTranslation} from "react-i18next";
import { Trophy, TrendingUp, Star, Award } from 'lucide-react';
import TopUser from "../Components/TopUser.tsx"
import TopicStat from "../Components/TopicStat.tsx"

export default function Home() {
    const {t} = useTranslation("home");
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <div className="ico"><Star className="star"/></div>
                    <div className="title-header">
                        <p className="title-text">Довталаб</p>
                        <p className="title-beta">beta</p>
                    </div>
                </div>
                <div className="award-cnt"><Award className="award"/> </div>
            </div>
            <div className="content">
                {/* Greeting */}
                <div className="container greeting">
                    <h2>{t("greeting.title")}</h2>
                    <p>{t("greeting.text")}</p>
                </div>
                {/* Top Users Card */}
                <div className="container top">
                    <div className="top-title">
                        <h2>{t("top.title")}</h2>
                        <Trophy className="trophy"/>
                    </div>
                    <TopUser
                        type="gold"
                        name="Ali"
                        topic="Math Genius"
                        point={9372}
                        id={1}
                    />
                    <TopUser
                        type="silver"
                        name="Assaev"
                        topic="Math Genius"
                        point={7541}
                        id={2}
                    />
                </div>
                {/* Your Statistics Card */}
                <div className="container stats">
                    <div className="top-title">
                        <h2>{t("stats.title")}</h2>
                        <TrendingUp className="trending-up"/>
                    </div>
                    <TopicStat id={1} subject={"Biology"} score={97} total={110} color={"#22c55e"}/>
                    <TopicStat id={1} subject={"History"} score={10} total={10} color={"#2274c5"}/>
                    <TopicStat id={1} subject={"Math"} score={85} total={100} color={"#9c22c5"}/>
                    <TopicStat id={1} subject={"Physics"} score={54} total={90} color={"#c57922"}/>
                    <p className="text-sm">{t("stats.text-sm", {count: 2})}</p>
                </div>

            </div>
        </div>
    )
}
