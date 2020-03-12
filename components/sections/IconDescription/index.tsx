import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { Styled } from './_styles';
import SectionContainer from '../../SectionContainer';
import { IconConfig } from './_types';

type Props = {
  icons: IconConfig[];
  videoUrl: string;
};

const IconDescription: FunctionComponent<Props> = ({ icons, videoUrl }: Props) => (
  <Styled.Container>
    <Styled.VideoContainer>
      <video loop id="framed-video" width="450" autoPlay muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </Styled.VideoContainer>
    <Styled.IconGrid>
      {icons.map((item, key) => (
        <Styled.IconContainer key={key}>
          {item.icon}
          <Styled.IconTitle variant="h6">{item.title}</Styled.IconTitle>
          <Styled.IconSubtitle variant="body2">{item.subtitle}</Styled.IconSubtitle>
        </Styled.IconContainer>
      ))}
    </Styled.IconGrid>
  </Styled.Container>
);

export default IconDescription;
