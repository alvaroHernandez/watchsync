import fetch from 'isomorphic-unfetch'

HomePage.getInitialProps = async ({ req, query }) => {
    const protocol = req
        ? `${req.headers['x-forwarded-proto']}:`
        : location.protocol
    const host = req ? req.headers['x-forwarded-host'] : location.host
    const pageRequest = `${protocol}//${host}/api/rooms`
    const res = await fetch(pageRequest)
    const json = await res.json()
    return json
}

function HomePage({ profiles, page, pageCount }) {
    return (
        <>
            {profiles}
        </>
    )
}

export default HomePage
