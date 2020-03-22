import fetch from 'node-fetch'
import cheerio from 'cheerio'

export default async (req, res) => {
	const {
    query: { movieUrl },
  } = req

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	
	const movieRawHtml = await getMovieHtml(movieUrl)

	res.json(parseMovie(movieRawHtml))
}

const getMovieHtml = async (movieUrl) => {
	const request = await fetch(movieUrl)
	const movieHtml = await request.text()

	return movieHtml
}

const parseMovie = (html) => {
	const $ = cheerio.load(html)

	return {
		...getMetadata($),
		fileId: getFileId($) 
	}
}

const getFileId = ($) => {
	const videoHtml = $('div.video.cont').html()
	const indexOfFileId = videoHtml.indexOf('api.cuevana3.io/stream/index.php?file=', 10000)

	let fileId = videoHtml.slice(indexOfFileId).split("=")[1]
	fileId = fileId.split('"')[0]

	return fileId
}

const getMetadata = ($) => {
	const movieMetadata = $('div.Image figure').html()

	const movieTitle = movieMetadata.match('alt="(.*?)"')[1]
	const coverImg = movieMetadata.match('data-src="(.*?)"')[1]

	return {
		title: movieTitle,
		cover: coverImg
	}
}