import React from 'react';
import Link from 'next/link';
import { ProductPriceRange } from '../../models';
import { Styled } from './_styles';

type Props = {
  id: string;
  title: string;
  priceRange: ProductPriceRange;
  handle: string;
  imageSrc: string;
  altText: string;
  variantId: string;
  addToCart: Function;
};

function ProductThumbnail({
  id, title, priceRange, handle, imageSrc, altText, variantId, addToCart,
}: Props) {
  return (
    <Styled.ProductContainer className="product-container">
      <Styled.ProductImgThumbnail>
        <Styled.ProductImg src={`${imageSrc}&height=165`} alt={`${title} Thumbnail`} />
      </Styled.ProductImgThumbnail>
      <Styled.ProductTitle variant="subtitle2" className="product-title">
        {title}
      </Styled.ProductTitle>
      <Styled.ProductPrice variant="body2" className="product-price">
        $
        { parseFloat(priceRange.minVariantPrice.amount).toFixed(2) }
      </Styled.ProductPrice>
      <Styled.ProductATCContainer>
        <Styled.ProductButton
          className="atc-btn"
          variant="contained"
          color="secondary"
          onClick={() => addToCart({ variantId, quantity: 1 })}
        >
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
export default ProductThumbnail;
