import React, { useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import data from "./data.json";

export default function Selectbox() {

    const [options] = useState(data)
    // const [selectedValue, setSelectedValue] = useState("")

    // onSelect = (selectedList, selectedItem) => {
    //     console.log(selectedItem)
    // }
    // const [keywords, setKeywords] = useState()
    // useEffect(() => {
    //     Axios.get()
    //     .then(data => setKeywords(data))
    // }) Pour le multiselect Keyword


    return (
        <div className="multiselect">
            <Multiselect options={options}  displayValue="dep_name" placeholder="Sélectionner" hidePlaceholder="true" emptyRecordMsg="Aucun élement correspondant" />
        </div>
    )
}
