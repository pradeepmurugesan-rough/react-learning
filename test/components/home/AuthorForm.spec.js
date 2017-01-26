import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from "react-redux";
import AuthorForm from '../../../src/components/home/AuthorForm'
import configureStore from '../../../src/store/configureStore';
import {expect, assert} from 'chai'

describe('Author form test', () => {

  let _wrapper;

  beforeEach(() => {
    let store = configureStore();
    _wrapper = mount(
      <Provider store={store}>
        <AuthorForm/>
      </Provider>);
  });

  it('should render the Author form', () => {
    assert.isDefined(AuthorForm);
  });

  it('should contain the form', () => {
    expect(_wrapper.find('form')).to.have.length(1);
  });

  it('should contain the author name text box', () => {
    expect(_wrapper.find("#authorname")).to.have.length(1);
  });

  it('should contain the submit button', () => {
    expect(_wrapper.find('button')).to.have.length(1);
    let button  = _wrapper.find('button')
    expect(button.props().children).to.equal('Find Repos!!');
  });

});
