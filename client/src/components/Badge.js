import React from 'react';
import { Pets } from '@material-ui/icons';

const Badge = () => {
  return (
    <div className="badge-container">
      <div className="badge">
        {/* <Pets className="paw" style={{fontSize: "145px"}} /> */}
        <div className="title">Puppy API</div>
      </div>
    </div>
  )
}

export default Badge;