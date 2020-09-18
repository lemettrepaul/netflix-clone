import React from 'react';
import './App.css';
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="app">
            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />
            <Row isLargeRow title="Trending now" fetchUrl={requests.fetchTrending}/>
            <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

        </div>
    );
}

export default App;
