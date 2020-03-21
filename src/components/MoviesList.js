import Link from 'next/link'
const MoviesList =()=>(
    <ul>
       <li> <Link href="/movies/1"><a>Alfa</a></Link> </li>
       <li> <Link href="/movies/2"><a>Beta</a></Link> </li>
       <li> <Link href="/movies/3"><a>Gama</a></Link> </li>
       <li> <Link href="/movies/4"><a>Delta</a></Link> </li>
    </ul>
    
)
export default MoviesList