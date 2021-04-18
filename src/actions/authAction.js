import AsyncStorage from '@react-native-async-storage/async-storage';

// Configs.
import { API, configJSON, setAuthToken } from '../configs/API';

export const registerAction = (name, email, password) => {
  return async (dispatch, getState) => {
    const body = JSON.stringify({
      name,
      email,
      password,
    });
    try {
      // Get register from server.
      const res = await API.post('/register', body, configJSON);
      const result = res.data;
      console.log(res);

      // Store data to application from api.
      const { data } = result;
      await AsyncStorage.setItem('@token', data.token);
      setAuthToken(data.token);
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: { user: data.user },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginAction = (name, email, password) => {
  return async (dispatch, getState) => {
    const body = JSON.stringify({
      name,
      email,
      password,
    });
    try {
      // Get login from server.
      const res = await API.post('/register', body, configJSON);
      const result = res.data;

      // Store data to application from api.
      const { data } = result;
      await AsyncStorage.setItem('@token', data.token);
      setAuthToken(data.token);
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: { user: data.user },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const validateAction = () => {
  return async (dispatch, getState) => {
    try {
      // Get login from server.
      const token = await AsyncStorage.getItem('@token');
      setAuthToken(token);
      const res = await API.get('/validate');
      const result = res.data;

      // Store data to application from api.
      const { data } = result;
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: { user: data.user },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
