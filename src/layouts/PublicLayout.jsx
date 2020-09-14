import React from 'react';

const PublicLayout = props => {
  return (
    <div className="public-layout">
      public
      {props.children}
    </div>
  );
};
export default PublicLayout;
