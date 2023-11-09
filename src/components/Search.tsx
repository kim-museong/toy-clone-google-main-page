import React from "react";
import * as S from "../styled/search.style";
import { MdSearch } from "react-icons/md";

const Search: React.FC = () => {
  return (
    <S.SearchWrapper>
      <S.SearchBox>
        <S.ImgBox>
          <MdSearch />
        </S.ImgBox>

        <S.SearchInput placeholder="검색어를 입력하세요." />

        <S.ImgBox />

        <S.ImgBox />
      </S.SearchBox>
    </S.SearchWrapper>
  );
};

export default Search;
