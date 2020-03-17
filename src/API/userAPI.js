import axios from "axios";

const attachToken = () => {
  axios.defaults.headers.common["Authorization"] = localStorage.token
    ? `Token ${localStorage.token}`
    : null;
};

const URL = "http://localhost:3001";

export const loginUser = async (email, password) => {
  try {
    const data = await axios.post(`${URL}/login`, {
      email,
      password
    });

    localStorage.setItem("token", data.data.user.token);
    localStorage.setItem("user_id", data.data.user.id);
  } catch (err) {
    console.log(err);

    throw new Error();
  }
};

export const fetchUser = async id => {
  try {
    attachToken();
    const user = await axios.get("http://localhost:3001/fetchUser", {
      params: {
        id
      }
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (id, userData) => {
  attachToken();
  try {
    await axios.put(`${URL}/updateUser`, { id, userData });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async id => {
  attachToken();
  try {
    await axios.delete("http://localhost:3001/deleteUser", {
      params: {
        id
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (email, password) => {
  try {
    const data = await axios.post(`${URL}/createUser`, { email, password });

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("user_id", data.data.id);

    return data;
  } catch (err) {
    console.log(err);

    throw new Error();
  }
};

export const getUserCount = async () => {
  try {
    const userCount = await axios.get("http://localhost:3001/getUserCount");

    return userCount;
  } catch (err) {
    console.log(err);
  }
};
