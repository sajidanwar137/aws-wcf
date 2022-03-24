import React,{useEffect,useState} from "react";
// import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import BlogDetailList from "../../component/BlogDetailList";
import BlogSubscriber from "../../component/BlogSubscriber";
import { getBlogDetail } from "../../utility/apiService";

const BlogDetal = () => {
  const location = useLocation() 
  // useEffect(() => {
  //   let slug = location && location.pathname && location.pathname.split('/')[2]
  //   props.getBlogDetail(slug);
  // }, []);
  // const { blogDetailData } = props;

  const [blogDetailData, setBlogDetailData] = useState([]);
  useEffect(() => {
   let slug = location && location.pathname && location.pathname.split('/')[2]
   getBlogDetail(slug)
    .then((res) => {
      setBlogDetailData(res.data)
    })
    .catch((error) => {
        console.error(error);
    })
  }, [location])
  return (
    <>
      {blogDetailData&&blogDetailData.code === 200 ? null :
      <div className="loader" style={{backgroundImage: `url('../images/logo.png')`}}></div>}
      <BlogDetailList blogDetailData={blogDetailData}/>
      <BlogSubscriber />
    </>
  );
};

// const mapStateToProps = (state) => ({
//   blogDetailData: state.commonReducer.blogDetailData,
// });
// const mapDispatchToProps = { getBlogDetail };
// export default connect(mapStateToProps, mapDispatchToProps)(BlogDetal);
export default BlogDetal;