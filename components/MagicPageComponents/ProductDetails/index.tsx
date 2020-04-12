import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react';
import { Styled } from './_styles';
import { ProductDetailsProps } from './_types';
import DynamicTabs from '@/DynamicTabs';
import { Grid, Typography, Fade } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';

const ProductDetails: FunctionComponent<ProductDetailsProps> = (props: ProductDetailsProps) => {
  const DynamicTabsItems = [
    {
      title: 'Description',
      content: props.details.description
    },
    {
      title: 'App Details',
      content: props.details.appDetails
    }
  ];

  const [magicScene, setMagicScene] = useState(null);
  const [sceneController, setSceneController] = useState(new ScrollMagic.Controller());
  const [isMainAvatarActive, setIsMainAvatarActive] = useState(true);

  const toggleControllerBasedOnWidth = () => {
    const width = window.innerWidth || document.documentElement.clientWidth ||  document.body.clientWidth;
    if (width <= 960) {
      sceneController.enabled(false);
    } else {
      sceneController.enabled(true);
    }
    sceneController.update(true);
  }

  const setMagicScroll = () => {
    const scene = new ScrollMagic.Scene({
      triggerElement: '#magic-scroll-trigger',
      triggerHook: 'onLeave',
      duration: '60%'
    })

    scene.setPin('#magic-scroll-trigger')
      .addTo(sceneController)
      .on('start', (e) => {
        if (e.scrollDirection === 'REVERSE') {
          setIsMainAvatarActive(true);
        } if (e.scrollDirection === 'FORWARD') {
          setIsMainAvatarActive(false);
        }
      }).on('end', (e) => {
        setIsMainAvatarActive(false);
      });

    window.addEventListener('resize', toggleControllerBasedOnWidth);

    setMagicScene(scene);
  }

  useEffect(() => {
    setMagicScroll();
  }, [])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Styled.AvatarsContainer id="magic-scroll-trigger">
          <Fade in={isMainAvatarActive} timeout={1000}>
            <Styled.AvatarItem
              style={{
                backgroundImage: `url(${props.details.magicAvatars.mainAvatar})`
              }}
            />
          </Fade>
          <Fade in={!isMainAvatarActive} timeout={1000}>
            <Styled.AvatarItem
              style={{
                backgroundImage: `url(${props.details.magicAvatars.scrollAvatar})`
              }}
            />
          </Fade>
        </Styled.AvatarsContainer>
      </Grid>
      <Styled.DetailsMainContainer item container xs={12} md={6} spacing={1}>        
        <Grid item xs={8}>
          <Styled.DetailsContainer>
            <Styled.DetailsTitle>
              {props.details.title}
            </Styled.DetailsTitle>
            <Styled.DetailsSubTitle>
              <Typography>
                {props.details.subTitle}
              </Typography>
              <Rating value={props.details.rating} readOnly />
            </Styled.DetailsSubTitle>
          </Styled.DetailsContainer>
        </Grid>
        <Grid item xs={4} style={{ padding: 20 }}>
          <Styled.PriceContainer>
            ${props.details.price}
          </Styled.PriceContainer>
          <Styled.PriceSubTitle>
            {props.details.priceSubTitle}
          </Styled.PriceSubTitle>
        </Grid>
        <Grid item xs={12}>
          <DynamicTabs items={DynamicTabsItems} />
          <Styled.SubDetailesContainer>
            <Styled.AddToCardButton
              fullWidth={true}
              variant="outlined"
            >
              Add to cart
            </Styled.AddToCardButton>
            <Grid item container xs={12} style={{ paddingTop: 30 }}>
              {props.details.subDetails.labels.map((label, labelIndex) => (
                <Styled.LabelGridItem item xs={4} key={labelIndex}>
                  <Styled.LabelAvatar src={label.avatar} alt={label.title} />
                  <Styled.LabelText>
                    {label.title}
                  </Styled.LabelText>
                </Styled.LabelGridItem>
              ))}
            </Grid>
            <Grid item container xs={12}>
              <Styled.SubDetailesTitle>
                {props.details.subDetails.title}
              </Styled.SubDetailesTitle>
            </Grid>
            <Grid item container xs={12} style={{ paddingTop: 30 }}>
              {props.details.subDetails.items.map((item, itemIndex) => (
                <Styled.SubDetailsItem item xs={12} key={itemIndex}>
                  <Styled.SubDetailsItemAvatar src={item.avatar} alt={item.title} />
                  <Styled.SubDetailsItemText>
                    {item.title}
                  </Styled.SubDetailsItemText>
                </Styled.SubDetailsItem>
              ))}
            </Grid>
          </Styled.SubDetailesContainer>
        </Grid>
      </Styled.DetailsMainContainer>
    </Grid>
  );
};

export default ProductDetails;
  