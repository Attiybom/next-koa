import React from 'react';
import { withRouter } from 'next/router';


const A = ({ router }) => {
  return (
    <div>{router.query.id}  </div>
  );
};


export default withRouter(A);
