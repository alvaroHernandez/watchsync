import React from "react";
import MovieList from "../src/components/MovieList/MovieList";
import { v4 as uuidv4 } from 'uuid';
const Home = ({ movies }) => {
    return <MovieList movies={movies}/>
};

export async function getServerSideProps() {
    return {
        props: {
            movies: [
                {roomId : uuidv4(), url: "fakeUrl"},
                {roomId : uuidv4(), url: "fakeUrl"},
                {roomId : uuidv4(), url: "fakeUrl"},
                {roomId : uuidv4(), url: "fakeUrl"},
                {roomId : uuidv4(), url: "fakeUrl"},
                {roomId : uuidv4(), url: "fakeUrl"},
                {roomId : uuidv4(), url: "fakeUrl"},
                {roomId : uuidv4(), url: "fakeUrl"}]
        },
    }
}

export default Home;
