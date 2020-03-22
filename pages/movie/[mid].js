import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import MoviesClient from '../../src/clients/moviesClient'

const MovieContainer = () => {
  const router = useRouter()
  const { mid } = router.query

  const moviesClient = new MoviesClient();
  const [movie, setMovie] = useState(undefined)

  useEffect(() => {
  	mid && moviesClient.getMovie(mid).then(setMovie)
  }, [mid])

  return movie ? <Movie movie={movie} /> : null
}

const Movie = ({movie}) => {
	return (<video src={movie.link} controls width="350"></video>)
}

export default MovieContainer
