import React, {FunctionComponent, ReactNode} from 'react';
import { Container } from "@material-ui/core";

export enum PageSize {
    xsmall = "xs",
    small = "sm",
    medium = "md",
    large = "lg",
    xlarge = "xl"
}

type Props = {
    size: PageSize,
    children: ReactNode
}

const PageContainer: FunctionComponent<Props> = (props : Props) => {
    return (
        <Container maxWidth={props.size}>
            {props.children}
        </Container>
    );
};

export default PageContainer;