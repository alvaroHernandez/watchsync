import fetch from 'node-fetch'

const CUEVANA_API = "https://api.cuevana3.io/stream/plugins/gkpluginsphp.php"

export default async (req, res) => {
	const {
    query: { mid },
  } = req

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  try {
	  const movie = await getCuevanaMovie(mid) 	

	  res.json(movie)
	} catch(error) {
		throw error
	}
}

const getCuevanaMovie = async (fileId) => {
	const options = {
		method: 'POST',
		headers: {
    	'Content-Type': 'application/x-www-form-urlencoded',
    	'Accept-Encoding': 'gzip, deflate, br',
    	'Origin': 'https://api.cuevana3.io'
    },
		body: `link=${fileId}`
	}

	const result = await fetch(CUEVANA_API, options)
	const json = await result.json()

	return json
}