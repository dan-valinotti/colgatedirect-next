import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  background-color: #ffffff;
  z-index: 1;
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 1rem;
  background-color: #fafafa;
`;

const Logo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 12.5rem;
  height: 12.5rem;

  &:hover {
    ::before {
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }

  &::before {
    content: '';
    position: absolute;
    background: #d9291c;
    left: 0;
    top: -3rem;
    width: 12.5em;
    height: 12.5em;
    border-radius: 50%;
    z-index: 2;
  }

  img {
    position: absolute;
    width: 120px;
    height: auto;
    left: 1.75rem;
    z-index: 3;
    top: 1.75rem;
  }
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 100%;
  position: relative;
  text-align: center;
  
  * {
    font-family: "Colgate Ready",serif
  }
`;

export const Styled = {
  Container,
  FlexContainer,
  LogoWrapper,
  Logo,
};
