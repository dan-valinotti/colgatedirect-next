export interface AddToCartProps {
  details: {
    oneTimePurchasePrice?: string,
    subPrice?: string,
    everyImmonths?: {
      number: number,
      months: number
    }[],
    [k: string]: any
  };
}