/**
 * @jest-environment jsdom
*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Heading, Subheading, Paragraph } from '../../../components/ui/Typography';

describe('<Heading />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Heading as="h1" color="rgba(0,0,0,1)" textAlign="left">
        Test
      </Heading>
    );
  });

  it('Does the rendered component match the Snapshot?', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('Does rendered component show correct text?', () => {
    expect(wrapper.text()).toMatch('Test');
  });
  it('Does component render correct HTML element?', () => {
    expect(wrapper.getDOMNode().tagName).toMatch('H1');
  })
});

describe('<Subheading />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Subheading as="h6" color="rgba(0,0,0,1)" textAlign="left">
        Test
      </Subheading>
    );
  });

  it('Does the rendered component match the Snapshot?', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('Does rendered component show correct text?', () => {
    expect(wrapper.text()).toMatch('Test');
  });
  it('Does component render correct HTML element?', () => {
    expect(wrapper.getDOMNode().tagName).toMatch('H6');
  })
});

describe('<Paragraph />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Paragraph as="p" color="rgba(0,0,0,1)" textAlign="left">
        Test
      </Paragraph>
    );
  });

  it('Does the rendered component match the Snapshot?', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('Does rendered component show correct text?', () => {
    expect(wrapper.text()).toMatch('Test');
  });
  it('Does component render correct HTML element?', () => {
    expect(wrapper.getDOMNode().tagName).toMatch('P');
  })
});
