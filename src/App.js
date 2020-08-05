import React, { Component } from "react"
import "./Main.css"
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./component/Navigation"

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Navigation></Navigation>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route
                    path="/movie-detail"
                    component={Detail}
                ></Route>
            </HashRouter>
        )
    }
}
