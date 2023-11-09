const { styled } = require("styled-components");

export const SearchWrapper = styled.div`
  height: 100%;
  position: relative;

  @media (min-width: 672px) {
    width: 561px;
  }
`;

export const SearchBox = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  margin: 30% auto;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  background-color: white;
`;

export const SearchInput = styled.input`
  border: none;
  height: inherit;
  padding-inline-start: 52px;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const ImgBox = styled.div`
  width: auto;
  position: absolute;
  top: 11px;
  left: 16px;

  color: rgb(95 99 104);
  svg {
    font-size: 22px;
  }
`;
