import styled from 'styled-components';
import { Grid, Link } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';


const Container = styled.div`
`;
const ContainerSec1 = styled.div`
  margin-top: 150px !important;
`;
const ContainerSec2 = styled.div`
  margin-top: 150px !important;
  max-width:700px;
  margin: auto;
`;
const GridItemDiv = styled.div`
  text-align: center;
  display: block;
`;
const GridItemText = styled.div`
  font-size: .7rem;
  margin: 0;
  text-align: center;
`;
const ContainerSec3 = styled.div`
  background: #d2d6df;
  width: 100%;
  margin-top: 50px;
`;
const KitImage = styled.div`
  display: flex;
  width: 100%;
  background-color: #dddddf;
  margin-bottom: 90px;
`;
const IndigoIcons = styled.div`
  margin: 0 auto !important;
  width: 90%;
  max-width: 900px;
  align-items: center;
  justify-content: space-around;
  display: flex !important;
  letter-spacing: -0.01em;
  color: #fff;
`;
const IndigoIconsItem1 = styled.div`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 1s ease-out;
  animation-delay: 5s;
  animation-fill-mode: backwards;
  background: transparent;
`;
const IndigoIconsItem1Img = styled.img`
  width: auto;
  height: 60px;
  margin-bottom: 10px;
`;
const IndigoIconsItem1Text = styled.div`
  text-align: center;
`;
const IndigoIconsItem2 = styled.div`
`;
const IndigoIconsItem3 = styled.div`
`;
const ShineImage = styled.div`
  margin-top: 80px;
  margin-bottom: 95px;
`;
const Sec1Grid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`;
const Sec1Link = styled(Link)`
  text-align: center;
`;

const Sec3Grid = styled(Grid)`
  display: block;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 30px;
  width: 85%;
  text-align: center;
`;
const Sec3Img = styled.img`
  height: 90px;
  width: auto;
  padding-top: 20px;
`;
const Img = styled.img`
  width: 50%;
`;
const KitImageStyle = styled.img`
  height: 500px;
  width: auto;
  margin: auto;
  margin-bottom: 0 !important;
`;
const ShineImageStyle = styled.img`
  display: flex;
  width: 100%;
`;
const ContainerSocial = styled.div`
  background-color: #C83B2A;
  margin-top: -100px;
  color: #fff;
`;
const SocialImage = styled.img`
  width: 100%;
  height: 400px;
  padding: 10px;
  -webkit-user-drag: none;
`;
const LabelGridItem = styled(Grid)`
  &&& {
    padding: 10px;
    text-align: center;
  }
`;
const LabelAvatar = styled.img`
  max-height: 65px;
  margin-bottom: 10px;
`;
const LabelText = styled.div`
  font-size: 1.1em;
  font-weight: 700;
  color: #535353;
`;
const Reviews = styled.div`
  max-width: 1315px;
  width: 70%;
  margin: auto;
  padding-top: 1.5em;
`;
const ReviewsTitle = styled.h2`
  font-size: 2em;
  line-height: 120%;
  font-weight: 700;
  text-align: center;
  padding-left: 5px;
  color: #535353;
`;
const StarTitle = styled.div`
  display: flex;
`;
const ReviewsContainer = styled.div`
  padding-top: 200px;
`;
const ReviewGridContainer = styled(Grid)`
  &&& {
    padding: 30px 0;
    &:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }
  }
`;
const ReviewTitle = styled.div`
  color: #535353;
  font-size: 1.3em;
  font-weight: 500;
  margin-bottom: 5px;
`;
const ReviewContent = styled.div`
  color: #535353;
  font-size: 1.1em;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const ReviewMedia = styled.div`
  color: #535353;
  margin-bottom: 5px;
`;
const ReviewMediaItemContainer = styled.div`
  width: 100px;
  float: left;
  height: 100px;
  overflow: hidden;
  margin-right: 10px;
`;
const ReviewMediaItem = styled.img`
  max-width: 100%;
`;
const RevieweDetailsItem = styled.div`
  color: #535353;
  padding: 0 20px;
  margin-bottom: 5px;
`;
const ItemWithIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;
const WriteaReview = styled.div`
  margin-top: 100px;
  color: #0b7bc1;
  text-align: center;
  font-size: 1.5em;
`;
const ImageGridView = styled.div`
`;
const ReviwedCustomer = styled.div`
  margin-top: 30px;
  text-align: left;
  background-color: #f6f6f6;
  padding: 15px;
  width: 100%;
`;
const ReviewRank = styled.div`
  text-align: right;
  padding: 15px 0;
  width: 100%;
`;
export const Styled = {
  Container,
  ContainerSec1,
  ContainerSec2,
  ContainerSec3,
  KitImage,
  ShineImage,
  Sec1Grid,
  Sec3Grid,
  Sec3Img,
  Sec1Link,
  Img,
  KitImageStyle,
  ShineImageStyle,
  IndigoIcons,
  ContainerSocial,
  SocialImage,
  GridItemDiv,
  GridItemText,
  LabelGridItem,
  LabelAvatar,
  LabelText,
  ReviewsContainer,
  ReviewGridContainer,
  ReviewTitle,
  ReviewContent,
  ReviewMedia,
  ReviewMediaItemContainer,
  ReviewMediaItem,
  RevieweDetailsItem,
  ItemWithIcon,
  Reviews,
  ReviewsTitle,
  StarTitle,
  WriteaReview,
  ImageGridView,
  ReviwedCustomer,
  ReviewRank,
};
