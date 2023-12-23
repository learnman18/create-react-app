import React, { useEffect, useState } from "react";

const getLocalItem = () => {
    const x = localStorage.getItem("allItems")
    if(x){
        return JSON.parse(localStorage.getItem("allItems"));
    } else return [];
}

const MyToDoList = () => {

    const [inputData , setinputData] = useState();
    const [AddItem , setAddItem] = useState(getLocalItem);
    const [itemToBeEdited , setItemToBeEdited] = useState();
    const [toggleBtns , setToggleBtns] = useState(true);

    //Add Item

    const ClickToAddItem = () => {
        // !inputData ? alert("Please enter something") : setAddItem([...AddItem , inputData]);
        if(!inputData){
            alert("Please enter something")
        }else if( inputData && !toggleBtns) //toggleBtns is false and inputData has some value
        {
            setAddItem(
                AddItem.map((curEle)=>{
                    if(curEle.id === itemToBeEdited){
                        return {...curEle , name:inputData}
                    }
                    return curEle;
                })
            )
            setToggleBtns(true);
            setinputData("");  // just to empty the input filed once the item is added.
        }else {
            const allInputData = {id: new Date().getTime().toString() , name : inputData} //id we are creating so we won't have to use the index
            setAddItem([...AddItem , allInputData]);
            setinputData(""); // just to empty the input filed once the item is added.
        }
    }

    //delete Item

    const ClickToRemoveItem = (indx) => {
        const  x = AddItem.filter((curVal)=>{
            return indx !== curVal.id;
        })
        setAddItem(x);
    }

    useEffect(()=>{
        localStorage.setItem("allItems" , JSON.stringify(AddItem))
    },[AddItem]);

    //edit Item

    const editItem = (indx) => {
        const findItems = AddItem.find((currentValue) => {
                // console.log("id " + id + " Index " +  indx)
                return currentValue.id === indx;
        })
        console.log(findItems)
        setinputData(findItems.name);
        setToggleBtns(false);
        setItemToBeEdited(indx);
    }


    return(
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center py-5">
                <div className="border border-dark p-2">
                    <h5>TO DO APP</h5>
                    <div className="d-flex align-items-center border border-dark">                    
                        <input type="text" className="form-control fixBrdr" value={inputData} onChange={(e)=>
                            {  
                            // console.log(e.target.value);
                            setinputData(e.target.value)
                            }
                        }/>
                        {
                        toggleBtns ? <button className="bg-transparent fixBrdr" onClick={ClickToAddItem}>
                            <i className="fa-solid fa-plus"></i>
                        </button> :
                        <button className="bg-transparent fixBrdr" onClick={ClickToAddItem}>
                            <i className="fa-solid fa-edit"></i>
                        </button>
                        }
                        

                    </div>

                    {
                        AddItem.map((curVal)=>{
                            return (
                            <div key={curVal.id} className="d-flex align-items-center justify-content-between my-2 bg-lavender text-dark">
                                <p className="my-2">{curVal.name}</p>
                                <div>
                                    <button className="bg-transparent fixBrdr">
                                        <i className="fa-solid fa-edit" onClick={()=>editItem(curVal.id)}></i>
                                    </button>
                                    <button className="bg-transparent fixBrdr" onClick={()=>ClickToRemoveItem(curVal.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyToDoList;