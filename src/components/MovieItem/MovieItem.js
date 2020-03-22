import Link from 'next/link'
import styles from './MovieItem.module.scss'

const MovieItem = () =>(
    <div className={styles["movie-item"]} >
        <div className={styles["image-container"]}>
            <img alt="portada pelicula" className={styles.thumbnail}
                 src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
        </div>
        <div className={styles.information}>
            <span className={styles.title}> <Link href="/movie/1"><a>Alfalfa</a></Link> </span>
            {/*<span className={styles.title}> <Link href="/movie/2"><a>Beta</a></Link> </span>
            <span className={styles.title}> <Link href="/movie/3"><a>Gama</a></Link> </span>
            <span className={styles.title}> <Link href="/movie/4"><a>Delta</a></Link> </span>*/}
        </div>
    </div>  
);

export default MovieItem