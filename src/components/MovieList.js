import Link from 'next/link'
import styles from './MovieList.module.scss'

const MovieList = () =>(
    <div className={styles.movieItem} >
        <div className="information">
            <span className={styles.title}> <Link href="/movie/1"><a>Alfa</a></Link> </span>
            <span className={styles.title}> <Link href="/movie/2"><a>Beta</a></Link> </span>
            <span className={styles.title}> <Link href="/movie/3"><a>Gama</a></Link> </span>
            <span className={styles.title}> <Link href="/movie/4"><a>Delta</a></Link> </span>
        </div>
    </div>  
)

export default MovieList