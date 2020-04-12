import styled from 'styled-components';

const ImagesContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

const ItemsContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const ItemContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
`;

const ItemAvatar = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const DotItems = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const DotItem = styled.div`
  width: 11px;
  height: 11px;
  margin: 0 2px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.4s;
  display: inline-block;
  background: rgba(0, 0, 0, 0.26);
  &.active {
    background: #d9291c;
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 15px;
`;

const DescriptionTitle = styled.h3`
  color: #535353;
  font-size: 2.4em;
  font-weight: 550;
  text-align: center;
  margin-bottom: 30px;
`;

const DescriptionSubTitle = styled.div`
  color: #535353;
  font-size: 1.3em;
  line-height: 30px;
`;

const VideoAvatar = styled.img`
  width: 100%;
`;

export const Styled = {
  ImagesContainer,
  ItemsContainer,
  ItemContainer,
  ItemAvatar,
  DotItems,
  DotItem,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionSubTitle,
  VideoAvatar,
};
