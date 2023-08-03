import React from 'react';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';

import "./Sidebar.scss";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    // TODO: Hamburger
    <div className="sidebar">
      <div className="sidebar-title">
        EXPENSEO.
      </div>
      <div className="sidebar-topMenu">
        <Link to="/" className="sidebar-topMenu-menu">
          <SpaceDashboardOutlinedIcon />
          <span>Dashboard</span>
        </Link>
        <Link to="/expenses" className="sidebar-topMenu-menu">
          <AccountBalanceWalletOutlinedIcon />
          <span>Reports</span>
        </Link>
      </div>
      <div className="sidebar-bottomMenu">
        <Link to="#!" className="sidebar-bottomMenu-menu">
          <SettingsOutlinedIcon />
          <span>Settings</span>
        </Link>
        <Link to="#!" className="sidebar-bottomMenu-menu">
          <HelpCenterOutlinedIcon />
          <span>Help</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar