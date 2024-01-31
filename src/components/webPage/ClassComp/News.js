import React, {Component} from "react";
import Spinner from "./Spinner";
// import Articles from "./Article"
class News extends Component{

    constructor(){
        console.log("constructor");
        super();
        this.state = {
            articles:[],
            page:1,
            loader:false,
            status:"",
            message:""
            // pageSize:15,
            // articleLength:""
            // articles:Articles
        }
    }

    NewsInfo = async () => {
        // let url = "";
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=356f95ea33764cdbade0c4f3f02a9764&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loader:true})
        try {
            let response = await fetch(url);
            let result = await response.json();
            console.log(result);
            this.setState({status:result.status,message:result.message})
            this.setState({
                articles: result.articles,
                totalResult : result.totalResults,
                loader : false,
            })
        }catch(error){
            console.error('Error fetching data:', error);
            this.setState({ loader: false });
        }
    }


    HomePageNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=356f95ea33764cdbade0c4f3f02a9764&page=${this.state.page}&pageSize=20`;
        this.setState({loader:true})
        try {
            let response = await fetch(url);
            let result = await response.json();
            console.log(result);
            this.setState({status:result.status,message:result.message})
            this.setState({
                articles: result.articles,
                loader : false,
            })
        }catch(error){
            console.error('Error fetching data:', error);
            this.setState({ loader: false });
        }
    }

//first render gets renders first then didMount gets renderd

    async componentDidMount(){
        console.log("cdm");
        // this.NewsInfo();
        this.HomePageNews()
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            // Fetch new data based on the updated category
            this.setState({
                page:1
            })
            if(window.location.pathname !== "/about"){
                this.NewsInfo();
            }
            if(window.location.pathname === "/about"){
                this.HomePageNews();
            }
        }
    }
       
//please refer classNote.txt for info on increment/decremnt settate

/*The issue you are facing might be due to the asynchronous nature of this.setState in React. 
When you use this.setState to update the state and then immediately try to access the updated state, 
React doesn't guarantee that the state will be updated synchronously.
To address this, you can use the callback form of this.setState, which accepts a function that 
receives the previous state as an argument and returns the new state. 
This ensures that you are working with the most up-to-date state.*/

    increment = async () => {
        this.setState((prevState)=> ({
            page: prevState.page +1
        }),() => {
            // Callback function that runs after the state has been updated
            this.NewsInfo();
        });
    }
  
    decrement = async () => {
            this.setState((prevState) => ({
            page: prevState.page - 1,
            }), () => {
                // Callback function that runs after the state has been updated
            this.NewsInfo();
            });
    }


    render(){
        console.log("render");
        // console.log("artcle", this.state.articles)
        return(
            <>
                {/* {this.state.status !== "ok" && <h1>{this.state.message}</h1> } */}
                {this.state.loader && <Spinner></Spinner>}
                {!this.state.loader &&
                    this.state.status !== "ok" ? <h1>{this.state.message}</h1> :
                    <div className="row mx-4 my-4">
                        {
                            this.state.articles.map((elem)=>{
                                return(
                                <div className="col-md-4 d-flex align-items-stretch" key={elem.url}>
                                    <div className="card me-3 mb-5" >
                                        <div>
                                            <img style={{height:220}} src={elem.urlToImage ? elem.urlToImage : "https://ichef.bbci.co.uk/news/1024/branded_news/17BE7/production/_132255279_gdwafwjaqaedplt-1.jpg"} className="card-img-top img-fluid" alt="..."/>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h6>{elem.title}</h6>
                                            <p className="card-text">{elem.description}</p>
                                            <a href={elem.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary align-self-start mt-auto">Read More</a>                    
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <div className="d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} className="btn btn-primary" id="previous" onClick={this.decrement}>Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/15)} className="btn btn-primary" id="next" onClick={this.increment}>Next</button>
                        </div>
                    </div>
                }
            </>
        )
    }
} 

export default News;