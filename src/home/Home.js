import React from "react";
import "./Home.css";

const Home = () => {
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
        <button>Zagreb 🇭🇷</button>
        <button>Marbella 🇪🇸</button>
        <button>Corsica 🇫🇷</button>
        </div>

                </div>
    );
    }
export default Home;