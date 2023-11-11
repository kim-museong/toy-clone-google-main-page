const { styled } = require("styled-components");

export const SearchWrapper = styled.div`
  height: 100%;
  margin: 0 auto;

  @media (min-width: 672px) {
    width: 561px;
  }
`;

export const SearchBox = styled.div`
  align-items: center;
  margin: 40px auto;
  border: none;
  border-radius: 25px;
  background-color: white;
  overflow: hidden;
`;

export const SearchInputBox = styled.div`
  display: flex;
  height: 44px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  height: inherit;
  padding-inline-start: 45px;
  padding-inline-end: 30px;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const ImgBox = styled.div`
  width: auto;
  position: absolute;
  top: 27%;
  left: 16px;

  color: rgb(95 99 104);
  svg {
    font-size: 22px;
  }
`;

export const ResultBox = styled.ul`
  padding-bottom: 20px;
`;

export const RecentSearchResultItem = styled.li`
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  svg {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
  }

  &:hover {
    background-color: rgb(235, 235, 235);
  }
`;
