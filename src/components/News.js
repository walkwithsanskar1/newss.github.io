import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps={
        country:'in',
        pagesize:8,
        category:'general'
    }
    
    static propTypes={
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props){
        super(props);
        console.log("hello im component");
        this.state={
            articles:[],
            loading:false,
            
            page:1,
            // totalArticles:0
        }
        document.title=this.props.category
        
    }

    async update(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19af29ee92344b4faee8ab2902502d46&page=${this.state.page}&pageSize=${this.props.pagesize}`
        this.setState({
            loading:true
        })

        let data= await fetch(url)

        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
            totalArticles: parsedData.totalResults ,
            loading:false})

    }
    async componentDidMount(){
      this.update()
    }

    handlePrevClick=async()=>{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19af29ee92344b4faee8ab2902502d46&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
        // this.setState({loading:true})

        // let data= await fetch(url)

        // let parsedData= await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page:this.state.page-1,
        //     articles: parsedData.articles,
        //     loading:false
        // })

        this.setState({page:this.state.page-1})
        this.update()


    }
    handleNextClick=async()=>{
        // if(!(this.state.page+1>Math.floor(this.state.totalResults/20))){
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19af29ee92344b4faee8ab2902502d46&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
        //     this.setState({
        //         loading:true
        //     })

        //     let data= await fetch(url)

        //     let parsedData= await data.json()
        //     console.log(parsedData);
        //     this.setState({
        //         page:this.state.page+1,
        //         articles: parsedData.articles,
        //         loading:false
        //     })
        // }
        this.setState({page:this.state.page+1})
        this.update()
        
    }
  render() {
    return (
      <div className='container my-3'>
      <h1 className='text-center'>News Zone best in {this.props.category}</h1>
       {this.setState.loading && <Spinner/>}
      
      <div className="row">
      { this.state.articles.map((element)=>{

        return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
      
      
      
      })}
        
        
      
      
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
      <button type="button"  className="btn btn-info" onClick={this.handleNextClick}>Next</button>
      </div>
      </div>
    )
  }
}

export default News