import React from "react";

export default function DropdownOptions(props){

    const dropValues = ["hubble" , "curiosity" , "chandra" , "cassini"]
    // const [dropdownVals , setDropdownVals] = useState();

    function myFun(event){
        props.selectDropVals(event);
    }

    return(
        <>
            <div className="pt-3">
                <select className="form-select" aria-label="Default select example" onChange={myFun}
                 style={{width:"auto",textTransform:"capitalize"}}>
                    <option defaultValue style={{textTransform:"capitalize"}}>{props.defaultSelected}</option>
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