import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import {ProductPriceRange} from "../../models";

type Props = {
    id: string,
    title: string,
    priceRange: ProductPriceRange,
    handle: string,
    imageSrc: string,
    altText: string
}

function ProductThumbnail ({ id, title, priceRange, handle, imageSrc, altText }: Props) {
    return (
        <Paper className={"product-container"}>
            <div className={"product-img-thumb"}>
                <img src={imageSrc} alt={altText}/>
            </div>
            <Typography variant={"subtitle2"} className={"product-title"}>{title}</Typography>
            <Typography variant={"body2"} className={"product-price"}>${priceRange.minVariantPrice.amount}</Typography>
            <div className={"product-atc-container"}>
                <Button className={"atc-btn"} variant={"contained"} color={"primary"}>Add to cart</Button>
            </div>
        </Paper>
    );
}

export default ProductThumbnail;