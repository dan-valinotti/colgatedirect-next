import React from 'react';

type Props = {
  statusCode: string
}

function Error({ statusCode }: Props) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode: any;
  if (res) {
    statusCode = res.statusCode;
  } else {
    statusCode = err ? err.statusCode : 404;
  }
  return { statusCode };
};

export default Error;
