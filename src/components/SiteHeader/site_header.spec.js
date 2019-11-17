import React from 'react';
import renderer from 'react-test-renderer';
import SiteHeader from '@/src/components/SiteHeader';

describe('SiteHeader', () => {
  it('renders correct', () => {
    const tree = renderer.create(<SiteHeader siteTitle={'Example'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
