import styled from "@emotion/styled";

const MenuWrapper = styled.div`
  margin: 20px;
  width: 40vw;
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
  @media (max-width: 576px) {
    margin: 20px auto;
  }
`;

const CardWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  img {
    width: 25px;
    & + p {
      margin-left: 10px;
    }
  }
`;

const MenuList = ({ list }) => {
  return (
    <MenuWrapper>
      <p className="header">參與者抽獎名單</p>
      <ListWrapper>
        {list.map(({ name, id, avatar }) => (
          <CardWrapper key={id}>
            <img src={avatar} alt="avatar" />
            <p>{name}</p>
          </CardWrapper>
        ))}
      </ListWrapper>
    </MenuWrapper>
  );
};

export default MenuList;
