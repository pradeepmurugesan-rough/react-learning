import React from 'react';
import AuthorForm from './AuthorForm';

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <h1>
            Find Github Repos <small>A demo app to learn react</small>
          </h1>
        </div>
      </div>
      <AuthorForm/>
    </div>
  );
};

export default HomePage;
