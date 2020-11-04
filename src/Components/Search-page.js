import React, { useEffect } from 'react';
import Search from "./Search/Search";

export default function SearchPage() {

    useEffect(() => {
        document.title = "Rechercher"
    })

    return (
        <div className="container-fluid">
            <Search />
        </div>
    )
}
