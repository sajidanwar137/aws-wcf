import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import ReactHtmlParser from 'react-html-parser';
import ReactPlayer from 'react-player';
import ContactForm from "../../component/ContactForm";
import './style.scss'

const BlogDetailList = ({blogDetailData}) => {
    const {metadata,data} = blogDetailData;
    return(
        <>
        <Helmet>
            <title>{data&&data.meta_title}</title>
            <meta name="description" content={data&&data.meta_description}/>
            <meta name="keywords" content={data&&data.meta_keywords} />
        </Helmet>
        <div className="blog-detail-outer section">
            <div className="container">
                <div className="blog-detail-list">
                    <h3>{data&&data.title}</h3>
                    <p>{data&&data.description}</p>
                    {data&&data.media_type === "image" ?
                    <div className="img">
                        <figure>
                        <img src={`${metadata&&metadata.imageUrl}${data.media_name}?t=${data.added_at}`} alt={data&&data.title}/>
                        </figure>
                    </div>:
                    data&&data.media_type === "youtube" &&
                    <div className="img">
                        <ReactPlayer
                            url={data&&data.media_name}
                            controls={true}
                            className="blog-video"
                        />
                    </div>}
                    <ContactForm />
                    {ReactHtmlParser(data && data.long_description)}
                </div>
                <div className="read-more-post">
                    <p>Read more <Link to="/blog">posts</Link></p>
                </div>
                <div className="next-gen">
                    <figure>
                        <img src="../images/banner-logo.png" alt="Next Gen"/>
                    </figure>
                    <h5>The Next Generation of Fantasy Sports</h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogDetailList;