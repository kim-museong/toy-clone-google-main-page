import React from "react";
import Search from "./components/Search";
import "./App.css";
import * as S from "./styled/app.style";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Shortcuts from "./components/Shortcuts";

const App: React.FC = () => {
  return (
    <S.Wrapper>
      <Menu />
      <Logo />
      <Search />
      <Shortcuts />
    </S.Wrapper>
  );
};

export default App;
