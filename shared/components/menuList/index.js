import { useEffect, useMemo } from "react";
import styled from "@emotion/styled";

const MenuWrapper = styled.div`
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

const ListWrapper = styled.ul`
  margin: 20px;
  width: 200px;
  border: solid black 1px;
  border-radius: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 200px;
  padding: 10px;
  @media (max-width: 576px) {
    margin: 20px auto;
  }
`;

const CardWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;
  .avatar {
    width: 25px;
    .name {
      margin-left: 10px;
    }
  }
`;

const MenuList = ({ list, onLoadUsers, isLoadingUserList }) => {
  useEffect(() => {
    onLoadUsers();
  }, []);

  const List = useMemo(() => {
    if (isLoadingUserList) {
      return <>loading</>;
    } else {
      return (
        <>
          {list.length > 0 &&
            list.map(({ name, id }) => (
              <CardWrapper key={id}>
                <img className="avatar" src="/user.png" alt="avatar" />
                <p className="name">{name}</p>
              </CardWrapper>
            ))}
        </>
      );
    }
  }, [isLoadingUserList, list]);

  return (
    <MenuWrapper>
      <p className="header">參與者抽獎名單</p>
      <ListWrapper>{List}</ListWrapper>
    </MenuWrapper>
  );
};

export default MenuList;
