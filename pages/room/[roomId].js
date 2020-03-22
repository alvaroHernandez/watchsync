import { useRouter } from 'next/router'
import React, {useEffect} from 'react';
import Link from 'next/link'

import RoomsClient from '../../src/clients/roomsClient'

const Room = () => {
    const router = useRouter()
    const { roomId, movieUrl } = router.query
    console.log(router.query);

    const roomsClient = new RoomsClient();

    //scrapping
    useEffect(() => {
        if(roomId && movieUrl){
            const createResponse = roomsClient.createIfDoesNotExists(roomId,movieUrl).then((response)=>{
                if(response === 201){
                    require('../../lib/peer');
                    const peer = new Peer();
                    peer.on('open', function(id) {
                        console.log('My peer ID is: ' + id);
                        roomsClient.updateHostId(roomId,movieUrl,id);
                    });
                }
            });
        }
    },[roomId, movieUrl]);

    return <p>Room: {roomId}</p>
}

export default Room
