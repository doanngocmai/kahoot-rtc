import {useRef} from "react";
import styled from 'styled-components';

const StartStyled = styled.div`
    height: 80vh;
    display: flex;
    .start {
        height: 130px;
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: auto;
        .startInput {
            width: 100%;
            height: 40px;
            border: none;
            border-radius: 5px;
            text-align: center;
            font-size: 16px;
            color: #000;
        }
        .startInput:focus {
            outline: none;
        }
        .startButton {
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
            color: #fff;
          background-color: #7828c8;
        }
    }
`;
export const StartScreen = ({setUsername}) => {
    const inputRef = useRef(null);
    function handleClick() {
        inputRef.current.value && setUsername(inputRef.current.value);
    }

    return (
        <StartStyled>
            <div className='start'>
            <input
                ref={inputRef}
                type="text"
                id="message"
                placeholder="Enter your name"
                name="message"
                className="startInput"
            />

            <button className="startButton" onClick={handleClick}>Start</button>
            </div>
        </StartStyled>
    );
}
