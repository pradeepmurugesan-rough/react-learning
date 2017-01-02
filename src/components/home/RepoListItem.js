import React, {PropTypes} from 'react';

class RepoListItem extends React.Component {

  static propTypes = {
    repo: PropTypes.object.required
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.repo.name}
      </li>
    );
  }
}

export default RepoListItem;
