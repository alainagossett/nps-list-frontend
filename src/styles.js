import styled from 'styled-components';

// export const StyledLayout = styled.div`
//     display: flex;
//     min-height: 100vh;
// `;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1 rem;
  color: #fff;
  background-color: #3f4e20;
  box-shadow: 1px 1px 7px 5px #808080;
  font-size: 14pt;
  div {
    color: #fff;
    display: flex;
    padding: 10px;
    &:hover {
      text-decoration: underline overline wavy white;
      cursor: pointer;
    }
  }
  .userImg {
    height: 3.15rem;
    width: 3.15rem;
    border-radius: 50%;
  }
  .userLogin {
    align-items: center;
  }
`;

export const StyledFooter = styled.footer`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
