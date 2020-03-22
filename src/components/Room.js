import Link from 'next/link'
import styles from './MovieList.module.scss'
const Room = () =>(
    <div className="room">
        <span className={styles.title}> <Link href="room/asdasdasdasd?movie=uuid"><a>Alfa</a></Link> </span>
    </div>
)

export default MovieList
