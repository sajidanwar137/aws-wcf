import axios from "axios";
// import {
//   getBlogReq,
//   getBlogSuccess,
//   getBlogFailure,
//   blogDetailReq,
//   blogDetailSuccess,
//   blogDetailFailure,
// } from "../Action/actions";
const BASE_URL = process.env.REACT_APP_BASE_URL + "/web/api";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
/*SignIN*/
// export const postSignin = (signInData) => {
//   return axiosInstance
//   .post(`/postLogin`,signInData
// )}
/*Blog*/
// export const getBlog = () => {
//   return (dispatch) => {
//     dispatch(getBlogReq());
//     return axiosInstance
//       .get(`/getBlogs`)
//       .then((res) => {
//         const {
//           data: { metadata, data, code },
//         } = res;
//         dispatch(getBlogSuccess({ metadata, data, code }));
//         return Promise.resolve({ metadata, data, code });
//       })
//       .catch((err) => {
//         dispatch(getBlogFailure(err.message));
//         return Promise.reject(err);
//       });
//   };
// };

/*Blog Page*/
export const getBlogs = () => {
  return axiosInstance
  .get(`/getBlogs?timestamp=${new Date().getTime()}`)
}

/*Blog Detail*/
// export const getBlogDetail = (slug) => {
//   return (dispatch) => {
//     dispatch(blogDetailReq());
//     return axiosInstance
//       .get(`/getBlog?slug=${slug}`)
//       .then((res) => {
//         const {
//           data: { metadata, data, code },
//         } = res;
//         dispatch(blogDetailSuccess({ metadata, data, code }));
//         return Promise.resolve({ metadata, data , code});
//       })
//       .catch((err) => {
//         dispatch(blogDetailFailure(err.message));
//         return Promise.reject(err);
//       });
//   };
// };

/*Blog Detail*/
export const getBlogDetail = (slug) => {
  return axiosInstance
  .get(`/getBlog?slug=${slug}&timestamp=${new Date().getTime()}`)
}

/*subscriber*/
export const subscriber = v1 => {
  return axiosInstance
  .post(`/postSubscriber`,v1
)}