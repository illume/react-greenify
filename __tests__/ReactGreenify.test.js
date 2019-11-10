import React from 'react';
import ReactGreenify from '../src/index.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ReactGreenify>Halo!</ReactGreenify>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
