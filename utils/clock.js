import { eventChannel, END } from "redux-saga";

export const countdown = (secs) =>
  eventChannel((emit) => {
    const counter = setInterval(() => {
      setTimeout(() => {
        secs -= 1;
        emit(secs >= 0 ? secs : END);
      }, 1000);
    }, 1000);

    return () => clearInterval(counter);
  });
