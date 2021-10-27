import styled from "@emotion/styled";
import { setTimes, loadUsers, drawMember } from "../redux/actions/clock";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
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
  const { userList, drawedMember, isLoadingUserList } = useSelector(
    (store) => store.clock
  );

  const onDrawUser = useCallback(() => {
    dispatch(drawMember());
  }, [dispatch, drawMember]);

  const onLoadUsers = useCallback(() => {
    dispatch(loadUsers());
  }, [dispatch, loadUsers]);

  const Menu = useMemo(() => {
    return (
      <MenuList
        list={userList}
        onLoadUsers={onLoadUsers}
        isLoadingUserList={isLoadingUserList}
      />
    );
  }, [userList]);

  return (
    <PageWrapper>
      <Form drawedMember={drawedMember} onDrawUser={onDrawUser} />
      {Menu}
    </PageWrapper>
  );
};

export default Home;
