import toast from "react-hot-toast";

const initialState = {
  seconds: 0,
  userList: [],
  isLoadingUserList: true,
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
    case "UPDATE_USERS": {
      const { users } = action.payload;
      return {
        ...state,
        userList: users,
        isLoadingUserList: false,
      };
    }
    case "UPDATE_USERS_FAILED": {
      const { error } = action.payload;
      toast.error(error);
      return {
        ...state,
        isLoadingUserList: false,
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
