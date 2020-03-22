import fetch from 'node-fetch'

export default class RoomsClient {
	constructor() {
		this.ROOM_PATH = '/api/rooms/'
	}

	updateHostId(roomId, movieUrl, hostId) {
		const options = {
			method: 'PUT',
			body: JSON.stringify({})
		}

		return fetch(`${this.ROOM_PATH}${roomId}?movieUrl=${movieUrl}&hostId=${hostId}`, options)
			.then((result) => result.json())
			.then((json) => json)
	}

	getHostId(roomId, movieUrl) {
		return fetch(`${this.ROOM_PATH}${roomId}?movieUrl=${movieUrl}`)
			.then((result) => result.json())
			.then((json) => json.room.hostId)
	}

	createIfDoesNotExists(roomId, movieUrl) {
		const options = {
			method: 'POST',
			body: JSON.stringify({})
		}

		console.info("Rooms Client: attempt to create room: ", { roomId, movieUrl})

		if(!roomId || !movieUrl){
			console.error("Rooms Client: Invalid parameters");
		}

		return fetch(`${this.ROOM_PATH}${roomId}?movieUrl=${movieUrl}`, options)
			.then((result) => result.status)
	}
}
