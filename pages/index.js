import styled from "@emotion/styled";
import { setTimes } from "../redux/actions/clock";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState, useMemo, useEffect } from "react";
import Form from "../shared/components/form";
import MenuList from "../shared/components/menuList";
import Modal from "../shared/components/modal";

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  & .header {
    font-weight: 500;
    font-size: 24px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const { seconds, userList, drawedMember } = useSelector(
    (store) => store?.clock
  );
  const [currentMinute, setCurrentMinute] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
  const onSettingTimes = useCallback(
    (newSeconds) => {
      dispatch(setTimes(newSeconds));
    },
    [dispatch, setTimes]
  );
  const onCloseModal = useCallback(
    () => setIsOpenModal(false),
    [setIsOpenModal]
  );
  useEffect(() => {
    if (drawedMember?.id > 0) {
      setIsOpenModal(true);
    }
  }, [drawedMember]);
  return (
    <PageWrapper>
      <Form
        currentMinute={currentMinute}
        setCurrentMinute={setCurrentMinute}
        onSettingTimes={onSettingTimes}
        remainMinute={remainMinute}
        remainSecond={remainSecond}
      />
      <MenuList list={userList} />
      <Modal
        user={drawedMember}
        isOpen={isOpenModal}
        onCloseModal={onCloseModal}
      />
    </PageWrapper>
  );
};

export default Home;
