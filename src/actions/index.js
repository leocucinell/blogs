import _ from "lodash"
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    //ran through thunk, allowing async/await dispatch
    return async (dispatch) => {
        const response = await jsonPlaceholder.get("/posts");
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        });
    };
};

export const fetchUser = uid => dispatch => _fetchUser(uid, dispatch);
const _fetchUser = _.memoize( async(uid, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${uid}`);
    dispatch({
        type: "FETCH_USER",
        payload: response.data
    });
})
// export const fetchUser = (uid) => {
//     return async (dispatch) => {
//         const response = await JsonPlaceholder.get(`/users/${uid}`);
//         dispatch({
//             type: "FETCH_USER",
//             payload: response.data
//         });
//     };
// };