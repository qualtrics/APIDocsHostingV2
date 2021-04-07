import '@stoplight/elements/styles/elements.scss';

import { StoplightProject } from '@stoplight/elements';
import React from 'react';


export const StoplightProjectDocs: React.FC = () => {
  return (
    <div className="stoplight-container">
      <StoplightProject
        workspace="qualtricsv2"
        project="publicapidocs"
        branch="V2Testing"
      ></StoplightProject>
    </div>
  );
};
