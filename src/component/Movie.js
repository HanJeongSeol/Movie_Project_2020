import React from "react"
import PropTypes from "prop-types"
import "../Movie.css"
import { Link } from "react-router-dom"

const Movie = ({ id, year, title, summary, poster, genres }) => {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: "/movie-detail",
                    state: { year, title, summary, poster, genres },
                }}
            >
                <img src={poster} alt={title} title={title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return (
                                <li
                                    key={index}
                                    className="movie__genre"
                                >
                                    {genre}
                                </li>
                            )
                        })}
                    </ul>
                    <p className="movie__summary">
                        {summary.slice(0, 180)}...
                    </p>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie

/* 
리다이렉트 기능을 만들기 위해서 route props의 history 키를 사용해야합니다.
history 키에는 push, go, goBack, goForward와 같은 키들이 존재합니다.
이 키에는 URL을 변경해 주는 함수가 존재합니다. 
실제로 history 키에 이런 값이 있는지 확인해보겠습니다.
home으로 돌아거서 영화 카드를 눌러 movie-detail 페이지로 이동합니다.
이후 콘솔창에서 history에 출력된 값을 살펴봅니다.
*/