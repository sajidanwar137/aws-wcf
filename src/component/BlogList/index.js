import React, {} from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
// import ResultNotFound from "../../component/ResultNotFound";
import './style.scss'

const BlogList = ({blogData}) => {
    const {metadata,data} = blogData;
    return(
    <div className="blog-list-outer">
      <div className="container">  
      {data && data.length > 0 ? (
        <ul className="blog-list">
          {data.map((item,idx) => (
          <li key={idx}>
              <Link to={'/blog/'+item.slug}>
                {item.media_type === "image" ?
                  <div className="img">
                    <figure>
                    <img src={metadata&&metadata.imageUrl+`${item.media_name}?t=${item.added_at}`} alt={item.title}/>
                    </figure> 
                  </div>:
                  item.media_type === "youtube" &&
                  <div className="img">
                    <ReactPlayer
                        url={item.media_name}
                        controls={true}
                        className="blog-video"
                    />
                  </div>}
                  <div className="text">
                      <small>{item.caption_top}</small>
                      <h4>{item.title}</h4>
                      <p>{item.short_description}</p>
                      <div className="one-min">
                      <span>{item.caption_bottom}</span>
                      <figure><img src="../images/sm-logo.png" alt="sm-logo"/></figure> 
                      </div>
                  </div>
              </Link>
          </li>
          ))}
        </ul>
        ) : (
          //<ResultNotFound />
          'ResultNotFound'
        )} 
        </div>
      </div>
    )
}

export default BlogList;