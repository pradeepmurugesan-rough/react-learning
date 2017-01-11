import React, {PropTypes} from 'react';

class UserProfile extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        User name is : {this.props.user ? this.props.user.name : "Not known"}
      </div>
    );
  }
}

export default UserProfile;

