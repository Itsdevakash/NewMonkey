import React, { Component } from 'react'

export class NewsItem extends Component {
  
  static propTypes = {

  }

  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <>
                <div className="card" style={{width: "18rem"}}>
                <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </>
    )
  }
}

export default NewsItem
