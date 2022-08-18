import { useState } from "react";
import {JoinContest} from "./JoinContest";
import {StartScreen} from "./StartQuiz";

function ShowQuiz() {

    const [username, setUsername] = useState(null);

    return (
        <>
            {
                username ? (
                    <JoinContest />
                ) : (
                    <StartScreen setUsername={setUsername} />
                )
            }
        </>
    );
}

export default ShowQuiz;