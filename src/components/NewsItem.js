import React, { Component } from 'react'

export  class NewsItem extends Component {

  
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props

    let d=author;
    let p=date;
    if(author==null || date==null){ 
      d="News Zone";
      p="unknown"
    }

    
    return (
      <div>
                <div  className="card" style={{width: "18rem"}}>
                    <img src={imageUrl}  className="card-img-top" alt="..."/>
                    <div  className="card-body">
                        <h5  className="card-title">{title}.....</h5>
                        <p  className="card-text">{description}.....</p>
                        <p className='card-text'><small className='text-muted'>By {d} on this {p}</small></p>
                        <a href={newsUrl} target="_blank"  className="btn  btn-sm btn-primary">Read Some</a>

                    </div>
            </div>
      </div>
    )
  }
}

export default NewsItem