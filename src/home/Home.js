import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const goZagred = () => navigate("/zagreb");
    const goMarbella = () => navigate("/marbella");

    return (
        <div className="home">
        <h1>Welcome to 'Soft Life' Girls Trip 2024 ✈️</h1>
        <ul>
            <li>
            Depart on: Friday 5th July  
            </li>
            <li>
            Return on: Monday 8th July
            </li>
        </ul>
        <h3>Budget: £500
        <p>Includes flights, transfer, bed & breakfast</p>
        </h3>
        <div className="button-container">
        <button onClick ={goZagred}>Zagreb 🇭🇷</button>
        <button onClick ={goMarbella}>Marbella 🇪🇸</button>
        </div>
<h2 className= 'ps'>Not included</h2>
<ul>
        <li>Coscia: 6hrs flight</li>
        <li>Ghana: 6 hrs flight</li>
        <li>Gran Canaria: 4hr 50mins flight</li>

</ul>

                </div>
    );
    }
export default Home;