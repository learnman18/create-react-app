import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLoaderCard from "./PageLoaderCard";
import DropdownOptions from "./DropdownOptions";
import previewImg from "../../imgs/preview.jpg"
// import InfiniteScroll from "react-infinite-scroller";
import "./pageLoader.css"


const PageLoader = () => {

    const [junoInfo , setJunoInfo] = useState([]);
    const [pageNum , setPageNum] = useState(1);
    const [category , setCategory] = useState("juno");
    const [loader , setLoader] = useState(false);

    useEffect(()=>{
        setLoader(true);
        axios.get(`https://images-api.nasa.gov/search?q=${category}&page=${pageNum}&page_size=10`)
        .then((respone)=>{
            // console.log(respone.data.collection.items[0].data[0].title);
            // console.log("items - " , respone.data.collection.items[0].links[0].href.replace(/ /g, '%20'));
            // setJunoInfo(respone.data.collection.items);
            // console.log("then" , pageNum);

            const items = respone.data.collection.items.map(item => {
                //adding a new json object property since we are not receceving the link[0].href of preservernace API(item[11])
                if (!item.links || item.links.length === 0) {
                    return { ...item, links: [{ href: previewImg }] };
                    //links: [{ href: previewImg }] this is the property we ae adding.
                }else {
                    // console.log("response" , item);
                    return item;
                }
            });
            setJunoInfo(items);
            setLoader(false);
        })
        .catch((err)=> console.log("error message - ", err));
    },[pageNum , category])

    const ToGetInputNumber = (event) => {
        const originalString = event.target.value;
        const lengthOfString = originalString.length > 2 ? originalString.substring(0,2) : originalString;
        setPageNum(lengthOfString);
    }

    function selectedDropdownValues(event) {
        setCategory(event.target.value);
    }

    function pageNumberIncrement(){
        setPageNum(pageNum + 1);
        console.log("pageNumberIncrement ",pageNum);
    }

    function pageNumberDecrement(){
        setPageNum(pageNum - 1);
        console.log("pageNumberDecrement ",pageNum);
    }

    return (
        <>
            {loader && 
                <div className="pageLoader"></div> //check pageLoader CSS in css file for the spinner/Loader
            }
            {!loader &&
            <div className="container">
                <DropdownOptions defaultSelected={category} selectDropVals={selectedDropdownValues}></DropdownOptions>
                <div className="row pt-4 justify-content-center junoMobileChanges">
                    { junoInfo ?
                        junoInfo.map((curCard , index)=>(
                            <PageLoaderCard key={curCard.data[0].nasa_id} compIndex={curCard.data[0].nasa_id} title={curCard.data[0].title} 
                            description={curCard.data[0].description} junoImg={curCard.links[0].href}
                            dateCreated={curCard.data[0].date_created.replace(/[TZ]/g , " ")}
                            ></PageLoaderCard>
                            )  
                        )
                        :
                        <p>Nothing to be found</p>  
                    }
                </div>
                <div className="">
                    <div className="d-flex justify-content-start">
                        <p className="currentPage">
                            You are on page : <span className="fw-bold">{pageNum}</span>
                        </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-start pe-4">
                        <p className="pe-2" style={{color:"blue",cursor:"pointer",textDecoration:"underline"}} 
                        onClick={pageNumberDecrement}>Previous</p>
                        <p className="pe-2"><span className="me-2">Jump to page :</span>
                            <input type="text" maxLength="2" value={pageNum} style={{width:"30px"}} onChange={ToGetInputNumber}/>
                        </p>
                        <p style={{color:"blue", cursor:"pointer",textDecoration:"underline"}} 
                        onClick={pageNumberIncrement}>Next</p>
                    </div>
                </div>  
            </div>
            }
        </>
    )

}    

export default PageLoader;


/*Page Loader with loader feature but the issue is on the first load it loads quite amount of data if page_size is more than 20
it loads those same cards again with same ID which throws error in console of duplicate card.
But when we scroll again where we get to see the Loader... from here it load new set of data from page 2.
so it means instead of loading only 20 data(as passed in API) on first load  it loads more card than 20 cards and after 20 cards
oit will repeat the same card again, and after that when we scroll down it loads new set of cards.
*/

/*
const PageLoader = () => {

    const [junoInfo , setJunoInfo] = useState([]);
    const [pageIndex , setPageIndex] = useState(1);
    const [hasMoreDataToLoad , setHasMoreDataToLoad] = useState(true);

    useEffect(()=>{
        FetchMoreData();
    },[])

    const FetchMoreData = () => {
        axios.get(`https://images-api.nasa.gov/search?q=juno&page=${pageIndex}&page_size=20`)
        .then((respone) => {
            if(respone.data.collection.items.length > 0){                
                setJunoInfo((prevData)=> [...prevData , ...respone.data.collection.items]);
                setHasMoreDataToLoad(true);
                setPageIndex((prevIndex)=> prevIndex + 1);
            }else{
                setHasMoreDataToLoad(false);
            }
            // respone.data.collection.items.length > 0 ? setHasMoreDataToLoad(true) : setHasMoreDataToLoad(false)
        })
        .catch((err)=>{
            console.log(err);
            setHasMoreDataToLoad(false);
        });

    }

    return(
        <> 
            <InfiniteScroll next={FetchMoreData}
            loadMore={FetchMoreData}
            hasMore={hasMoreDataToLoad}
            loader={<div className="loader">Loading ...</div>}>

            <div className="container">
                <div className="row pt-4">
                    { junoInfo ?
                        junoInfo.map((curCard , index)=>(
                            <PageLoaderCard key={curCard.data[0].nasa_id} compIndex={curCard.data[0].nasa_id} title={curCard.data[0].title} 
                            description={curCard.data[0].description} junoImg={curCard.links[0].href} 
                            dateCreated={curCard.data[0].date_created.replace(/[TZ]/g , " ")}
                            ></PageLoaderCard>
                            )  
                        )
                        :
                        <p>some error</p>  
                    }
                </div>
            </div>
        </InfiniteScroll>
        </>
    )  

}

export default PageLoader;

*/