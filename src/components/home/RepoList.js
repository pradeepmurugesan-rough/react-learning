import React, {PropTypes} from 'react';
import RepoListItem from './RepoListItem';

class RepoList extends React.Component {
  static propTypes = {
    repos: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Repositories:</h4>
        <div>
          {this.props.repos.map( repo =>
            <RepoListItem repo={repo} key={repo.name}/>
          )}
        </div>
      </div>
    );
  }
}

export default RepoList;
