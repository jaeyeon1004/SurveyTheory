import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link, useHistory } from "react-router-dom";
import "./Question7_1";
import { number1, number2, number3, number4 } from "./Question7_1";

function Question7_6() {
    const history = useHistory();
    const onPlus1 = () => {
        number1.count1++;
        console.log(number1);
        if (number1.count1 > number2.count2) {
            if (number1.count1 > number3.count3) {
                if (number1.count1 > number4.count4) {
                    history.push("./result7_4");
                }
            }
        } else if (number2.count2 > number1.count1) {
            if (number2.count2 > number3.count3) {
                if (number2.count2 > number4.count4) {
                    history.push("./result7_1");
                }
            }
        } else if (number3.count3 > number1.count1) {
            if (number3.count3 > number2.count2) {
                if (number3.count3 > number4.count4) {
                    history.push("./result7_2");
                }
            }
        } else {
            history.push("./result7_3");
        }
        number1.count1 -= number1.count1;
        number2.count2 -= number2.count2;
        number3.count3 -= number3.count3;
        number4.count4 -= number4.count4;
    };
    const onPlus2 = () => {
        number2.count2++;
        console.log(number2);
        if (number1.count1 > number2.count2) {
            if (number1.count1 > number3.count3) {
                if (number1.count1 > number4.count4) {
                    history.push("./result7_4");
                }
            }
        } else if (number2.count2 > number1.count1) {
            if (number2.count2 > number3.count3) {
                if (number2.count2 > number4.count4) {
                    history.push("./result7_1");
                }
            }
        } else if (number3.count3 > number1.count1) {
            if (number3.count3 > number2.count2) {
                if (number3.count3 > number4.count4) {
                    history.push("./result7_2");
                }
            }
        } else {
            history.push("./result7_3");
        }
        number1.count1 -= number1.count1;
        number2.count2 -= number2.count2;
        number3.count3 -= number3.count3;
        number4.count4 -= number4.count4;
    };
    const onPlus3 = () => {
        number3.count3++;
        console.log(number3);
        if (number1.count1 > number2.count2) {
            if (number1.count1 > number3.count3) {
                if (number1.count1 > number4.count4) {
                    history.push("./result7_4");
                }
            }
        } else if (number2.count2 > number1.count1) {
            if (number2.count2 > number3.count3) {
                if (number2.count2 > number4.count4) {
                    history.push("./result7_1");
                }
            }
        } else if (number3.count3 > number1.count1) {
            if (number3.count3 > number2.count2) {
                if (number3.count3 > number4.count4) {
                    history.push("./result7_2");
                }
            }
        } else {
            history.push("./result7_3");
        }
        number1.count1 -= number1.count1;
        number2.count2 -= number2.count2;
        number3.count3 -= number3.count3;
        number4.count4 -= number4.count4;
    };
    const onPlus4 = () => {
        number4.count4++;
        console.log(number4);
        if (number1.count1 > number2.count2) {
            if (number1.count1 > number3.count3) {
                if (number1.count1 > number4.count4) {
                    history.push("./result7_4");
                }
            }
        } else if (number2.count2 > number1.count1) {
            if (number2.count2 > number3.count3) {
                if (number2.count2 > number4.count4) {
                    history.push("./result7_1");
                }
            }
        } else if (number3.count3 > number1.count1) {
            if (number3.count3 > number2.count2) {
                if (number3.count3 > number4.count4) {
                    history.push("./result7_2");
                }
            }
        } else {
            history.push("./result7_3");
        }
        number1.count1 -= number1.count1;
        number2.count2 -= number2.count2;
        number3.count3 -= number3.count3;
        number4.count4 -= number4.count4;
    };
    const question_title = "Q6. ?????????????????? ???????";
    const btn1 = "????????? ????????? ????????????"; //B
    const btn2 = "????????? ?????? ??? ??? ?????? ??? ??? ????????? ????????????"; //F
    const btn3 = "???????????? ???????????? ?????? ??????????????? ????????????"; //FB
    const btn4 = "??????????????? ?????? ???????????? ???????????? ????????????"; //BF
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="100" max="100"></progress>
                <div
                    className="question_title"
                    // html ????????? ????????? ??????
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Button onClick={() => onPlus1()}>{btn1}</Button>
                    <br />
                    <Button onClick={() => onPlus2()}>{btn2}</Button>
                    <br />
                    <Button onClick={() => onPlus3()}>{btn3}</Button>
                    <br />
                    <Button onClick={() => onPlus4()}>{btn4}</Button>
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
export default Question7_6;
