import Index, {Props} from "../../../components/ProductThumbnail";
import {CurrencyCode} from "../../../models";
import {render} from "@testing-library/react";
import React from "react";

describe("<Index />", () => {
  test("Should display a blank product thumbnail", async () => {
    const { findByTestId } = renderProductThumbnail();
    const productThumbnail = await findByTestId("prod-thumb");

    expect(productThumbnail).toBeVisible();
  });
});

function renderProductThumbnail(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    id: "",
    title: "",
    priceRange: {
      minVariantPrice: {
        amount: '',
        currencyCode: CurrencyCode.Usd
      },
      maxVariantPrice: {
        amount: '',
        currencyCode: CurrencyCode.Usd
      }
    },
    handle: '',
    imageSrc: '',
    altText: '',
  };

  return render(<Index {...defaultProps} {...props} />);
}
