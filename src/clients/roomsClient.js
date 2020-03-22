import fetch from 'node-fetch'

export default class RoomsClient {
	constructor() {
		this.ROOM_PATH = '/api/rooms/'
	}

	updateHostId(roomId, movieUrl, hostId) {
		return fetch(`${this.ROOM_PATH}${roomId}/movie/${movieUrl}?hostId=${hostId}`,
			{
				method: 'put',
				body: JSON.stringify({})
			})
			.then((result) => result.json())
			.then((json) => json)
	}

	getHostId(roomId, movieUrl) {
		return fetch(`${this.ROOM_PATH}${roomId}/movie/${movieUrl}?guestId=${hostId}`,
			{
				method: 'get',
				body: JSON.stringify({})
			})
			.then((result) => result.json())
			.then((json) => json)
	}

	createIfDoesNotExists(roomId,movieUrl){
		console.log("creating", {roomId,movieUrl})
		if(!roomId || !movieUrl){
			return;
		}
		return fetch(`${this.ROOM_PATH}${roomId}/movie/${movieUrl}`,
			{
				method: 'post',
				body: JSON.stringify({})
			})
			.then((result) => Promise.resolve(result.status))
	}
}
