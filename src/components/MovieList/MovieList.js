import MovieItem from "../MovieItem/MovieItem";
import styles from './MovieList.module.scss'

const MovieList  = () =>  (
    <div className={styles.container}>
        <div className={styles.box}>
            <div>
                <h1 className={styles.title}>Movies</h1>
            </div>
            <div>
                <div className={styles["movies-scroll"]}>
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                </div>
            </div>
        </div>
    </div>
);

export default MovieList;
