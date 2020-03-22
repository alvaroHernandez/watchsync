import Link from 'next/link'
import styles from './MovieList.module.scss'
const Room = () =>(
    <div className="room">
        <span className={styles.title}> <Link href="/movie/1"><a>Alfa</a></Link> </span>
    </div>
)

export default MovieList
