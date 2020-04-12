import React, { FunctionComponent, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Styled } from './_styles';
import { OtherProductProps } from './_types';
import { Grid } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const OtherProducts: FunctionComponent<OtherProductProps> = (props: OtherProductProps) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const onChangeActiveImage = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <Grid container spacing={3} style={{ marginBottom: 40 }}>
      <Grid item xs={12}>
        <Styled.MainTitle
          href={props.product.productUri}
          dangerouslySetInnerHTML={{ __html: props.product.title }} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Styled.ImagesContainer>
          <Styled.ItemsContainer>
            <AutoPlaySwipeableViews
              style={{ width: 350 }}
              index={activeImageIndex}
              enableMouseEvents
            >
              {props.product.images.map((image, imageIndex) => (
                <Styled.ItemContainer key={imageIndex}>
                  {Math.abs(activeImageIndex - imageIndex) <= 2 ? (
                    <Styled.ItemAvatar src={image} alt="product image" />
                  ) : null}
                </Styled.ItemContainer>
              ))}
            </AutoPlaySwipeableViews>
          </Styled.ItemsContainer>
          {props.product.images.length > 1 && (
            <Styled.DotItems>
              {props.product.images.map((image, imageIndex) => (
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
      <Grid item md={6} xs={12}>
        <Styled.ProductDescriptionItems>
          {props.product.items.map((item, itemIndex) => (
            <Styled.ProductDescriptionItem
              key={itemIndex}
              dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </Styled.ProductDescriptionItems>
        {props.product.price && (
          <Styled.ProductPriceContainer>
            <Styled.ProductPrice>
              ${props.product.price}
            </Styled.ProductPrice>
            <Styled.AddToCardButton
              variant="outlined"
            >
              Add to cart
            </Styled.AddToCardButton>
          </Styled.ProductPriceContainer>
        )}
      </Grid>
    </Grid>
  );
}

export default OtherProducts;
