import { useRouter } from 'next/router'
import React, {useEffect} from 'react';
import Link from 'next/link'

import RoomsClient from '../src/clients/roomsClient'

const ROOM_CREATED = 201
const ROOM_CONNECT = 200

const Room = () => {
    const router = useRouter()
    const { id : roomId, movieUrl } = router.query

    const roomsClient = new RoomsClient()

    useEffect(() => {
        if(roomId && movieUrl) {
            require('../lib/peer');

            roomsClient.createIfDoesNotExists(roomId, movieUrl)
                .then((response) => roomsResponse(response, roomsClient, roomId, movieUrl));
        }
    }, [roomId, movieUrl])

    return roomId ? <p>Room: {roomId}</p> : null
}

const roomsResponse = (response, roomsClient, roomId, movieUrl) => {
    console.info("Room Page: creation response: ", response);

    if(response === ROOM_CREATED) roomCreated(roomsClient, roomId, movieUrl)
    else if(response === ROOM_CONNECT) connectRoom(roomsClient, roomId, movieUrl)
}

const roomCreated = (roomsClient, roomId, movieUrl) => {
    console.info("Room Page: room created, instantiating peer");

    const peer = new Peer();

    peer.on('connection', (conn) => {
        conn.on('data', (data) => {
            console.info('Received', data);
        });
    });
    peer.on('open', (id) => {
        console.log('Room Created: ' + id);
        roomsClient.updateHostId(roomId, movieUrl, id);
    });
}

const connectRoom = (roomsClient, roomId, movieUrl) => {
    console.info("Room Page: room already exist");

    const peer = new Peer();

    roomsClient.getHostId(roomId, movieUrl).then( (hostId) => {
        console.info("Attempting to connect with host: ", hostId);

        const conn = peer.connect(hostId);

        conn.on('open', () => {
            console.info("Connected with host: ", hostId);
            // Receive messages
            conn.on('data', (data) => {
                console.info('Received', data);
            });

            // Send messages
            conn.send('Hello!');
        });
    });
}

export default Room
