import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect, ConnectedProps } from 'react-redux';
import { ProductsState } from '../../store/products.slice';
import { AppState } from '../../store/index';
import { getFirstPage } from '../../services/products.service';
import { ProductsFragment } from '../../models/shopify.model';
import { ProductActionTypes } from '../../store/products/types';

type Props = ReduxProps & {
    query: {
        query: string,
        reverse: boolean
    }
};

const variables = {
    cursor: '',
    query: '',
    sortKey: null,
    reverse: false
}

function Products(props: Props) {
    const { loading, error, data }: ProductsState = props;
    let products: ProductsFragment = undefined;
    const hasNextPage = data ? data.pageInfo.hasNextPage : false;
    let gridListCols = 4;
    const dispatch = useDispatch();
    
    console.log(props);
    
    useEffect(() => {
        dispatch(getFirstPage(variables));
    }, [])

    return (
        <div>
            {loading && (
                <div>Loading...</div>
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

const mapStateToProps = (state: AppState) => ({
    loading: state.products.loading,
    error: state.products.error,
    data: state.products.data
});

const mapDispatchToProps = {
    getFirstPage: () => ({ type: ProductActionTypes.GET_PRODUCTS })
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Products);
