import React from 'react';
import ReactFromJSON from 'react-from-json/dist';
import ManualToothbrush from '../pdp/ManualToothbrush';
import WhiteningPage from '../pdp/WhiteningPage';
import { TransformedProduct } from '../PDPComponent/_types';
import { WhiteningPageProps } from '../pdp/WhiteningPage/_types';

interface Props {
  /**
   * URL handle attached to custom PDP component.
   */
  handle: string;
  /**
   * Props to be passed to PDP component.
   */
  PDPprops: ManualToothbrushProps;
}

interface ManualToothbrushProps {
  product: TransformedProduct;
}

function getEntry(handle, props: ManualToothbrushProps | WhiteningPageProps) {
  switch (handle) {
    case 'm1':
      return {
        type: 'ManualToothbrush',
        props: {
          product: props.product,
        },
      };
    case 'teeth-whitening-led-device-kit':
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
  WhiteningPage: ({ product }: WhiteningPageProps) => (
    <WhiteningPage product={product} />
  ),

};

const CustomPDPController = ({ handle, PDPprops }: Props) => (
  <ReactFromJSON
    entry={getEntry(handle, PDPprops)}
    mapping={mapping}
  />
);

export default CustomPDPController;
