import React from 'react';
import { withRouter } from 'next/router';


const A = ({ router }) => {
  return (
    <div>{router.query.id ? `id: ${router.query.id}` : 'no id'}  </div>
  );
};


export default withRouter(A);
