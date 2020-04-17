import React, { FunctionComponent } from 'react';
import grey from '@material-ui/core/colors/grey';
import Link from 'next/link';
import { theme } from '../../hocs/withMui';
import { Styled } from './_styles';

const fontColor = grey[50];

/*
* @component FooterNav - displays footer navigation banner at bottom of page.
* */
const FooterNav: FunctionComponent = () => (
  <Styled.Container backgroundColor={theme.palette.primary.main}>
    <Styled.FooterContainerGrid>
      <Styled.FooterEmailContainer>
        <Styled.FooterFont fontColor={fontColor} variant="h4">Stay up to date with Colgate</Styled.FooterFont>
        <Styled.FooterEmailField type="text" placeholder="SHARE YOUR EMAIL" bordercolor={fontColor} />
      </Styled.FooterEmailContainer>
      <Styled.FooterLinksContainer>
        <Styled.FooterFont fontColor={fontColor} variant="body1">
          <Link href="/">
            <a>About our Ads</a>
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body1">
          <Link href="/">
            <a>Terms of Sale</a>
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body1">
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body1">
          <Link href="/">
            <a>Terms of Sale</a>
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body1">
          <Link href="/">
            <a>Returns & Warranty</a>
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body1">
          <Link href="/">
            <a>Support</a>
          </Link>
        </Styled.FooterFont>
      </Styled.FooterLinksContainer>
      <Styled.FooterSocialContainer>
        <Styled.FooterSocialIconGrid>
          <Styled.FooterSocialIcon color={fontColor} className="fab fa-facebook" />
          <Styled.FooterSocialIcon color={fontColor} className="fab fa-youtube" />
          <Styled.FooterSocialIcon color={fontColor} className="fab fa-instagram" />
        </Styled.FooterSocialIconGrid>
        <Styled.FooterLegalCopy variant="body1" color={fontColor}>
          © 2020 Colgate-Palmolive Company. All Rights Reserved.
          You are viewing the US English site.
        </Styled.FooterLegalCopy>
      </Styled.FooterSocialContainer>
    </Styled.FooterContainerGrid>
  </Styled.Container>
);

export default FooterNav;
