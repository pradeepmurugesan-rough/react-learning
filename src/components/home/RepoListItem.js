import React, {PropTypes} from 'react';

class RepoListItem extends React.Component {

  static propTypes = {
    repo: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          {this.props.repo.name}
          <a href={this.props.repo.html_url} target="_blank"><span className="pr glyphicon glyphicon-new-window"/> </a>
        </div>
        <div className="panel-body">
          <span className="glyphicon glyphicon-star"> {this.props.repo.stargazers_count} </span>
        </div>
      </div>
    );
  }
}

export default RepoListItem;
