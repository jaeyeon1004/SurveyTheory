import React from "react";
import "../result.css";

import $ from "jquery";
window.$ = $;

class result9_1 extends React.Component {
    render() {
        $(document).ready(function () {
            setTimeout(function () {
                $(".loader").delay(3000).fadeOut(1500);
            });
        });

        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type9/leader.png";
        const sub_context = this.props.sub_context;

        const saveBtn = "결과저장";
        const mainBtn = "메인으로";
        return (
            <div className="result">
                {" "}
                <div class="loader">
                    <div id="container">
                        <img
                            className="loading-logo"
                            src="/images/logo/mini-logo.png"
                            alt="mini-logo"
                        />
                        <div id="one"></div>
                        <div id="two"></div>
                        <div id="three"></div>
                        <span id="loading-text">LOADING</span>
                    </div>
                </div>
                <div className="container">
                    <div
                        className="subject_name"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: subject_name }}
                    ></div>
                    <img className="type-img" src={imgUrl} alt={subject_name} />
                    <div
                        className="sub_context"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: sub_context }}
                    ></div>

                    <div className="buttons">
                        <button
                            className="save_btn"
                            onClick={() => this.props.history.push("/collect")}
                        >
                            {saveBtn}
                        </button>
                        <a href="/#">
                            <button
                                className="main_btn"
                                onClick={() => this.props.history.push("/")}
                            >
                                {mainBtn}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
result9_1.defaultProps = {
    subject_name: "팀플에서 나의 포지션은?",
    sub_context:
        "'내가 좀 힘들더라도 총대매서 확실하게 진행해서 성공적인 결과를 이끌어내고 싶어!' 라고 말하는 당신은 <span>리더 포지션</span>입니다. <br/><br/> 물론 리더를 정해서 프로젝트를 진행할 수도 있지만 대부분 암묵적으로 리더를 맡아서 하여 어떤 프로젝트를 진행하든 리더가 되어 팀을 이끄시네요. <br/> 벅차고 힘들고 지칠 수 있지만, 좋은 결과를 위해, 나의 성장을 위해, 조금만 더 힘내요. :-)"
};

export default result9_1;
