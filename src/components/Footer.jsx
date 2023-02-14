import React from "react";
import github_icon from "../img/icons/github_icon.svg"
import behance_icon from "../img/icons/behance_iconfooter.svg"
import linkedin from "../img/icons/linkeding_icon.svg"
import instagram_icon from "../img/icons/instagram_icon.svg"
import telegram_icon from "../img/icons/telegram_icon.svg"
import email_icon from "../img/icons/email_icon.svg"
import logo_blanco from "../img/icons/rtag_logowithe.svg"
import "./styles/secondbanner.css"

export default function (){
    return(
        <>
        <div className="footer_container">
            <h1>You can also find me at:</h1>
            <div className="button_container">
            <button ><a href="https://github.com/Robin98123" target="_blank"><img src={github_icon}/></a></button>
            <button><a href="https://www.behance.net/ryrinconmultimedia" target="_blank"><img src={behance_icon}/></a></button>
            <button><a href="https://www.linkedin.com/in/robinson-bernal-55b897ba/" target="_blank"><img src={linkedin}/></a></button>
            <button><a href="https://www.instagram.com/robinsonrincon9/" target="_blank"><img src={instagram_icon}/></a></button>
            <button><a href="https://t.me/RobinsonBernal" target="_blank"><img src={telegram_icon}/></a></button>
            <button><a href="mailto:robinson_rincon1998@hotmail.com" target="_blank"><img src={email_icon}/></a></button>
            </div>
        </div>
        <div>
            <div>
                <img src={logo_blanco}/>
            </div>
            <div>

            </div>
        </div>
        </>

    )
}