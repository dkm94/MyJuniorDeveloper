import React, { useEffect } from 'react';
import Dashboard from "../Components/Dashboard/Dashboard";

export default function DashboardPage() {

    useEffect(() => {
        document.title = "Mon Dashboard"
    })

    return (
        <div>
            <Dashboard />
        </div>
    )
}
