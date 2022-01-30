import styled from 'styled-components';

export const StyledApp = styled.div`
  justify-content: center;
  text-align: center;
  background-color: #101010;
  opacity: 0.75;
  margin: 8rem;
  padding: 3rem;
  border-radius: 25% 10%;
  box-shadow: 1px 1px 10px 2px #bbb;
  .parks {
    list-style-type: none;
    font-size: 18pt;
    font-weight: bold;
  }

  .parks a {
    text-decoration: none;
    color: #fff;
    &:hover {
      text-decoration: underline wavy white;
      cursor: pointer;
    }
  }

  h1 {
      color: #fff;
  }
`;

export const StyledParkDisplay = styled.div`
    display: flex;
    margin: 20px;
    .parkName {
        text-align: center;
        color: #111;
        padding: 1em;
        text-shadow: 2px 2px 3px #fff;
    }
    div {
        background-color: #fff;
        opacity: 0.85;
        border-radius: 50px;
        position: relative;
        margin: 20px;
        padding: 3.5rem;
        text-align: center;
        font-weight: bold;
        box-shadow: 1px 1px 10px 2px #000;
        img {
            height: 65%;
            width: 65%;
            padding: 10px
        }
        .exploreLink {
            color: #3f4e20;
            text-decoration: none;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            &:hover {
                text-decoration: underline wavy #3f4e20;
            }
        }
    }
`;

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
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  color: #fff;
  background-color: #808080;
  box-shadow: 1px 1px 7px 5px #555555;
  img {
    height: 2rem;
    padding-right: 10px;
  }
`;
