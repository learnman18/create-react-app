import React, { useEffect, useState } from "react";
import '../Header/Menu.css'

export default function ColorPallete(){

    const [bg , setBg] = useState();
    
    useEffect(()=>{
        const dispBgClr = ()=> {
            let allLis = document.querySelectorAll(".bgLi");
            for(let i=0;i<allLis.length;i++){
                allLis[i].addEventListener("click" , function(){
                    console.log("color picked", allLis[i].style.background);
                    setBg(allLis[i].style.background);
                })
            }
        }
        dispBgClr();
    },[])

        
    return(
        <>
            <div className="container d-flex py-5 mainBox">
                <div className="me-3" style={{width:"5rem"}}>
                    <h6>background colors</h6>
                    <div className="card colorPallete">
                        <ul className="list-group list-group-flush">
                        <li className="bgLi list-group-item" style={{background:"red"}}>Red</li>
                        <li className="bgLi list-group-item" style={{background:"grey"}}>Yellow</li>
                        <li className="bgLi list-group-item" style={{background:"purple"}}>White</li>
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