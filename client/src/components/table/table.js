import React, { useState, useEffect } from "react";
import axios from '../../axios';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';


export default function Table(props){

    let { id } = useParams();
    const [TableInfo, setTableInfo] = useState([]);

    useEffect(
        ()=>{
            async function fetchTable(){
                const request = await axios.get('table');
                console.log(request);
                setTableInfo(request.data);
                return request;
            }
            fetchTable();
        },
     [id ]
    );
    {console.log(TableInfo)}

    return (
        <div>
            <h4>yo</h4>
        {TableInfo.map((i)=>(
            
            <h3>{i.team}</h3>
        )
            )}
           
            </div>
    );
}

