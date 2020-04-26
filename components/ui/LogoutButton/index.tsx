import React, { FunctionComponent, useEffect, useState } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { withLogout } from '../../../hocs/withLogout';

/* LogoutButton component props */
interface Props {
  mutate: any;
}

/*
 * LogoutButton - component that performs a logout mutation on Shopify API when clicked
 * @param mutate: function (performs logout mutation)
 * @state accessToken: string (stores customerAccessToken from localStorage)
 * @state processing: boolean (true if running mutation)
 */
const LogoutButton: FunctionComponent<Props> = (
  { mutate }: Props,
) => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);

  // Updates accessToken state var when client browser is detected
  useEffect(() => {
    if (window && window.localStorage) {
      setAccessToken(window.localStorage.getItem('customerAccessToken'));
    }
  }, []);

  // onClick function for Button component - performs logout mutation
  //  Success: reload page
  //  Failure: log error to console
  const submitLogoutRequest = () => {
    setProcessing(true);
    if (accessToken !== '') {
      mutate({
        variables: {
          customerAccessToken: accessToken,
        },
      })
        .then(() => {
          window.localStorage.removeItem('customerAccessToken');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          setProcessing(false);
        });
    }
  };

  return (
    <Button
      onClick={submitLogoutRequest}
      variant="outlined"
      color="secondary"
    >
      {!processing ? (
        <span>Log out</span>
      ) : (
        <CircularProgress
          variant="indeterminate"
          color="secondary"
          size={24}
        />
      )}
    </Button>
  );
};

export default withLogout(LogoutButton);
