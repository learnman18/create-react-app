import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLoaderCard from "./PageLoaderCard";
import InfiniteScroll from "react-infinite-scroller";

const PageLoader = () => {

    const [junoInfo , setJunoInfo] = useState([]);
    const [pageIndex , setPageIndex] = useState(1);
    const [hasMoreDataToLoad , setHasMoreDataToLoad] = useState(true);

    // useEffect(()=>{
    //     axios.get(`https://images-api.nasa.gov/search?q=juno&page=1&page_size=15`)
    //     .then((respone)=>{
    //         // console.log(respone.data.collection.items[0].data[0].title);
    //         setJunoInfo(respone.data.collection.items)
    //     })
    //     .catch((err)=> console.log(err));
    // },[])

    useEffect(()=>{
        FetchMoreData();
    },[])

    const FetchMoreData = () => {
        axios.get(`https://images-api.nasa.gov/search?q=juno&page=${pageIndex}&page_size=15`)
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
            <InfiniteScroll
            next={FetchMoreData}
            loadMore={FetchMoreData}
            hasMore={hasMoreDataToLoad}
            loader={<div className="loader">Loading ...</div>}>
            

        <div className="container">
            <div className="row pt-4">
                { junoInfo ?
                    junoInfo.map((curCard , index)=>(
                        <PageLoaderCard key={curCard.data[0].nasa_id} compIndex={curCard.data[0].nasa_id} title={curCard.data[0].title} description={curCard.data[0].description} 
                            junoImg={curCard.links[0].href} dateCreated={curCard.data[0].date_created.replace(/[TZ]/ , " ")}
                        ></PageLoaderCard>
                            // <div className="card mb-3 me-4" style={{maxWidth: 540}} key={curCard.data[0].nasa_id}>
                            //     <div className="row">
                            //         <div className="col-md-4 ps-0">
                            //             <img src={curCard.links[0].href} className="img-fluid rounded-start h-100" alt="..." />
                            //         </div>
                            //         <div className="col-md-8">
                            //             <div className="card-body">
                            //                 <h5 className="card-title">{curCard.data[0].title}</h5>
                            //                 <p className="card-text">{curCard.data[0].description}</p>
                            //                 <p className="card-text"><small className="text-body-secondary">{curCard.data[0].date_created.replace(/[TZ]/ , " ")}</small></p>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
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