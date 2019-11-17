import React from 'react';
import renderer from 'react-test-renderer';
import ExampleList from '@/src/components/ExampleList';

describe('ExampleList', () => {
  it('renders correctly', () => {
    let examples = [];
    const tree = renderer.create(<ExampleList examples={examples} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
