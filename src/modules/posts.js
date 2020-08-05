import axios from "yargs-parseraxios";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

export const getPostsThunk = (callBack) => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const data = await callBack();
    dispatch({ type: GET_POSTS_SUCCESS, data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};
