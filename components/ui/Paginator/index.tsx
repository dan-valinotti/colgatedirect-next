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
  currentPage = 1,
  nextPage,
  prevPage,
}: Props) => (
  <Styled.Container>
    {currentPage !== 1
      ? (
        <Styled.NextPrevButton type="button" onClick={() => prevPage()}>
          <i className="fas fa-chevron-left" />
        </Styled.NextPrevButton>
      ) : (
        <Styled.ButtonPlaceholder />
      )}
    <Styled.PageNumberLabel>
      Page
      <br />
      {currentPage}
    </Styled.PageNumberLabel>
    {currentPage !== Math.ceil(total / perPage) - 1
      ? (
        <Styled.NextPrevButton type="button" onClick={() => nextPage()}>
          <i className="fas fa-chevron-right" />
        </Styled.NextPrevButton>
      ) : (
        <Styled.ButtonPlaceholder />
      )}
  </Styled.Container>
);

export default Paginator;
