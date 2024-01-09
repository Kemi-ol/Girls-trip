
import React from "react";
import "./Zagreb.css";
import zagrebImage from "../images/zagreb.png";
import BackButton from "../back-button/Back-button";

const Zagreb = () => {
    return( 
<div className="zagreb">
<BackButton />

<h1>Zagreb 🇭🇷</h1>
<h2>Weather: 28°</h2>
<h2>Flight: 2 hours 20 minutes</h2>
<h2>Time difference: +1 hour</h2>
<h2>Flight: Ryan air</h2>
<h2>Hotel: Double Tree by Hilton</h2>
<h2>Pros: Cheap, Culture, Food </h2>
<h2> cons: No Beach </h2>

<br/>

<img className="zagreb-screenshot" src={zagrebImage}/>

<div>
<button className= "zagreb-button">
<a href="https://uk.hotels.com/go/croatia/things-to-do-zagreb" target ="_blank">Things to do in Zagreb</a>
</button>
<br/>
<button className= "zagreb-button">
<a href="https://www.tripadvisor.co.uk/Hotel_Review-g294454-d3372267-Reviews-DoubleTree_by_Hilton_Zagreb-Zagreb_Central_Croatia.html" target ="_blank">Hotel Review</a>
</button>
</div>

</div>
    )
}

export default Zagreb;