import Enzyme from 'enzyme';
import React from 'react';
import { mount } from 'enzyme';
import Category from './Category';
import { categories, clues } from '../data/fixtures';
import { fakeServer } from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const props = { category: categories[0] };

describe('Category', () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();
    server.respondWith(
      'GET',
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(clues)
      ]
    );
  });

  describe('when creating a new category', () => {
    let category;

    beforeEach(done => {
      category = mount(<Category {...props} />);
      server.respond();
      setTimeout(done);
    });

    it('logs the category', () => {
      console.log(category.debug());
    });

  });
});
