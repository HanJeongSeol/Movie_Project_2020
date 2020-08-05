import React, { Component } from "react"
import axios from "axios"
import Movie from "./Movie"
import "../Main.css"

export default class Main extends Component {
    state = {
        isLoding: true,
        movies: [],
    }
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
        )
        // console.log(movies)
        // comsole.log(movies.data.data.movies)
        this.setState({ movies, isLoding: false })
    }

    componentDidMount() {
        this.getMovies()
    }
    render() {
        const { isLoding, movies } = this.state
        return (
            <section className="container">
                {isLoding ? (
                    <div className="loader">
                        <span className="loader__text">
                            "Loding......."
                        </span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => {
                            return (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    summary={movie.summary}
                                    title={movie.title}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                ></Movie>
                            )
                        })}
                    </div>
                )}
            </section>
        )
    }
}
