import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 450px;
  width: 100%;
  margin-bottom: 15px;
  background-image: url(${(props) => props.imageUrl});
  background-size: 170%;
  background-position-x: 30%;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-color: ${(props) => props.bgColor};
  position: relative;
    
  @media (min-width: 768px) {
    align-items: center;
    background-size: contain;
    background-position-x: ${(props) => (props.textalign === 'left' ? 'right' : 'left')};
  }
  
  @media (min-width: 1024px) {
    min-height: 650px;
    background-position-y: 50%;
  }
`;

export const Styled = {
  Container,
};
