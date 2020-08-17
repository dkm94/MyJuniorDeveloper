import React, { useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import data from "./data.json";

export default function Selectbox() {

    const [options] = useState(data)

    return (
        <div className="multiselect">
            <Multiselect options={options} displayValue="dep_name" placeholder="Sélectionner" hidePlaceholder="true" emptyRecordMsg="Aucun élement correspondant" />
        </div>
    )
}
