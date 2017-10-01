import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { categories } from '../data/fixtures';

const props = { categories };

configure({ adapter: new Adapter() });
describe('App', () => {
  const app = shallow(<App {...props} />);

  it('renders the title', () => {
    expect(app.find('h2').text()).toEqual('Jeopardy!');
  });

  it('creates the right number of links', () => {
    expect(app.find('Link').length).toEqual(categories.length);
  });

  it('titles the links correctly', () => {
    app.find('Link h4').forEach((linkTitle, inx) => {
      expect(linkTitle.text()).toEqual(categories[inx].title);
    });
  });
});
