import fetch from 'node-fetch'

export default class MoviesClient {
	constructor() {
		this.MOVIE_PATH = '/api/movie/'
	}

	getMovie(fileId) {
		return fetch(`${this.MOVIE_PATH}${fileId}`)
			.then((result) => result.json())
			.then((json) => json)
	}
}