import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  product: string;
};

const PDPComponent: FunctionComponent<Props> = ({ product }: Props) => (
  <div id="pdp-component">
    <Typography variant="h1">{product}</Typography>
  </div>
);

export default PDPComponent;
