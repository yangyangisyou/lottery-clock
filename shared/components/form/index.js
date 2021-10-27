import { useCallback, useState, useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const ContentWrapper = styled.div`
  margin: 20px;
  width: 40vw;
  .header {
    font-weight: 500;
    font-size: 24px;
  }
  @media (max-width: 576px) {
    width: 80vw;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &[disabled] {
    background-color: gray;
  }
`;

const InputField = styled.input`
  border-radius: 10px;
`;

const TimerWrapper = styled.div`
  font-size: 40px;
  color: blue;
`;

const Form = ({ seconds, onSettingTimes }) => {
  const [currentMinute, setCurrentMinute] = useState(0);
  const onChangeSecond = useCallback(
    (event) => setCurrentMinute(event.target.value),
    [setCurrentMinute]
  );
  const onSubmit = useCallback(() => {
    if (currentMinute > 0) {
      onSettingTimes(currentMinute * 60);
    }
  }, [currentMinute]);
  const remainMinute = useMemo(
    () =>
      Math.floor(seconds / 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
    [seconds]
  );
  const remainSecond = useMemo(
    () =>
      (seconds % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }),
    [seconds]
  );
  const disabledSubmit = useMemo(
    () => currentMinute < 0 || currentMinute % 1 !== 0,
    [currentMinute]
  );
  return (
    <ContentWrapper>
      <p className="header">抽獎時間</p>
      <FlexWrapper>
        <InputField
          type="number"
          value={currentMinute}
          onChange={onChangeSecond}
        />
        <span
          className={css`
            margin: 10px;
          `}
        >
          分鐘
        </span>
        <SubmitButton onClick={onSubmit} disabled={disabledSubmit}>
          設定
        </SubmitButton>
      </FlexWrapper>
      <TimerWrapper>
        <span>{remainMinute}</span>:<span>{remainSecond}</span>
      </TimerWrapper>
    </ContentWrapper>
  );
};

export default Form;
