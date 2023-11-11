import React from "react";
import * as S from "../styled/menu.style";
import { IoApps } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

const Menu: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ListItemBox>
        <S.ItemBox>
          <S.Text>Gmail</S.Text>

          <S.Text>이미지</S.Text>
        </S.ItemBox>

        <S.ItemBox>
          <S.Img>
            <IoApps />
          </S.Img>
        </S.ItemBox>

        <S.ItemBox>
          <S.Img>
            <FaUser />
          </S.Img>
        </S.ItemBox>
      </S.ListItemBox>
    </S.Wrapper>
  );
};

export default Menu;
