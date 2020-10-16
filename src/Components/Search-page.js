import React, { useEffect } from 'react';
import Nav from "./Nav-loggedin";
import Search from "./Search/Search";

export default function SearchPage() {

    useEffect(() => {
        document.title = "Rechercher"
    })

    return (
        <div>
            <Nav />
            <Search />
        </div>
    )
}
