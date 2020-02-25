import React from 'react';
import { ProductSortKeys} from '../../models';
import { useQuery } from '@apollo/react-hooks';
import { ProductsType, PRODUCTS_QUERY } from './_types';
import "./_style.scss"
import {Button, Grid, Paper, Typography} from "@material-ui/core";

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
    // console.log(props.query);
    console.log(loading, error, data);

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
                                        <Paper className={"product-container"}>
                                            <div className={"product-img-thumb"}>
                                                <img src={imageSrc} alt={altText}/>
                                            </div>
                                            <Typography variant={"subtitle2"} className={"product-title"}>{node.title}</Typography>
                                            <Typography variant={"body2"} className={"product-price"}>${node.priceRange.minVariantPrice.amount}</Typography>
                                            <div className={"product-atc-container"}>
                                                <Button className={"atc-btn"} variant={"contained"} color={"primary"}>Add to cart</Button>
                                            </div>
                                        </Paper>
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
