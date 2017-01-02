import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/home/HomeActions';
import RepoList from './RepoList';
import toastr from 'toastr';
import BlockUi from 'react-block-ui';

class AuthorForm extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    repos: PropTypes.array
  }

  constructor(props) {
    super(props);

    this.state = {
      author: { name: ""},
      repos: [],
      blocking: false
    };
    this.getRepos = this.getRepos.bind(this);
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.setBlocking = this.setBlocking.bind(this);
    this.actions = {};
    this.actions.getRepos = props.actions.getRepos;
    this.repos = [];
  }


  setBlocking(isBlocked) {
    this.setState({blocking: isBlocked});
  }

  getRepos(e) {
    e.preventDefault();
    this.setBlocking(true);
    this.actions.getRepos(this.state.author.name)
      .then( () => {
        this.setBlocking(false);
        toastr.success("retrieved data");
      })
      .catch( () => {
        this.setBlocking(false);
        toastr.error("Error occurred while retrieving data");
      });
  }


  onAuthorChange(event) {
    const author = this.state.author;
    author.name = event.target.value;
    this.setState({author: author});
  }

  renderRepositories() {
    if(this.props.repos && this.props.repos.length > 0) {
      return <RepoList repos={this.props.repos}/>;
    }
  }

  render() {
    return (
      <div>
        <BlockUi tag="div" blocking={this.state.blocking}>
          <form role="form">
            <div className="form-group">
              <label htmlFor="authorname">
                Github username
              </label>
              <input placeholder="Enter your github username" type="text" className="form-control" onChange={this.onAuthorChange} id="authorname" />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.getRepos}>
            Find Repos!!
            </button>
          </form>
        </BlockUi>
        {this.renderRepositories()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    repos: state.homeReducer.repositories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorForm);
