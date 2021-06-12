import React from "react";
import "../result.css";

class result6_3 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/" + subject_name + ".png";
        const main_context = this.props.main_context;
        const sub_context = this.props.sub_context;

        const saveBtn = "결과저장";
        const mainBtn = "메인으로";
        return (
            <div className="result">
                <div className="container">
                    <div
                        className="subject_name"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: subject_name }}
                    ></div>
                    <img className="type-img" src={imgUrl} alt={subject_name} />
                    <div
                        className="main_context"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: main_context }}
                    ></div>
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
                        <a href="#">
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
result6_3.defaultProps = {
    subject_name: "나와 어울리는 과는?",
    main_context: "뉴미디어디자인과",
    sub_context:
        "엥? 이란 생각을 하셨다면 다시 한번 생각해 보세요.</br>" +
        "디자인과는 보이시는 것보다 더 다양하고 체계적으로 디자인 수업을 진행합니다.</br>" +
        "포스터, 브랜드 로고 등과 같은 시각 디자인 수업, 그래픽 영상 수업, 3D 제품 제작 수업, 웹 디자인,</br>"+
        "웹 디자인을 활요할 수 있는 웹코딩까지 다양한 수업이 있어요~</br>"+
        "이미 다른 과 이시라면 이렇게 본인의 성향을 생각해 공부하시는 것도 좋은 방법 중 하나네요!"
        
};

export default result6_3;