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

export const drawMember = () => {
  return {
    type: "DRAW_MEMBER",
  };
};
