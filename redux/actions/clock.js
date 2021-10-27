export const setTimes = (seconds) => {
  return {
    type: "SET_TIMES",
    payload: {
      seconds,
    },
  };
};

export const updateTimes = (seconds) => {
  return {
    type: "UPDATE_TIMES",
    payload: {
      seconds,
    },
  };
};

export const loadUsers = () => {
  return {
    type: "LOAD_USERS",
  };
};

export const updateUsers = (users) => {
  return {
    type: "UPDATE_USERS",
    payload: {
      users,
    },
  };
};

export const updateUsersFailed = (error) => {
  return {
    type: "UPDATE_USERS_FAILED",
    payload: {
      error,
    },
  };
};

export const drawMember = () => {
  return {
    type: "DRAW_MEMBER",
  };
};
