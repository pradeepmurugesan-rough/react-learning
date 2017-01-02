import React, {PropTypes} from 'react';
import RepoListItem from './RepoListItem';

class RepoList extends React.Component {
  static propTypes = {
    repos: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Repositories:</h4>
        <ul>
          {this.props.repos.map( repo =>
            <RepoListItem repo={repo} key={repo.name}/>
          )}
        </ul>
      </div>
    );
  }
}

export default RepoList;
