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
        <Styled.FooterEmailField type="text" placeholder="SHARE YOUR EMAIL" borderColor={fontColor} />
      </Styled.FooterEmailContainer>
      <Styled.FooterLinksContainer>
        <Styled.FooterFont fontColor={fontColor} variant="body">
          <Link href="/">
            About our Ads
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body">
          <Link href="/">
            Terms of Sale
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body">
          <Link href="/">
            Privacy Policy
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body">
          <Link href="/">
            Terms of Sale
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body">
          <Link href="/">
            Returns & Warranty
          </Link>
        </Styled.FooterFont>
        <Styled.FooterFont fontColor={fontColor} variant="body">
          <Link href="/">
            Support
          </Link>
        </Styled.FooterFont>
      </Styled.FooterLinksContainer>
      <Styled.FooterSocialContainer>
        <Styled.FooterSocialIconGrid>
          <Styled.FooterSocialIcon color={fontColor} className="fab fa-facebook" />
          <Styled.FooterSocialIcon color={fontColor} className="fab fa-youtube" />
          <Styled.FooterSocialIcon color={fontColor} className="fab fa-instagram" />
        </Styled.FooterSocialIconGrid>
        <Styled.FooterLegalCopy variant="body" color={fontColor}>
          © 2020 Colgate-Palmolive Company. All Rights Reserved.
          You are viewing the US English site.
        </Styled.FooterLegalCopy>
      </Styled.FooterSocialContainer>
    </Styled.FooterContainerGrid>
  </Styled.Container>
);

export default FooterNav;
