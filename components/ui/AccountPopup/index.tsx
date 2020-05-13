import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { Styled } from './_styles';
import LogoutButton from '../LogoutButton';
import { GetCustomerInfoResponse, CUSTOMER_INFO_QUERY } from '../../../common/queries/account';
import CTAButton from '../CTAButton';

const AccountPopup: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>('');

  const {
    data: getCustomerData,
    error: getCustomerError,
    refetch: refetchCustomerData,
  } = useQuery<GetCustomerInfoResponse>(CUSTOMER_INFO_QUERY, {
    variables: {
      customerAccessToken: accessToken,
    },
    // Skip query execution if accessToken is not retrieved from
    //  localStorage, or if user is not logged in
    skip: (!accessToken || accessToken === ''),
  });

  // Handler functions for IconButton
  const toggleOpen = () => setOpen(!open);

  /**
   * useEffect() - monitor 'window' variable to wait for client browser to be
   *   detected, then retrieve 'customerAccessToken' from localStorage. If value
   *   is not empty, attempt to retrieve customer data
   */
  useEffect(() => {
    if (window && window.localStorage) {
      setAccessToken(window.localStorage.getItem('customerAccessToken'));
    }
    if (accessToken && accessToken !== '') {
      refetchCustomerData()
        .catch((err) => console.log(err));
    }
  }, [accessToken, refetchCustomerData]);

  return (
    <Styled.AccountButtonContainer>
      <i className="far fa-user-circle account-btn" role="presentation" onClick={toggleOpen} />
      <Styled.AccountPopupContainer open={open}>
        <Styled.AccountPopup id="popup-content">
          {getCustomerData ? (
            <Styled.AccountDetails>
              <h3>Account</h3>
              <p id="account-name">
                {getCustomerData.customer.firstName} {getCustomerData.customer.lastName}
                <br />
                {getCustomerData.customer.email}
              </p>
              <div>
                <CTAButton
                  id="account-page-btn"
                  color="primary"
                  text="Account details"
                  onClick={toggleOpen}
                />
                <LogoutButton />
              </div>
            </Styled.AccountDetails>
          ) : (
            <>
              <Link href="/login" passHref>
                <CTAButton
                  color="primary"
                  text="Log in"
                  onClick={toggleOpen}
                  id="login-btn"
                />
              </Link>
              <Link href="/register" passHref>
                <CTAButton
                  color="secondary"
                  text="Sign up"
                  onClick={toggleOpen}
                  id="signup-btn"
                />
              </Link>
            </>
          )}
        </Styled.AccountPopup>
      </Styled.AccountPopupContainer>
    </Styled.AccountButtonContainer>
  );
};

export default AccountPopup;
