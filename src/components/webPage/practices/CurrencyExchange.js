import React, { useEffect, useState } from "react";

const CurrencyExchnage = (props) =>{

    const [baseCurrency , setBaseCurrency] = useState();
    const [curToBeConvert , setCurToBeConvert] =  useState();
    const [curVal , setCurVal] = useState();

    useEffect(()=>{
        const FetchCurrency = async ()=>{
            console.log()
            const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}/${curToBeConvert}.json`;
            try {
                const response = await fetch(url);
                const result = await response.json();
                setCurVal(result[curToBeConvert]);
                // console.log(result[curToBeConvert]);
            } catch (error) {
                console.error(error);
            }
        }
        FetchCurrency();
    })

    return(
        <>
            <div className="d-flex justify-content-center align-items-center py-5">
                <div className={`p-3 border border-${props.borderClr}`}>
                    <div className="d-flex flex-column">
                        <h4>
                            Currency Exchange
                        </h4>
                        <input type="text" placeholder="enter the base currency" value={baseCurrency} onChange={(event)=>{
                            console.log(event.target.value);
                            setBaseCurrency(event.target.value);
                        }}/>
                        <input type="text" placeholder="enter the currency to be converted" value={curToBeConvert} onChange={(event)=>{
                            setCurToBeConvert(event.target.value);
                            console.log(event.target.value);
                        }}/>
                        <p>Value is  : {curVal}</p>
                    </div> 
                </div>                       
            </div>
        </>
    )

}

export default CurrencyExchnage;