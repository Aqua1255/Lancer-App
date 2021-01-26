// @ts-ignore
import React, {useEffect, useState} from 'react';
import Logo from "./Logo.svg";
import './index.css'
import './App.css'
import {Blue6} from "./Blue6";
import {Blue7} from "./Blue7";
import {Blue6Data, getBlue6s} from "./Blue6API";



export const App = () => {

//Hook for Blue6/Blue7 Input Selection
const [reportSelection, setReportSelection] = useState<number>(0);
const [displayReport, setDisplayReport] = useState<Blue6Data[]>([]);

useEffect( () => {
    getBlue6s()
        .then((data) => {
            setDisplayReport(data);
        })
        .catch(() => {
            console.error('data transfer didnt work')
        })
},[]);
    return (

            <div className="background-container">
                <header className="App-header">
                    <h1 className="body">
                        Lancer Brigade Operations Center
                    </h1>
                </header>
                <img src={Logo} className="App-logo" alt="logo"/>

                <div className="form-container">
                    {reportSelection === 1 && <Blue6/>}
                    {reportSelection === 2 && <Blue7/>}

                    {/*{reportSelection === 1 ? <Blue6/> :reportSelection ===2 ? <Blue7/> : null}*/}
                    {/*<>*/}
                    {/*    <button onClick={() =>setReportSelection(1)}>Initiate Training Event w/ Blue 6</button>*/}
                    {/*    <button onClick={() => setReportSelection(2)}>Close-Out Training Event w/ Blue 7</button>*/}
                    {/* </>*/}
                    {/*<button onClick={() => setReportSelection(0)}>Main Menu</button>*/}

                </div>

                <div className="form-container">{reportSelection === 0 ?
                    <>
                        <button onClick={() => setReportSelection(1)}>Initiate Training Event w/ Blue 6</button>
                        <button onClick={() => setReportSelection(2)}>Close-Out Training Event w/ Blue 7</button>
                    </>
                    :
                    <button onClick={() => setReportSelection(0)} className="cancel-button">cancel</button>}
                </div>
                <div>
                    {displayReport}
                </div>

        </div>


    )}