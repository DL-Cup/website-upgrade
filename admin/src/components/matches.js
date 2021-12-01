import React from "react";
import { useEffect } from "react";

export default function addMatches(){
    return (
        <div>
            <form method="post">

                <label>Gameweek:</label>
                <input type="number" name="gw"></input>
                
                    <div>
                    <label> Match 1 : </label>
                    <input type="text" name="team1"/>
                    <input type="text" name="team2"/>
                    </div>
               

            </form>
        </div>
    )
}