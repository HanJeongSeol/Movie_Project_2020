import React, { Component } from "react"
import "../App.css"

// 로딩중임을 알려주기 위해 isLoding state 추가
export default class App extends Component {
    state = {
        isLoding: true,
        movies: [],
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoding: false,
            })
        }, 4000)
    }

    render() {
        // return에서 this.state.isLoding처럼 길게 쓰고싶지 않기 떄문에 const이용해서 isLoding이름의 객체를 생성하고 값을 this.state로 준다.
        // 객체 안에 쓰여지는 이름은 state속에 들어가있는 속성 이름과 동일
        const { isLoding } = this.state
        return <div>{isLoding ? "loding..." : "success"}</div>
    }
}
