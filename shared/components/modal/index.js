import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  background-color: black;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
  transition: all 0.3s;
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
`;

const ModalCardWrapper = styled.div`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: white;
  border: 1px black solid;
  border-radius: 20px;
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
  .modal-close {
    color: #aaa;
    line-height: 50px;
    font-size: 16px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 70px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 20px;
  }
`;

const Modal = ({ user, isOpen, onCloseModal }) => {
  if (!isOpen) {
    return <></>;
  }

  const { avatar, name } = user;
  return (
    <ModalWrapper>
      <ModalCardWrapper>
        <p className="modal-close" onClick={onCloseModal}>
          關閉
        </p>
        <h1>抽獎結果</h1>
        <ContentWrapper>
          <img src={avatar} />
          <p>{name}</p>
        </ContentWrapper>
      </ModalCardWrapper>
    </ModalWrapper>
  );
};

export default Modal;
