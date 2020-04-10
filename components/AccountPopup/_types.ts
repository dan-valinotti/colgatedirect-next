export interface CustomerData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface GetCustomerDataResponse {
  data: {
    customer: {
      id: string;
      email: string;
      firstName?: string;
      lastName?: string;
    };
  };
}
