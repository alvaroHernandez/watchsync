import Link from 'next/link'
import styles from './MovieItem.module.scss'
import { v4 as uuidv4 } from 'uuid';

const fileId = 'ek5lbm9xYWNrS0xYMTZLa2xNbkdvY3ZTb3BtZng4TGp6ZFpobGFMUGtOalJ5S1dUbjhhTzJOTFhuS2FzajVPcG1acGthV0hEMGVQWDA2S21ZY1hRNEpQWHAybGxtcGVubVptU2ZuUzJ3THVva2FDaVo0WFgxTkRNbDZGM3g5VFh5WjFrWjJ1V21LcVpsbVJu';
const roomId = uuidv4();

const MovieItem = () =>(
    <div className={styles["movie-item"]} >
        <div className={styles["image-container"]}>
            <img alt="portada pelicula" className={styles.thumbnail}
                 src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
        </div>
        <div className={styles.information}>
            <span className={styles.title}> <Link href={`/room/${roomId}?movieUrl=PLACEHOLDER`}><a>Alfalfa</a></Link> </span>
        </div>
    </div>
);

export default MovieItem
