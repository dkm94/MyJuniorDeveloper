import React, { useEffect } from 'react';
import Nav from "../Components/Nav-loggedin";
import Dashboard from "../Components/Dashboard/Dashboard";

export default function DashboardPage() {

    useEffect(() => {
        document.title = "Mon Dashboard"
    })

    return (
        <div>
            <Nav />
            <Dashboard />
        </div>
    )
}
