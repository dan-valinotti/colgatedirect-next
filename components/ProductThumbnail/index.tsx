import React from 'react';
import Link from 'next/link';
import { ProductPriceRange } from '../../models';
import { Styled } from './_styles';

export type Props = {
  id: string;
  title: string;
  priceRange: ProductPriceRange;
  handle: string;
  imageSrc: string;
  altText: string;
};

function Index({
  id, title, priceRange, handle, imageSrc, altText,
}: Props) {
  return (
    <Styled.ProductContainer className="product-container">
      <Styled.ProductImgThumbnail>
        <Styled.ProductImg src={imageSrc} alt={`${title} Thumbnail`} />
      </Styled.ProductImgThumbnail>
      <Styled.ProductTitle variant="subtitle2" className="product-title">
        {title}
      </Styled.ProductTitle>
      <Styled.ProductPrice variant="body2" className="product-price">
        $
        { parseFloat(priceRange.minVariantPrice.amount).toFixed(2) }
      </Styled.ProductPrice>
      <Styled.ProductATCContainer>
        <Styled.ProductButton className="atc-btn" variant="contained" color="secondary">
          Add to cart
        </Styled.ProductButton>
        <Link href={{ pathname: '/product', query: { handle } }} as={`/products/${handle}`} passHref>
          <Styled.ProductButton className="details-btn" variant="contained" color="primary">
            Details
          </Styled.ProductButton>
        </Link>
      </Styled.ProductATCContainer>
    </Styled.ProductContainer>
  );
}

export default Index;
