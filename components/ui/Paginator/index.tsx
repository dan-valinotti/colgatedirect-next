import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';

type Props = {
  perPage: number;
  total: number;
  currentPage?: number;
  nextPage: Function;
  prevPage: Function;
};

const Paginator: FunctionComponent<Props> = ({
  perPage,
  total,
  currentPage = 0,
  nextPage,
  prevPage,
}: Props) => (
  <Styled.Container>
    {currentPage !== 0 && (
      <button type="button" onClick={() => prevPage()}>{'<<'}</button>
    )}
    <p>{currentPage}</p>
    {currentPage !== Math.ceil(total / perPage) - 1 && (
      <button type="button" onClick={() => nextPage()}>{'>>'}</button>
    )}
  </Styled.Container>
);

export default Paginator;
