import {
  GET_BLOG_REQ,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILURE,
  BLOG_DETAIL_REQ,
  BLOG_DETAIL_SUCCESS,
  BLOG_DETAIL_FAILURE
} from "../Action/actionTypes";
//Blog
export const getBlogReq = () => ({
  type: GET_BLOG_REQ,
});
export const getBlogSuccess = (data) => ({
  type: GET_BLOG_SUCCESS,
  data,
});
export const getBlogFailure = (errMessage) => ({
  type: GET_BLOG_FAILURE,
  errMessage,
});
//Blog Detail
export const blogDetailReq = () => ({
  type: BLOG_DETAIL_REQ,
});
export const blogDetailSuccess = (data) => ({
  type: BLOG_DETAIL_SUCCESS,
  data,
});
export const blogDetailFailure = (errMessage) => ({
  type: BLOG_DETAIL_FAILURE,
  errMessage,
});