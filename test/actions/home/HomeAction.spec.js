import {expect} from 'chai';
import * as HomeActions from '../../../src/actions/home/HomeActions'
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('actions', () => {

  it ('should create a GET_REPOS_SUCCESS action ', () => {

    const repos = [];
    const expectedAction = {
      type: 'GET_REPOS_SUCCESS',
      repos: repos
    };

    const action = HomeActions.reposApiSuccess(repos);
    expect(action).to.deep.equal(expectedAction);
  });


  describe('Async Actions', () => {
    afterEach(() => {
      nock.cleanAll();
    });


    it('should dispatch GET_REPOS_SUCCESS when loading repos are done', () => {

      const middlewares = [thunk];
      const mockStore = configureMockStore(middlewares);
      const repos = {hello: 'world'};
      const expectedAction = {
        type: 'GET_REPOS_SUCCESS',
        repos: repos
      };

      const store = mockStore({repos: {
        repositories: [],
        author: ""
      }});

      fetchMock.get("*", repos);
      return store.dispatch(HomeActions.getRepos("someauthor"))
        .then(() => {
          const actions = store.getActions();
          expect(actions.length).to.equal(1);
          expect(actions).to.deep.equal([expectedAction]);
      });

    })
  });

});
