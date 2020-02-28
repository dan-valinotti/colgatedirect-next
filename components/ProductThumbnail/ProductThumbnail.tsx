import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import Link from 'next/link';
import { ProductPriceRange } from '../../models';
import './_style.scss';

type Props = {
  id: string;
  title: string;
  priceRange: ProductPriceRange;
  handle: string;
  imageSrc: string;
  altText: string;
};

function ProductThumbnail({
  id, title, priceRange, handle, imageSrc, altText,
}: Props) {
  return (
    <Paper className="product-container">
      <div className="product-img-thumb">
        <img src={imageSrc} alt={altText} />
      </div>
      <Typography variant="subtitle2" className="product-title">
        {title}
      </Typography>
      <Typography variant="body2" className="product-price">
        { priceRange.minVariantPrice.amount }
      </Typography>
      <div className="product-atc-container">
        <Button className="atc-btn" variant="contained" color="secondary">
          Add to cart
        </Button>
        <Link href={{ pathname: '/product', query: { pid: id } }} as={`/products/${handle}`} passHref>
          <Button className="details-btn" variant="contained" color="primary">
            Details
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

export default ProductThumbnail;
