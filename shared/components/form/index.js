import { useCallback, useState, useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Timer from "../timer";
import Modal from "../modal";
import InputField from "./InputField";

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

const Form = ({ drawedMember, onDrawUser }) => {
  const [inputMinute, setInputMinute] = useState(0);
  const [isCountDownOpen, setIsCountDownOpen] = useState(false);
  return (
    <ContentWrapper>
      <p className="header">抽獎時間</p>
      <InputField
        inputMinute={inputMinute}
        isCountDownOpen={isCountDownOpen}
        setInputMinute={setInputMinute}
        setIsCountDownOpen={setIsCountDownOpen}
      />
      <Timer
        inputMinute={inputMinute}
        isCountDownOpen={isCountDownOpen}
        setIsCountDownOpen={setIsCountDownOpen}
        onDrawUser={onDrawUser}
      />
      <Modal drawedMember={drawedMember} />
    </ContentWrapper>
  );
};

export default Form;
