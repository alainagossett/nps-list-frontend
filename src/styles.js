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
  .stateSel {
  height: 25px;
  width: 200px;
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

  @media screen and (max-width: 375px) {
        width: 50%;
        .stateSel {
            width: fit-content;
        }
        .parks {
            font-size: 0.8rem;
            text-align: center;
        }
    }
    @media screen and (max-width: 414px) {
        width: 50%;
        .stateSel {
            width: fit-content;
        }
        .parks {
            font-size: 0.8rem;
            text-align: center;
        }
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
        opacity: 0.95;
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

export const StyledPlaceDisplay = styled.div`
    display: flex;
    margin: 20px;
    .title {
        text-align: center;
        color: #111;
        padding: 1em;
        text-shadow: 2px 2px 3px #fff;
    }
    .backbtn {
        font-size: 16pt;
        text-decoration: none;
        color: #333f1a;
    }
    .placesResults {
        background-color: #fff;
        opacity: 0.85;
        border-radius: 20px;
        position: relative;
        margin: 20px;
        padding: 3.5rem;
        text-align: center;
        font-weight: bold;
        box-shadow: 1px 1px 10px 2px #000;
        a {
            text-decoration: none;
            color: #3f4e20;
        }
    }
    .placeDetails {
        border: 1px dashed black;
        margin: 2rem;
        padding: 2rem;
        /* border-radius: 20px; */
    }
    .placeImg {
            height: 65%;
            width: 65%;
            padding: 10px;
        }
`;

export const StyledFavoritesIndex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin: 20px auto;
    width: 100%;
    h2 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
        padding: 1em;
    }
    .favoriteList {
       background-color: #fff;
       padding: 2rem;
       margin: 2rem;
       box-shadow: 1px 1px 10px 2px #000;
       max-width: 300px;
    }
    .favoritesNotes {
        text-decoration: none;
        color: #3f4e20;
        font-weight: bold;
        &:hover {
            text-decoration: underline wavy #3f4e20;
            cursor: pointer;
        }
    }
`;

export const StyledFavoritePark = styled.div`
    background-color: white;
    margin: 2rem;
    padding: 2rem;
    width: 50%;
    box-shadow: 1px 1px 10px 2px #000;
    p {
        margin: 2rem;
    }
    form {
        text-align: center;
    }
    input.notes {
        width: 100%;
    }
    input.submitbtn {
        margin: 1rem;
        color: white;
        background-color: #3f4e20;
        width: fit-content;
        height: 40px;
        border-radius: 15px;
        &:hover {
            color: #3f4e20;
            background-color: white;
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
  position: fixed;
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
