import React from "react";
import "./App.css";
import github from "./assets/GitHub Icon.png"
import fb from "./assets/Facebook Icon.png"
import ig from "./assets/Instagram Icon.png"
import twit from "./assets/Twitter Icon.png"

export default function Footer() {
    function openGithub(){
        window.open("https://github.com/Samaresh-16","_blank").focus()
    }
    function openInsta(){
        window.open("https://www.instagram.com/sam_the_maiti?igsh=MTZydmUwMnA4M2ptbQ==","_blank").focus()
    }
    return(
        <footer className="footer">
            <img src={github} alt="github" onClick={openGithub}/>
            <img src={ig} alt="insta" onClick={openInsta}/>
            <img src={fb} alt="facebook" />
            <img src={twit} alt="twitter" />
        </footer>
    )
}