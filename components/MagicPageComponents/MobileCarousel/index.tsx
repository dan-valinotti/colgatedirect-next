import React, { FunctionComponent, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Styled } from './_styles';
import { MobileCarouselProps } from './_types';
import { Grid } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MagicMobileCarousel: FunctionComponent<MobileCarouselProps> = (props: MobileCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeItem, setActiveItem] = React.useState(null);

  useEffect(() => {
    setActiveItem(props.items[activeIndex]);
  }, [activeIndex]);

  const onChangeActiveItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Styled.CarouselItemsContainer>
          <Styled.MaskContainer>
            <Styled.ItemsContainer>
              <AutoPlaySwipeableViews
                index={activeIndex}
                onChangeIndex={onChangeActiveItem}
                enableMouseEvents
              >
                {props.items.map((item, itemIndex) => (
                  <Styled.ItemContainer key={itemIndex}>
                    {Math.abs(activeIndex - itemIndex) <= 2 ? (
                      <Styled.ItemAvatar src={item.avatar} alt={item.title} />
                    ) : null}
                  </Styled.ItemContainer>
                ))}
              </AutoPlaySwipeableViews>
            </Styled.ItemsContainer>
          </Styled.MaskContainer>
          <Styled.DotItems>
            {props.items.map((item, itemIndex) => (
              <Styled.DotItem
                key={itemIndex}
                onClick={() => onChangeActiveItem(itemIndex)}
                className={activeIndex === itemIndex ? 'active': ''}
              />
            ))
            }
          </Styled.DotItems>
        </Styled.CarouselItemsContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        {activeItem && (
          <Styled.ItemDesciption>
            <Styled.ItemDesciptionTitle>
              {activeItem.title}
            </Styled.ItemDesciptionTitle>
            <Styled.ItemDesciptionSubTitle>
              {activeItem.subTitle}
            </Styled.ItemDesciptionSubTitle>
          </Styled.ItemDesciption>
        )}
      </Grid>
    </Grid>
  );
}

export default MagicMobileCarousel;
