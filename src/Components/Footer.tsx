import "../Components/Styles/Footer.css"
import {useTranslation} from "react-i18next";
import {House, Brain, Browsers, UsersThree, User  } from "phosphor-react";
import {useLocation, useNavigate} from "react-router-dom";
import {useGlobalNotification} from "../NotificationProvider.tsx";

export default function Footer() {
    const location = useLocation();
    const notification = useGlobalNotification();
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
    // Разбиваем путь по '/' и берем последний элемент
    const currentPage = location.pathname.split('/').pop() || 'home';
    const navigate = useNavigate();
    const {t} = useTranslation("home");
    return (
        <div className={"footer"}>
            <button className={`footer-btn ${currentPage=="home" ? 'btn-active' : ''}`} onClick={() => navigate("/")}>
                <House size={32}/>
                {t("footer.home")}
            </button>
            <button className={`footer-btn ${currentPage=="tests" ? 'btn-active' : ''}`} onClick={() => navigate("/tests")}>
                <Brain size={32}/>
                {t("footer.tests")}
            </button>
            <button className={`footer-btn nonactive`} onClick={() => notify()}>
                <Browsers size={32}/>
                {t("footer.posts")}
            </button>
            <button className={`footer-btn nonactive`} onClick={() => notify()}>
                <UsersThree  size={32} />
                {t("footer.community")}
            </button>
            <button className={`footer-btn nonactive`} onClick={() => notify()}>
                <User  size={32}/>
                {t("footer.profile")}
            </button>

        </div>
    )
}
