import Link from 'next/link'
import React from 'react'
import styles from './MovieItem.module.scss'


const fileId = 'ek5lbm9xYWNrS0xYMTZLa2xNbkdvY3ZTb3BtZng4TGp6ZFpobGFMUGtOalJ5S1dUbjhhTzJOTFhuS2FzajVPcG1acGthV0hEMGVQWDA2S21ZY1hRNEpQWHAybGxtcGVubVptU2ZuUzJ3THVva2FDaVo0WFgxTkRNbDZGM3g5VFh5WjFrWjJ1V21LcVpsbVJu';


function MovieItem( { movie }  ){
    return (
        <div className={styles["movie-item"]}>
            <div className={styles["image-container"]}>
                <img alt="portada pelicula" className={styles.thumbnail}
                     src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
            </div>
            <div className={styles.information}>
                <span className={styles.title}> <Link
                    href={`/room?id=${movie.roomId}&movieUrl=${movie.url}`}><a>Alfalfa</a></Link> </span>
            </div>
        </div>
    )
}

export default MovieItem
