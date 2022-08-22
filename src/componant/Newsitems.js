import React  from "react";

 const Newsitems =(props)=>{ 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3 text-center" >
        <div className="card" >
          <div style={{display:"flex" , justifyContent:"flex-end",position:"absolute",right:0}}>
          <span className=" badge rounded-pill bg-danger">{source}</span></div>
          <img
            src={imageUrl}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By{author} at {new Date(date).toGMTString()}</small></p>
            <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Go to News
            </a>
          </div>
        </div>
      </div>
    );
  }
  export default Newsitems