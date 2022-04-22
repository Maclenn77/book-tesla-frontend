const API_URL = 'http://127.0.0.1:8000';
const LOGIN = 'book-tesla/Auth/LOGIN';
const LOGOUT = 'book-tesla/Auth/LOGOUT';
const REGISTER = 'book-tesla/Auth/REGISTER';

const initialState = false;

export const loginMethod = (payload) => ({
  type: LOGIN,
  payload,
});
const postLogin = async (email) => {
  const response = await fetch(`${API_URL}/users/sign_in?email=${email}`);
  const data = await response.json();
  return data;
};

export const doLogin = (obj) => async (dispatch) => {
  postLogin(obj).then((res) => {
    if (res.message === 'You are logged in.') {
      dispatch(loginMethod(res.user_id));
      localStorage.setItem('user_id', res.user_id);
      window.location.reload();
    }
  });
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default AuthReducer;
