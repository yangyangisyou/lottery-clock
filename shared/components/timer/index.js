import { useCallback, useState, useMemo, useEffect } from "react";
import styled from "@emotion/styled";

const TimerWrapper = styled.div`
  font-size: 40px;
  color: blue;
`;

const Timer = ({
  isCountDownOpen,
  inputMinute,
  setIsCountDownOpen,
  onDrawUser,
}) => {
  const [previewSeconds, setPreviewSeconds] = useState(0);
  const timerCreator = useCallback(
    (resolve) => {
      const interval = setInterval(() => {
        setPreviewSeconds((state) => {
          if (state > 0) {
            return state - 1;
          } else {
            resolve();
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
    },
    [setPreviewSeconds]
  );
  const countdown = useCallback(async () => {
    if (isCountDownOpen) {
      await new Promise(timerCreator);
      onDrawUser();
      setIsCountDownOpen(false);
    }
  }, [isCountDownOpen]);
  useEffect(() => {
    if (isCountDownOpen) {
      setPreviewSeconds(inputMinute * 60);
      countdown();
    }
  }, [isCountDownOpen]);

  const remainMinute = useMemo(
    () =>
      Math.floor(previewSeconds / 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
    [previewSeconds]
  );
  const remainSecond = useMemo(
    () =>
      (previewSeconds % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
    [previewSeconds]
  );
  return (
    <TimerWrapper>
      <span>{remainMinute}</span>:<span>{remainSecond}</span>
    </TimerWrapper>
  );
};

export default Timer;
