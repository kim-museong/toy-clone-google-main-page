import React, { useRef, useState } from "react";
import * as S from "../styled/search.style";
import { MdSearch } from "react-icons/md";
import { PiClockCounterClockwiseFill } from "react-icons/pi";

const Search: React.FC = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  // 돋보기 버튼 클릭시 input창 focus 함수
  const onClickSearchInputForcus = () => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  };

  const onFocus = () => {
    setIsFocus((prev) => !prev);
  };

  const onblur = () => {
    if (searchInput.current?.contains) {
      setIsFocus(false);
    }
  };

  console.log(searchInput.current);

  const RecentsearchresultsArray: string[] = [
    "안녕",
    "구글",
    "네이버",
    "다음",
    "카카오",
    "메이플스토리",
    "한라산",
    "겨울 너무 추운데 옷을 어떻게 입어야하나요?",
  ];

  return (
    <S.SearchWrapper>
      <S.SearchBox>
        <S.SearchInputBox>
          <S.ImgBox>
            <MdSearch onClick={onClickSearchInputForcus} />
          </S.ImgBox>

          <S.SearchInput
            ref={searchInput}
            type="text"
            placeholder="검색어를 입력하세요."
            onFocus={onFocus}
            onBlur={onblur}
          />

          <S.ImgBox />

          <S.ImgBox />
        </S.SearchInputBox>

        {isFocus && (
          <S.ResultBox>
            {RecentsearchresultsArray.map((result, index) => (
              <S.RecentSearchResultItem key={index}>
                <PiClockCounterClockwiseFill />
                {result}
              </S.RecentSearchResultItem>
            ))}
          </S.ResultBox>
        )}
      </S.SearchBox>
    </S.SearchWrapper>
  );
};

export default Search;
