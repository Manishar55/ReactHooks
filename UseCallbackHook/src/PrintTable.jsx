
import React, {useEffect, useState} from "react";

const PrintTable=({calculateTable})=>{
    const [rows, setRows]=useState([]);

    useEffect(()=>{
        console.log("Peint table runs");
        setRows(calculateTable());
        
    }, [calculateTable]);

    return rows.map((row, index)=>{
        return <p key={index}>{row}</p>
    });
};

export default PrintTable;