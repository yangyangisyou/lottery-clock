const initialState = {
  seconds: 0,
  userList: [
    {
      id: 1,
      name: "user1",
      avatar: "/user.png",
    },
    {
      id: 2,
      name: "user2",
      avatar: "/user.png",
    },
    {
      id: 3,
      name: "user3",
      avatar: "/user.png",
    },
    {
      id: 4,
      name: "user4",
      avatar: "/user.png",
    },
    {
      id: 5,
      name: "user5",
      avatar: "/user.png",
    },
    {
      id: 6,
      name: "user6",
      avatar: "/user.png",
    },
    {
      id: 7,
      name: "user7",
      avatar: "/user.png",
    },
    {
      id: 8,
      name: "user8",
      avatar: "/user.png",
    },
    {
      id: 9,
      name: "user9",
      avatar: "/user.png",
    },
  ],
  drawedMember: {
    id: 0,
    name: "default",
    avatar: "/user.png",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const { seconds } = action.payload;
      return {
        ...state,
        seconds: seconds,
      };
    }
    case "DRAW_MEMBER": {
      const { userList } = state;
      const totalMemberLength = userList.length;
      const indexOfMember = Math.floor(Math.random() * totalMemberLength);
      return {
        ...state,
        drawedMember: userList[indexOfMember],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
