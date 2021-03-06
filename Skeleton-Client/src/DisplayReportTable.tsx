import React, {useEffect, useState} from "react";
import {Blue6Data, deleteBlue6s, getBlue6s} from "./Blue6API";
import './DisplayReportTable.css';
import {Blue7Data, deleteBlue7s, getBlue7s, sendBlue7s} from "./Blue7API";
import Delete from "./Delete.svg"
import {Blue7} from "./Blue7";

export const DisplayReportTable = () => {

const [displayReportBlue6, setDisplayReportBlue6] = useState<Blue6Data[]>([]);
const[displayReportBlue7, setDisplayReportBlue7] = useState<Blue7Data[]>([]);


useEffect( () => {
    getBlue6s()
        .then((data) => {
            setDisplayReportBlue6(data);
        })
        .catch(() => {
            console.error('blue6 data transfer didnt work')
        })
},[]);

useEffect(() => {
    getBlue7s()
        .then((data) => {
            setDisplayReportBlue7(data);
            console.log(displayReportBlue7)
        })
        .catch(() => {
            console.error('blue7 data transfer didnt work')
        })
}, []);

return (
<div>
<h2>Active Training</h2>
<div className='table-container'>
<table>
    <div className= 'overflow'>
    <tr>
        <th>Reporting Date</th>
        <th>Unit & Call Sign</th>
        <th>SP Date Time Group</th>
        <th>Estimated RP Date Time Group</th>
        <th>Command Post Location</th>
        <th>ETA to Continue Operations</th>
        <th>Sensitive Item Status</th>
        <th>One Sentence Narrative</th>
        <th>Contact Name and Phone #</th>
    </tr>
        {displayReportBlue6.map((blueSixData) => {
            console.log('Here is my current Blue6 id ', blueSixData.id)
            return (
                <tr>
                    <td>
                        {blueSixData.reportingDateInput}
                    </td>
                    <td>
                        {blueSixData.callSignInput}
                    </td>
                    <td>
                        {blueSixData.spDateInput}
                    </td>
                    <td>
                        {blueSixData.rpInput}
                    </td>
                    <td>
                        {blueSixData.locInput}
                    </td>
                    <td>
                        {blueSixData.etaInput}
                    </td>
                    <td>
                        {blueSixData.siInput}
                    </td>
                    <td>
                        {blueSixData.narInput}
                    </td>
                    <td>
                        {blueSixData.pocInput}
                    </td>
                    <td>
                        <button  type = "submit" onClick={(e) => {

                            deleteBlue6s(blueSixData.id!)
                            window.location.reload()
                        }}>
                            <img src={Delete}></img>
                        </button>
                    </td>

                </tr>
            )
        })  }

    </div>

</table>
    <h2>Completed Training</h2>

    <table>
        <div className= 'overflow'>
            <tr>
                <th>Reporting Date Time Group</th>
                <th>Unit & Call Sign</th>
                <th>RP Date Time Group</th>
                <th>Command Post Location</th>
                <th>Accidents or SIGACTs</th>
                <th>ETA to Continue Operations</th>
                <th>Sensitive Item Status</th>
            </tr>
            {displayReportBlue7.map((blueSevenData) => {
                console.log('Here is my Blue7 data ', blueSevenData)
                console.log('Here is my current Blue7 id ', blueSevenData.id)
                return (
                    <tr>
                        <td>
                            {blueSevenData.checkOutReportingDateInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutCallSignInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutRpDateInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutLocInput}
                        </td>
                        <td>
                            {blueSevenData.accidentInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutEtaInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutSiInput}
                        </td>
                        <td>
                            <button  type = "submit" onClick={(e) => {

                                deleteBlue7s(blueSevenData.id!)
                                window.location.reload()
                            }}>
                                <img src={Delete}></img>
                            </button>
                        </td>

                    </tr>
                )
            })}

        </div>

    </table>


</div>
<div className= "tableContent">

</div>
</div>)

}



