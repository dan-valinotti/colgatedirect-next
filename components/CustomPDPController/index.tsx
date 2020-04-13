import React from 'react';
import ReactFromJSON from 'react-from-json/dist';
import ManualToothbrush from '../pdp/ManualToothbrush';
import WhiteningPage from '../pdp/WhiteningPage';
import { TransformedProduct } from '../PDPComponent/_types';

interface Props {
  handle: string;
  PDPprops: ManualToothbrushProps;
}

interface ManualToothbrushProps {
  product: TransformedProduct;
}

function getEntry(handle, props: ManualToothbrushProps) {
  switch (handle) {
    case 'm1':
      return {
        type: 'ManualToothbrush',
        props: {
          product: props.product,
        },
      };
    case 'teeth-whitening-led-device-kit-165':
      return {
        type: 'WhiteningPage',
        props: {
          product: props.product,
        },
      };
    default:
  }
}

const mapping = {
  ManualToothbrush: ({ product }: ManualToothbrushProps) => (
    <ManualToothbrush product={product} />
  ),
  WhiteningPage: () => (
    <WhiteningPage test="" />
  ),
};

const CustomPDPController = ({ handle, PDPprops }: Props) => (
  <ReactFromJSON
    entry={getEntry(handle, PDPprops)}
    mapping={mapping}
  />
);

export default CustomPDPController;
