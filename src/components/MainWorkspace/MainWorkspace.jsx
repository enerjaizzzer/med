import React from 'react';
import WorkspaceComponent from './components/WorkspaceComponent';
import WorkspaceHeader from './components/WorkspaceHeader';

const MainWorkspace = () => {
  return (
    <div className="main-workspace-container">
      <WorkspaceHeader />
      <WorkspaceComponent />
    </div>
  )
}

export default MainWorkspace;
