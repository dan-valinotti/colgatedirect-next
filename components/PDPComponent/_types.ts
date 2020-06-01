// Map line items to array for cart replacement
export function getLineItems(lineItems): object[] {
  if (lineItems) {
    return lineItems.map((item): object => {
      if (item.node) {
        return {
          variantId: item.node.variant.id,
          quantity: item.node.quantity,
        };
      }
      return {
        variantId: item.id,
        quantity: item.quantity,
      };
    });
  }

  return [];
}
