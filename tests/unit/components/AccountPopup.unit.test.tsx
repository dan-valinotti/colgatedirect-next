/**
 * @jest-environment jsdom
*/
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MockedProvider } from '@apollo/react-testing';
import AccountPopup from "../../../components/ui/AccountPopup";
import { CUSTOMER_INFO_QUERY } from '../../../components/ui/AccountPopup/_types';

describe('<AccountPopup />', () => {
  const mocks = [{
    request: {
      query: CUSTOMER_INFO_QUERY,
      variables: {
        customerAccessToken: 'accessTokenMock',
      }, 
    },
    result: {
      data: {
        customer: {
          id: '12345',
          firstName: 'Test',
          lastName: 'User',
          email: 'test@user.com',
        }
      }
    }
  }];

  it('Renders correctly', () => {
    const wrap = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AccountPopup />
      </MockedProvider>
    );
    expect(wrap).toBeDefined();
    expect(toJson(wrap)).toMatchSnapshot();
  });
})
