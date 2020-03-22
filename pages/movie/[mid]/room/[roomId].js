import { useRouter } from 'next/router'
import React, {useEffect} from 'react';


const Room = () => {
    const router = useRouter()
    const { roomId } = router.query

    useEffect(() => {
        require('../../../../lib/peer');
        const peer = new Peer();
        peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
        });
    },[]);

    return <p>Room: {roomId}</p>
}

export default Room
