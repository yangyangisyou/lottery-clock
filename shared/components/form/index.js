import styled from "@emotion/styled";
import { css } from "@emotion/css";

const ContentWrapper = styled.div`
  margin: 20px;
  width: 40vw;
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
`;

const InputField = styled.input`
  border-radius: 10px;
`;

const TimerWrapper = styled.div`
  font-size: 40px;
  color: blue;
`;

const Form = ({
  currentMinute,
  setCurrentMinute,
  onSettingTimes,
  remainMinute,
  remainSecond,
}) => {
  return (
    <ContentWrapper>
      <p className="header">抽獎時間</p>
      <FlexWrapper>
        <InputField
          type="text"
          value={currentMinute}
          onChange={(event) => setCurrentMinute(event.target.value)}
        />
        <span
          className={css`
            margin: 10px;
          `}
        >
          分鐘
        </span>
        <SubmitButton onClick={() => onSettingTimes(currentMinute * 60)}>
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
