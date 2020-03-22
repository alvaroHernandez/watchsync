import { useRouter } from 'next/router'
import React, {useEffect} from 'react';
import Link from 'next/link'

import RoomsClient from '../src/clients/roomsClient'

const Room = () => {
    const router = useRouter()
    const { id : roomId, movieUrl } = router.query

    const roomsClient = new RoomsClient();

    //scrapping
    useEffect(() => {
        if(roomId && movieUrl){
            require('../lib/peer');
            roomsClient.createIfDoesNotExists(roomId,movieUrl).then((response)=>{
                console.log("Room Page: creation response: ", response );
                if(response === 201){
                    console.log("Room Page: room created, instantiating peer ");
                    const peer = new Peer();

                    peer.on('connection', function(conn) {
                        conn.on('data', function(data) {
                            console.log('Received', data);
                        });
                    });
                    peer.on('open', function(id) {
                        console.log('Room Created: ' + id);
                        roomsClient.updateHostId(roomId,movieUrl,id);
                    });
                }else if(response === 200){
                    console.log("Room Page: room already exist");
                    const peer = new Peer();
                    roomsClient.getHostId(roomId,movieUrl).then( (hostId)=>{
                        console.log("Attempting to connect with host: ", hostId);
                        const conn = peer.connect(hostId);
                        conn.on('open', function() {
                            console.log("Connected with host: ", hostId);
                            // Receive messages
                            conn.on('data', function(data) {
                                console.log('Received', data);
                            });

                            // Send messages
                            conn.send('Hello!');
                        });
                    });
                }
            });
        }
    },[roomId, movieUrl]);

    return <p>Room: {roomId}</p>
}

export default Room
