import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Countdown from "../countdown/Countdown";

const Home = () => {

    const navigate = useNavigate();

    const goZagred = () => navigate("/zagreb");
    const goMarbella = () => navigate("/marbella");

    return (
        <div className="home">
        <h1>Welcome to 'Soft Life' Girls Trip 2024 ✈️</h1>
        <Countdown />
        <ul>
            <li>
            Depart on: Friday 5th July  
            </li>
            <li>
            Return on: Monday 8th July
            </li>
        </ul>
        <div className="button-container">
        <button onClick ={goZagred}>Zagreb 🇭🇷</button>
        <button onClick ={goMarbella}>Marbella 🇪🇸</button>
        </div>
                </div>
    );
    }
export default Home;