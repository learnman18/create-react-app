import React, { useState } from "react";

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
            <div className="container d-flex pt-5">
                <div>
                    <h6>background colors</h6>
                    <div className="card" style={{width: "18rem"}}>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{background:"red"}}>Red</li>
                        <li class="list-group-item" style={{background:"grey"}}>Yellow</li>
                        <li class="list-group-item" style={{background:"purple"}}>White</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h6>Select from color pallete</h6>
                    <div style={{width:"18rem",padding:"3rem",background:bg}}>
                        selected color is {bg}
                    </div>
                </div> 
            </div>
        </>
    )
}