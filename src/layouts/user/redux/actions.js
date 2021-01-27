import type from "./types";
const fetchUsers = (payload) => {
  return {
    type: type.FETCH_USERS,
    payload,
  };
};
const createUser = (payload) => {
  return {
    type: type.CREATE_USER,
    payload,
  };
};
const updateUser = (payload) => {
  return {
    type: type.UPDATE_USER,
    payload,
  };
};
const removeUser = (id) => {
  return {
    type: type.REMOVE_USER,
    id: id,
  };
};

export default {
  fetchUsers,
  createUser,
  updateUser,
  removeUser,
};
