const initState = {
  isLogin: false,
  user: null,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SUCCESS':
      return {
        isLogin: true,
        user: payload.user,
      };
    case 'LOGOUT':
      return {
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
