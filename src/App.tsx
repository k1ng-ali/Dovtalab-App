import Home from "./Pages/Home.tsx";
import UIkitTest from "./Pages/UIkit-test.tsx";
import Tests from "./Pages/Tests";
import {QuizPage} from "./Pages/QuizPage.tsx";
import Footer from "./Components/Footer"

import './i18n';
import {Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={ <Home/>}/>
                <Route path={"/uikits"} element={ <UIkitTest/>}/>
                <Route path={"/tests"} element={<Tests/>}/>
                <Route path="/quiz/:subject" element={<QuizPage />} />
            </Routes>
            <Footer />
        </div>
    );
}
