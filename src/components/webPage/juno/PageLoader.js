import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLoaderCard from "./PageLoaderCard";
// import InfiniteScroll from "react-infinite-scroller";


const PageLoader = () => {

    const [junoInfo , setJunoInfo] = useState([]);
    const [pageNum , setPageNum] = useState(1);

    useEffect(()=>{
        axios.get(`https://images-api.nasa.gov/search?q=juno&page=${pageNum}&page_size=20`)
        .then((respone)=>{
            // console.log(respone.data.collection.items[0].data[0].title);
            setJunoInfo(respone.data.collection.items);
            console.log("then" , pageNum)
        })
        .catch((err)=> console.log(err , "pageNum" + pageNum));
    },[pageNum])

    const ToGetInputNumber = (event) => {
        const originalString = event.target.value;
        const lengthOfString = originalString.length > 2 ? originalString.substring(0,2) : originalString;
        setPageNum(lengthOfString);
    }

    return (
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
                <p className="text-end">Jump to page :
                    <input type="text" maxLength="2" style={{width:"30px"}} onChange={ToGetInputNumber}/>
                </p>
        </div>
    )

}    

export default PageLoader;


/*Page Loader with loader feature but the issue is on the first load it's quite amount of data if page_size is more than 20
it's loads those same cards again with same ID which throws error in console of duplicate card.
But when we scroll again where we will be able to se Loader... from here it's load new new set of data from page 2. 
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