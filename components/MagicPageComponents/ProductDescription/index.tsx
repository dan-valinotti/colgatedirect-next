import React, { FunctionComponent, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Styled } from './_styles';
import { DescriptionProps } from './_types';
import { Grid } from '@material-ui/core';

const ProductDescription: FunctionComponent<DescriptionProps> = (props: DescriptionProps) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const onChangeActiveImage = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <Grid container spacing={3} style={{ marginBottom: 40 }} justify="center" alignItems="center">
      <Grid item xs={12}>
        <Styled.DescriptionContainer>
          <Styled.DescriptionTitle>
            {props.description.title}
          </Styled.DescriptionTitle>
          <Styled.DescriptionSubTitle
            dangerouslySetInnerHTML={{__html: props.description.subTitle}} />
        </Styled.DescriptionContainer>
      </Grid>
      <Grid item md={6} xs={12}>
        <Styled.VideoAvatar src={props.description.videoAvatar} alt="video avatar" />
      </Grid>
      <Grid item md={6} xs={12}>
        <Styled.ImagesContainer>
          <Styled.ItemsContainer>
            <SwipeableViews
              style={{ width: 400 }}
              index={activeImageIndex}
              enableMouseEvents
            >
              {props.description.images.map((image, imageIndex) => (
                <Styled.ItemContainer key={imageIndex}>
                  {Math.abs(activeImageIndex - imageIndex) <= 2 ? (
                    <Styled.ItemAvatar src={image} alt="description avatar" />
                  ) : null}
                </Styled.ItemContainer>
              ))}
            </SwipeableViews>
          </Styled.ItemsContainer>
          {props.description.images.length > 1 && (
            <Styled.DotItems>
              {props.description.images.map((image, imageIndex) => (
                <Styled.DotItem
                  key={imageIndex}
                  onClick={() => onChangeActiveImage(imageIndex)}
                  className={activeImageIndex === imageIndex ? 'active': ''}
                />
              ))}
            </Styled.DotItems>
          )}
        </Styled.ImagesContainer>
      </Grid>
    </Grid>
  );
}

export default ProductDescription;
