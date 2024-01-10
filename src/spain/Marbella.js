
import React from "react";
import "./Marbella.css";
import marbellaImage from "../images/marbella-collage.png";

import BackButton from "../back-button/Back-button";

const Marbella= () => {
    return( 
<div className="marbella">
<BackButton />

<img className="marbella-screenshot" src={marbellaImage} id="marbella-images" alt='marbella'/>

<div className="marbella-content">
<div className="marbella-column" id="marbella">
<h2>Weather: 28°</h2>
<h2>Flight: 2 hours 20 minutes</h2>
<h2>Time difference: +1 hour</h2>
<h2>Flight: EasyJet</h2>
</div>
<div className="marbella-column" >
<button className="marbella-button">
            <a href="https://www.loveholidays.com/holidays/?destinationIds=1020&departureAirports=LON&nights=3&rooms=2&date=2024-07-05&flexibility=0&sort=POPULAR&f.boardBasis=BB&f.pools=Indoor%20Pool" target="_blank" rel="noreferrer"> View Search results </a>
          </button>

<div>
<button className= "marbella-button">
<a href="https://www.getyourguide.co.uk/-l1217/ttd/?cmp=ga&ps_theme=ttd&cq_src=google_ads&cq_cmp=15505300953&cq_con=133873374387&cq_term=things+to+do+in+marbella&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=15505300953&adgroup_id=133873374387&target_id=kwd-4028074578&loc_physical_ms=9046212&match_type=e&ad_id=581827598839&keyword=things+to+do+in+marbella&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gad_source=1&gclid=CjwKCAiA-vOsBhAAEiwAIWR0TZUKbeTn4Q5R47jkYL5eaU6COqS6QLQi_YGTbSWIgo26A0sEB3ZoMhoCmTMQAvD_BwE&visitor-id=VIJ30F8YQ7OF7VK3KICF6BPZC7WGJIDL&locale_autoredirect_optout=true" target ="_blank" rel="noreferrer">Things to do in Marbella</a>
</button>
<br/>
<button className= "marbella-button">
<a href="https://www.tripadvisor.co.uk/Hotel_Review-g187439-d568934-Reviews-Senator_Marbella_Spa_Hotel-Marbella_Costa_del_Sol_Province_of_Malaga_Andalucia.html" target ="_blank" rel="noreferrer">Hotel Review</a>
</button>
</div>
</div>
</div>
</div>
    )
}

export default Marbella;