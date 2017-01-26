import React from 'react'
import HomePage from '../../../src/components/home/HomePage'
import {shallow} from 'enzyme'
import {expect, assert} from 'chai'

describe('Home page component', () => {
  let _wrapper;

  beforeEach(() => {

    _wrapper = shallow(<HomePage />)
  });

  it('should exists', () => {
    assert.isDefined(HomePage)
  });

  it('Renders the header', ()=> {
    const header = _wrapper.find('h1');
    expect(header).to.exist;
  });
});
