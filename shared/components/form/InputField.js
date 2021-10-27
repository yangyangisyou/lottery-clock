import { useCallback, useState, useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Timer from "../timer";
import Modal from "../modal";

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

const Input = styled.input`
  border-radius: 10px;
`;

const InputField = ({
  inputMinute,
  isCountDownOpen,
  setInputMinute,
  setIsCountDownOpen,
}) => {
  const onChangeSecond = useCallback(
    (event) => setInputMinute(event.target.value),
    [setInputMinute]
  );
  const onSubmit = useCallback(() => {
    if (inputMinute > 0) {
      setIsCountDownOpen(true);
    }
  }, [inputMinute]);
  const disabledSubmit = useMemo(
    () => isCountDownOpen || inputMinute < 0 || inputMinute % 1 !== 0,
    [inputMinute]
  );
  return (
    <FlexWrapper>
      <Input type="number" value={inputMinute} onChange={onChangeSecond} />
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
  );
};

export default InputField;
