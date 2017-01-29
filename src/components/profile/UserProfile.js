import React, {PropTypes} from 'react';
import isEmpty from 'lodash.isempty';

class UserProfile extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }


  constructor(props) {
    super(props);
  }

  render() {
    return !isEmpty(this.props.user) ?
     (
       <div className="row">
         <div className="col-md-12">
           <div className="row">
             <div className="col-md-3">
               <img src={this.props.user.avatar_url + "&s=200"}/>
             </div>
             <div className="col-md-9">
               <p>{this.props.user.name}</p>
               <p>{this.props.user.company}</p>
               <p>{this.props.user.location}</p>
               <p>{this.props.user.email}</p>
               <p>Public Repos: {this.props.user.public_repos}</p>
               <p>Joined on: {this.props.user.created_at}</p>
             </div>
           </div>
         </div>
       </div>
    )
    : null;
  }
}

export default UserProfile;

