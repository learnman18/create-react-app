import React from "react";

export default function DropdownOptions(props){

    const dropValues = ["juno" , "hubble" , "curiosity" , "chandra" , "cassini" , "Perseverance"]
    // const [dropdownVals , setDropdownVals] = useState();

    function myFun(event){
        props.selectDropVals(event);
    }

    return(
        <>
            <div className="pt-3">
                <select className="form-select" aria-label="Default select example" onChange={myFun}
                 style={{width:"auto",textTransform:"capitalize"}}>
                    <option className="d-none" defaultValue>{props.defaultSelected}</option>
                    {
                        dropValues.map((items , index)=>{
                            return <option key={index} value={items} style={{textTransform:"capitalize"}}>{items}</option>
                        })
                    }
                </select>
            </div>
        </>
    )
}