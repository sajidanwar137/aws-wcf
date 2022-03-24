import {
    GET_BLOG_REQ,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAILURE,
    BLOG_DETAIL_REQ,
    BLOG_DETAIL_SUCCESS,
    BLOG_DETAIL_FAILURE,
  } from "../Action/actionTypes";
const intiState = {
    //Blog
    blogData: {},
    //Blog Detail
    blogDetailData: {},
  };
  
  const commonReducer = (state = intiState, action) => {
    switch (action.type) {
      //Blog
      case GET_BLOG_REQ:
        return {
          ...state,
        };
      case GET_BLOG_SUCCESS:
        return {
          ...state,
          blogData: action.data,
        };
      case GET_BLOG_FAILURE:
        return {
          ...state,
          errMessage: action.errMessage,
        };
      //Blog Detail  
      case BLOG_DETAIL_REQ:
        return {
          ...state,
        };
      case BLOG_DETAIL_SUCCESS:
        return {
          ...state,
          blogDetailData: action.data,
        };
      case BLOG_DETAIL_FAILURE:
        return {
          ...state,
          errMessage: action.errMessage,
        };  
      default:
        return state;
    }
  };
export default commonReducer;