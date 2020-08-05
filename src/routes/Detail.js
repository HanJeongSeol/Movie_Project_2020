// import React from "react"

// const Detail = (props) => {
//     console.log(props)
//     return <span>hello</span>
// }

// export default Detail

import React, { Component } from "react"

export default class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props
        if (location.state === undefined) {
            history.push("/")
        }
    }

    render() {
        return <span>hello</span>
    }
}
