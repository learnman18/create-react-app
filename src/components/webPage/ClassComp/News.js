import React, {Component} from "react";

class News extends Component{

    constructor(){
        console.log("it will be rendered first");
        super();
        this.state = {
            articles:[]
        }
    }

//first render gets renders first then didMount gets renderd

    async componentDidMount(){
        console.log("it will be renderd after render");
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=356f95ea33764cdbade0c4f3f02a9764";
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        this.setState({
            articles: result.articles
        })
    }

    render(){
        console.log("it will be render before didMount but after constructor");
        return(
            <>
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
            </>
        )
    }
} 

export default News;