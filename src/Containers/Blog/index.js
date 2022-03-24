import React,{useEffect,useState} from "react";
// import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import BlogBanner from "../../component/BlogBanner";
import BlogList from "../../component/BlogList";
import BlogSubscriber from "../../component/BlogSubscriber";
import { getBlogs } from "../../utility/apiService";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    getBlogs()
    .then((res) => {
      setBlogData(res.data)
    })
    .catch((error) => {
        console.error(error);
    })
  }, [])
  return (
    <>
      <Helmet>
        <title>World Champion Fantasy : Blog Page</title>
        <meta name="description" content="Blog Page description"/>
        <meta name="keywords" content="Blog Page keywords" />
      </Helmet>
      {blogData&&blogData.code === 200 ? null :
      <div className="loader" style={{backgroundImage: `url('../images/logo.png')`}}></div>}
      <BlogBanner />
      <BlogList blogData={blogData}/>
      <BlogSubscriber />
    </>
  );
};
export default Blog;
