import React, { useEffect, useState } from "react";
import Exchange from '../JSON/Exchange.json'

const CurrencyExchnage = (props) =>{

    const [baseCurrency , setBaseCurrency] = useState();
    const [curToBeConvert , setCurToBeConvert] =  useState();
    const [curVal , setCurVal] = useState();

    useEffect(()=>{
        const FetchCurrency = ()=>{
            console.log("RESULT " , Exchange);
            setBaseCurrency(Exchange.base_code);
            // console.log(Object.keys(Exchange.conversion_rates));
            const sepTheKey = Object.keys(Exchange.conversion_rates);
            setCurToBeConvert(sepTheKey);
            // console.log("exchnage rate" , sepTheKey[Exchange.conversion_rates])
        
        }
        FetchCurrency();
    },[baseCurrency])

    const selectOptions = (event) =>{
        setCurVal(Exchange.conversion_rates[event.target.value]);
        console.log("event value" , Exchange.conversion_rates[event.target.value])
    }

    return(
        <>
            <div className="d-flex justify-content-center align-items-center py-5">
                <div className={`p-3 border border-${props.borderClr}`}>
                    <div className="d-flex flex-column">
                        <h4>
                            Currency Exchange
                        </h4>
                        <input type="text" className="form-control mb-2" placeholder="enter the base currency" value={baseCurrency}/>
                        <select class="form-select" aria-label="Default select example" onChange={selectOptions}>
                            <option>Open this select menu</option>
                            {
                                /* if curToBeConvert has some value it wil display or it will display null, you will get error on the
                                page refresh if we are not using this.
                                The error "Cannot read properties of undefined (reading 'map')" typically occurs when you try to call 
                                the map method on an object that is undefined or not an array. This issue may arise if, 
                                during the initial rendering of your component, the data hasn't been loaded or fetched yet.
                                */

                                curToBeConvert ? curToBeConvert.map((curVal , i)=>{
                                    return (
                                        <option key={i} value={curVal}>{curVal}</option>
                                    )
                                }) : []
                            }
                        </select>
                        <p>Value is  : {curVal}</p>
                    </div> 
                </div>                       
            </div>
        </>
    )

}

export default CurrencyExchnage;