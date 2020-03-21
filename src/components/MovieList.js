import Link from 'next/link'
import './MovieList.module.scss'

const MovieList = () =>(
    <div className="movie-item" >
        <ul>
            <li> <Link href="/movie/1"><a>Alfa</a></Link> </li>
            <li> <Link href="/movie/2"><a>Beta</a></Link> </li>
            <li> <Link href="/movie/3"><a>Gama</a></Link> </li>
            <li> <Link href="/movie/4"><a>Delta</a></Link> </li>
        </ul>
    </div>  
)

export default MovieList