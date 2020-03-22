import fetch from 'node-fetch'

const CUEVANA_API = "https://api.cuevana3.io/stream/plugins/gkpluginsphp.php"

export default async (req, res) => {
	const {
    	query: { mid },
  	} = req

	  res.setHeader('Content-Type', 'application/json')

	try {
		const movie = await getCuevanaMovie(mid) 	

		res.status(200).json(movie)
	} catch(error) {
		console.error("Movies API: error retrieving movie ", error)
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

	try {
		console.info("Movies API: Retrieving Cuevana movie with fileId ", fileId)
		const result = await fetch(CUEVANA_API, options)
		const json = await result.json()

		return json	
	} catch(error) {
		throw error
	}

}