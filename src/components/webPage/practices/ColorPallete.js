import React, { useState } from "react";
import '../Menu.css'

export default function ColorPallete(){

    const [bg , setBg] = useState();
    
    let x = document.querySelectorAll(".list-group-item");
    for(let i=0;i<x.length;i++){
        x[i].addEventListener("click" , function(){
            console.log("color picked", x[i].style.background);
            setBg(x[i].style.background);
        })
    }
        
    return(
        <>
            <div className="container d-flex py-5 mainBox">
                <div className="me-3" style={{width:"5rem"}}>
                    <h6>background colors</h6>
                    <div className="card colorPallete">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{background:"red"}}>Red</li>
                        <li class="list-group-item" style={{background:"grey"}}>Yellow</li>
                        <li class="list-group-item" style={{background:"purple"}}>White</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between">
                    <h6>Select from color pallete</h6>
                    <div className="colorBox" style={{width:"15rem",padding:"3rem 1rem 3rem 1rem",background:bg}}>
                        selected color is {bg}
                    </div>
                </div> 
            </div>
        </>
    )
}