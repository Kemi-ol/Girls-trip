import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
        <h1>Welcome to 'Soft Life' Girls Trip 2024</h1>
        <ul>
            <li>
            Depart: Friday 5th July  
            </li>
            <li>
            Return: Monday 8th July
            </li>
        </ul>
        <h3>Budget: £500</h3>
        <p>Click on the button to see the details of each destination.</p>
        <button>Zagreb</button>
        <button>Marbella</button>
        <button>Corsica</button>

                </div>
    );
    }
export default Home;