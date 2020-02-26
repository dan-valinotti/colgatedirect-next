import React from 'react';
import { ProductSortKeys} from '../../models';
import { useQuery } from '@apollo/react-hooks';
import { ProductsType, PRODUCTS_QUERY } from './_types';
import "./_style.scss"
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import ProductThumbnail from "../ProductThumbnail/ProductThumbnail";

type Props = {
    query: string,
    reverse: boolean,
    sortKey: ProductSortKeys,
    variables: object
};

function Products(props: Props) {

    const { loading, error, data } = useQuery<ProductsType, object>(
        PRODUCTS_QUERY,
        { variables: props.variables }
    );

    return (
        <div>
            {loading && (
                <div>Loading...</div>
            )}

            {error && (
                <div>{error.message}</div>
            )}

            {data && (
                <>
                    <Grid container spacing={2}>
                        {data.products.edges.map(({ node }, key) => {
                            const images = node.images.edges;
                            const imageSrc = images.length
                                ? images[0].node.transformedSrc
                                : '';
                            const altText = images.length
                                ? images[0].node.altText
                                : '';

                            if (imageSrc !== "") {
                                return (
                                    <Grid item xs={3}>
                                        <ProductThumbnail
                                            id={"1"}
                                            title={node.title}
                                            priceRange={node.priceRange}
                                            handle={"handle"}
                                            imageSrc={imageSrc}
                                            altText={altText}
                                        />
                                    </Grid>
                                )
                            }
                        })}
                    </Grid>
                </>
            )}
        </div>
    );
}

export default Products;
