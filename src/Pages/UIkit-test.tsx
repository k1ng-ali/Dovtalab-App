import { TopicIco, Subject, OptionsButton, Button} from "../Components/UIKits.tsx"
import {Book} from 'lucide-react';
import "./Styles/UIkits.css"
export default function UIkitTest() {
    return (
        <div>
            <TopicIco ClassName={`topic-ico`}
            color={["red", "blue"]}
            > <Book/>
            </TopicIco>
            <Subject topic={"Biology"}
                     count={25}
                     isAvailable={true}>

                <TopicIco
                          color={["red", "blue"]}
                > <Book/>
                </TopicIco>
            </Subject>
            <OptionsButton variant={"default"}
                           text={"Nucleus"}
                           option={"A"}/>
            <OptionsButton variant={"wrong"}
                           text={"Nucleus"}
                           option={"A"}/>
            <OptionsButton variant={"success"}
                           text={"Nucleus"}
                           option={"A"}/>
            <Button variant={"default"} text={"NextQuestion"}/>
        </div>

    )
}
