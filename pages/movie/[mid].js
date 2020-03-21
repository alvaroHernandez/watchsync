import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { mid } = router.query

  return <p>Movie: {mid}</p>
}

export default Movie
