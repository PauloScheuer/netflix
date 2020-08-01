import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #141414;
  color: var(--white);
  flex: 1;
  padding-top: 58px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function PageDefault(props: any) {
  return (
    <>
      <Menu />
      <Main style={props.hasPadding && { padding: 0 }}>{props.children}</Main>
      <Footer />
    </>
  );
}
