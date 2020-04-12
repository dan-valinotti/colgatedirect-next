import React, {FunctionComponent} from 'react';
import {Styled} from './_styles';
import {TransformedProduct} from '../../PDPComponent/_types';
import HeroBanner from '../../sections/HeroBanner';
import product from './data.json';
import { Grid } from '@material-ui/core';
import { WhiteningPageProps } from './_types';
import StarRatings from 'react-star-ratings';

import { CheckCircleOutline } from '@material-ui/icons';
import ColgateDescription from '../../WhiteningPageComponents/ColgateDescription';
import MultiCarosel from '../../WhiteningPageComponents/MultiCarosel';
import ImageGallery from 'react-image-gallery';
import PageContainer, { PageSize } from '~views/layouts/PageContainer';
import reviews from './reviews.json';

const WhiteningPage: FunctionComponent<WhiteningPageProps> = (props: WhiteningPageProps) => {
  return(
    <Styled.Container>
      <HeroBanner
        title={product.heroBannerDetails.heroBannerTitle}
        subtitle={product.heroBannerDetails.heroBannerSubTitle}
        bgColor="#d2d6df"
        bgUrl={product.heroBannerDetails.heroBannerImgSrc}
        fontColor="#FF0000"
        textAlign="left"
        shopNow={true}/>
      <Styled.ContainerSec1>
        <Grid container spacing={2} alignItems='center'>
         {product.advlinks.map(({ src, link }, key) => (
         <Styled.Sec1Grid item xs={12} sm={6} md={4} lg={4}>
           <Styled.Sec1Link href={link}>
             <Styled.Img item src={src}></Styled.Img>
           </Styled.Sec1Link>
         </Styled.Sec1Grid>))}
        </Grid>
      </Styled.ContainerSec1>
      <Styled.ContainerSec2>
        <ImageGallery items={product.imageGallaryURLs} />
      </Styled.ContainerSec2>
      <Styled.ContainerSec3>
       <Grid container spacing={2}>
         {product.gridItemData.map(({src,title},key) => (
           <Styled.Sec3Grid item xs={12} sm={6} md={4} lg={3}>
             {/* <div> */}
            <Styled.GridItemDiv>
             <Styled.Sec3Img item src={src}></Styled.Sec3Img>
             <Styled.GridItemText>{title}</Styled.GridItemText>
            </Styled.GridItemDiv>
             {/* <span>{title}</span>
             </div> */}
           </Styled.Sec3Grid>
         ))}
       </Grid>
     </Styled.ContainerSec3>
     <PageContainer size={PageSize.large}>
       {process.browser && (
         <ColgateDescription details={product.details}/>
       )}
     </PageContainer> 
     <Styled.KitImage>
       <Styled.KitImageStyle src={product.whatKitUR}></Styled.KitImageStyle>
     </Styled.KitImage>
     <Styled.IndigoIcons>
      <Grid item container xs={12} style={{ paddingTop: 30 }}>
        {product.subDetails.labels.map((label, labelIndex) => (
          <Styled.LabelGridItem item xs={4} key={labelIndex}>
            <Styled.LabelAvatar src={label.avatar} alt={label.title} />
            <Styled.LabelText>{label.title}</Styled.LabelText>
          </Styled.LabelGridItem>          ))}
        </Grid>
     </Styled.IndigoIcons>
     <Styled.ShineImage>
       <Styled.ShineImageStyle src={product.shineWithURL}></Styled.ShineImageStyle>
     </Styled.ShineImage>
     <MultiCarosel carouselImg={product.carouselImg}/>
     <Styled.Reviews>
       <Styled.ReviewsTitle>Reviews</Styled.ReviewsTitle>
       <Styled.WriteaReview>
         <a href="#">Write a Review</a>
       </Styled.WriteaReview>
       <Styled.ImageGridView>
       </Styled.ImageGridView>
       <Styled.ReviewRank>
       </Styled.ReviewRank>
      <Styled.ReviewsContainer>
        {reviews.map((review, reviewIndex) => (
          <Styled.ReviewGridContainer item container key={reviewIndex}>
            <Grid item xs={8}>
              <Styled.StarTitle>
              <StarRatings editable={false} rating={review.metrics.rating} starRatedColor="#d9291c" starDimension='20px' starSpacing='3px'/>
              <Styled.ReviewTitle>
                {review.details.headline}
              </Styled.ReviewTitle>
              </Styled.StarTitle>
              <Styled.ReviewContent>
                {review.details.comments}
              </Styled.ReviewContent>
              <Styled.ReviewMedia>
                {(review.media || []).map((item, itemIndex) => (
                  <Styled.ReviewMediaItemContainer key={itemIndex}>
                    <Styled.ReviewMediaItem src={item.uri} />
                  </Styled.ReviewMediaItemContainer>
                ))}
              </Styled.ReviewMedia>
            </Grid>
            <Grid item xs={4}>
              <Styled.RevieweDetailsItem>
                <b>Submitted</b> 5 months ago
              </Styled.RevieweDetailsItem>
              <Styled.RevieweDetailsItem>
                <b>By</b> {review.details.nickname}
              </Styled.RevieweDetailsItem>
              <Styled.RevieweDetailsItem>
                <b>From</b> {review.details.location}
              </Styled.RevieweDetailsItem>
              {review.badges.is_verified_reviewer && (
                <Styled.RevieweDetailsItem>
                  <Styled.ItemWithIcon>
                    <CheckCircleOutline style={{ color: '#88D633' }} /> Verified Reviewer
                  </Styled.ItemWithIcon>
                </Styled.RevieweDetailsItem>
              )}
            </Grid>
          </Styled.ReviewGridContainer>
        ))}
        </Styled.ReviewsContainer>
      </Styled.Reviews>
    </Styled.Container>
  );
};
export default WhiteningPage;