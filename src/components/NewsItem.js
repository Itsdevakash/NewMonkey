import React, { Component } from 'react'

export class NewsItem extends Component {
  
  static propTypes = {

  }

  render() {
    let {title,description,imageurl,newsurl,publishedAt,author,source} = this.props;
    return (
      <>
                <div className="card" style={{width: "18rem"}}>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"86%",zIndex:'1'}}>
                  {source}
                  <span className="visually-hidden">unread messages</span>
                  </span>
                <img src={!imageurl?"https://images.news18.com/ibnlive/uploads/2022/07/national-emblem-1-165770803516x9.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text">By {author} on {new Date(publishedAt).toGMTString()}</p>
                <a rel="noreferrer" href={newsurl} className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </>
    )
  }
}

export default NewsItem
