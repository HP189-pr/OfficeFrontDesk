import React, { useState } from 'react';
import SideMenu from '../components/Menu/SideMenu';
import RolePermissions from '../components/Admin/RolePermissions';
import SystemLogs from '../components/Admin/SystemLogs';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('role-permissions'); // Default option

  const renderContent = () => {
    switch (selectedOption) {
      case 'role-permissions':
        return <RolePermissions />;
      case 'system-logs':
        return <SystemLogs />;
      default:
        return <div>Select a menu option.</div>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideMenu onSelect={setSelectedOption} />
      <div style={{ flex: 1, padding: '20px' }}>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
