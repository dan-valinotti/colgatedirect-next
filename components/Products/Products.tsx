import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSortKeys } from '../../models/shopify.model';
import util from 'util';
import { ProductsState } from '../../store/products.slice';

interface Props {
    query: {
        query: string,
        reverse: boolean,
        sortKey: ProductSortKeys,
        sortIndex: number
    }
};

function Products({ query }: Props) {
    const dispatch = useDispatch();
    const { firstPage, nextPage, data }: ProductsState = useSelector(({ products }) => products);
    const hasNextPage = data ? data.pageInfo.hasNextPage : false;
    let gridListCols = 4;

    return (
        <div>
            {firstPage.loading && (
                <div>Loading...</div>
            )}

            {firstPage.error && (
                <p>{firstPage.error.message}</p>
            )}

            {data && (
                <>
                    <div className="products-container" style={{ display: 'flex' }}>
                        {data.edges.map(({ node }) => {
                            const images = node.images.edges;
                            const imageSrc = images.length
                                ? images[0].node.transformedSrc
                                : 'http://www.netum.vn/public/default/img/icon/default-product-image.png';
                            const altText = images.length
                                ? images[0].node.altText
                                : '';

                            return (
                                <div className="product">
                                    <h6>{node.title}</h6>
                                    <p>{node.priceRange.minVariantPrice.amount}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

export default Products;
