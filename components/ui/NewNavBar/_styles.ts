import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 4rem;
  background-color: #ffffff;
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 100%;
  text-align: center;
  
  * {
    font-family: "Colgate Ready",serif
  }
`;

export const Styled = {
  Container,
  FlexContainer,
  LogoWrapper,
};
