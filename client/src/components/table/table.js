import React, { useState, useEffect } from "react";
import axios from '../../axios';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';


export default function Table(props){

     // let { id } = useParams();
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
  //  [id ]
  );
  {console.log(TableInfo)}

  return (
      
    <main>
    <div class="grid-container">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Last 5</th>
              <th id="Pts" title="Total Points">Points</th>
              <th id="Pl" title="Games Played">Played</th>
              <th id="W">Won</th>
              <th id="D">Drawn</th>
              <th id="L">Lost</th>
              <th><abbr title="Goals for">GF</abbr></th>
              <th><abbr title="Goals against">GA</abbr></th>
              <th><abbr title="Goal Difference">GD</abbr></th>
            </tr>
          </thead>
          <tbody>
            
            {TableInfo.map((i)=>(
                <tr>
              <td id={i.team}><span>{i.team}</span><i class="fas fa-minus"></i></td>
              <td>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
              </td>
              <td>{i.points}</td>
              <td>{i.played}</td>
              <td>{i.win}</td>
              <td>{i.draw}</td>
              <td>{i.loss}</td>
              <td>{i.goalForward}</td>
              <td>{i.goalAgainst}</td>
              <td>{i.goalDifference}</td>
              </tr>
              )
          )}
           
            
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
     

         
       
      </div>
  


  
      
       
    
          </main>
         
         
  );
}

