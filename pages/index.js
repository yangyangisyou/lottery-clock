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

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const { userList, seconds, drawedMember } = useSelector(
    (store) => store.clock
  );

  const onSettingTimes = useCallback(
    (newSeconds) => {
      dispatch(setTimes(newSeconds));
    },
    [dispatch, setTimes]
  );

  const Menu = useMemo(() => {
    return <MenuList list={userList} />;
  }, [userList]);

  return (
    <PageWrapper>
      <Form seconds={seconds} onSettingTimes={onSettingTimes} />
      {Menu}
      <Modal seconds={seconds} drawedMember={drawedMember} />
    </PageWrapper>
  );
};

export default Home;
