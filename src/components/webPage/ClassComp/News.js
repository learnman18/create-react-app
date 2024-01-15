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
            loader:false
            // pageSize:15,
            // articleLength:""
            // articles:Articles
        }
    }


//first render gets renders first then didMount gets renderd

    async componentDidMount(){
        console.log("cdm");
        // let url = "";
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=356f95ea33764cdbade0c4f3f02a9764&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loader:true})
        let response = await fetch(url);
        let result = await response.json();
        console.log(result);
        this.setState({
            articles: result.articles,
            totalResult : result.totalResults,
            loader : false
        })
        if(result.status === "error"){
            <h1>{result.status}</h1>
        }
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            // Fetch new data based on the updated category
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=356f95ea33764cdbade0c4f3f02a9764&page=1&pageSize=${this.props.pageSize}`;
            this.setState({ loader: true });
    
            const response = await fetch(url);
            const result = await response.json();
    
            this.setState({
                articles: result.articles,
                totalResult: result.totalResults,
                loader: false
            });
        }
    }
    
   
//please refer classNote.txt for info on increment/decremnt settate

    increment = async () => {
            // let url = ""
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=356f95ea33764cdbade0c4f3f02a9764&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let response = await fetch(url);
            let result = await response.json();
            // console.log(result)
            console.log("Increment")
            this.setState({
                articles: result.articles,
                totalResult : result.totalResults,
                page : this.state.page + 1
            })
            // console.log("increment" , this.state.page)
    }
  
    decrement = async () => {
        // let url = ""
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=356f95ea33764cdbade0c4f3f02a9764&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let response = await fetch(url);
        let result = await response.json();
        // console.log(result)
        console.log("Decremnt")
        this.setState({
            articles: result.articles,
            totalResult : result.totalResults,
            page : this.state.page - 1
        })
        console.log("decremnt" , this.state.page)
    }


    render(){
        console.log("render");
        // console.log("artcle", this.state.articles)
        return(
            <>
                {this.state.loader && <Spinner></Spinner>}
                { !this.state.loader &&
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