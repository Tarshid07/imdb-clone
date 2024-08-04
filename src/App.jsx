import React from "react";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./componenets/NavBar";
import Banner from "./componenets/Banner";
import Movies from "./componenets/Movies";
import Watchlist from "./componenets/Watchlist";

export default function App() {
    return (
        <React.Fragment>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<React.Fragment><Banner /><Movies />
                    </React.Fragment>}>
                    </Route>
                    <Route path="/watchlist" element={<Watchlist />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}