import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question3_1";
import { number1 } from "./Question3_1";

function Question3_4() {
    const onIncrease = () => {
        number1.count1 += 10;
        console.log(number1);
    };
    const onDecrease = () => {
        number1.count1 += 20;
        console.log(number1);
    };
    const question_title = "Q4. 취업은?";
    const btn1 = "성적순!"; //10
    const btn2 = "운과 타이밍!"; //20
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="50" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question3_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question3_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
                <img
                    className="mini-logo-question"
                    src="/images/logo/mini-logo.png"
                    alt="mini-logo"
                />
            </div>
        </div>
    );
}
export default Question3_4;
