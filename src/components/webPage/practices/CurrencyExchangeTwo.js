import React, { useEffect, useState } from "react";

const CurrencyExchnageTwo = (props) =>{

    const [baseCurrency , setBaseCurrency] = useState();
    const [curToBeConvert , setCurToBeConvert] =  useState();
    const [curVal , setCurVal] = useState();

    useEffect(()=>{
        const FetchCurrency = async ()=>{
            console.log();
            const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}/${curToBeConvert}.json`;
            // const url = "";
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
    },[baseCurrency , curToBeConvert])

    return(
        <>
            <div className="d-flex justify-content-center align-items-center py-5">
                <div className={`p-3 border border-${props.borderClr}`}>
                    <div className="d-flex flex-column">
                        <h4>
                            Currency Exchange
                        </h4>
                        <input type="text" className="form-control mb-2" placeholder="enter the base currency" value={baseCurrency} onChange={(event)=>{
                            console.log(event.target.value);
                            let x = event.target.value.toLowerCase();
                            setBaseCurrency(x);
                        }}/>
                        <input type="text" className="form-control mb-2" placeholder="currency to be converted" value={curToBeConvert} onChange={(event)=>{
                            let x = event.target.value.toLowerCase();
                            setCurToBeConvert(x);
                            console.log(event.target.value);
                        }}/>
                        <p>Value is  : {curVal}</p>
                    </div> 
                </div>                       
            </div>
        </>
    )

}

export default CurrencyExchnageTwo;