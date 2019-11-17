import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import SEO from '@/src/components/seo';

describe('SEO', () => {
  // beforeEach(() => {})
  it.skip('renders correctly', () => {
    useStaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `Home`,
            description: `Home page seo`,
            author: `Demo Author`,
          },
        },
      })
    );
    const props = {
      title: 'Home',
      keywords: [`testing`],
      lang: `en`,
      meta: [],
    };

    const tree = renderer.create(<SEO {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
