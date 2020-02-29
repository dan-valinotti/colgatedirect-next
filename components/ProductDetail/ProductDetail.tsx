/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent } from 'react';
import { Button, Typography } from '@material-ui/core';
import { TransformedProduct } from '../PDPComponent/_types';
import './_style.scss';

type Props = {
  product: TransformedProduct;
};

const ProductDetail: FunctionComponent<Props> = ({ product }: Props) => (
  <div id="product-detail-container">
    <div className="pdp-image">
      <img src={product.imageSrc} alt="PDP" />
    </div>
    <div className="pdp-desc">
      <Typography variant="h5">{product.title}</Typography>
      <Typography variant="body2">{product.description}</Typography>
      <div className="atc-section">
        <Typography variant="body1">
          Price: ${parseFloat(product.price).toFixed(2)}
        </Typography>
        <Button variant="contained" color="secondary">Add to cart</Button>
      </div>
    </div>
  </div>
);

export default ProductDetail;
