import React, { Component } from 'react'

export class NewsItem extends Component {
  
  static propTypes = {

  }

  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <>
                <div className="card" style={{width: "18rem"}}>
                <img src={!imageurl?"https://images.news18.com/ibnlive/uploads/2022/07/national-emblem-1-165770803516x9.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsurl} className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </>
    )
  }
}

export default NewsItem
