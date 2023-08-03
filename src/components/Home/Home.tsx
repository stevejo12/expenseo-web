import React, { useState } from 'react'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import "./Home.scss";

// Reference
// https://quickbooks.intuit.com/accountants/products-solutions/accounting/quickbooks-online/
// https://www.pcmag.com/reviews/expensify

const Home = () => {
  const [username, setUsername] = useState("guestb")

  return (
    <div className="home">
      {/* TODO
          Hamburger when < 600px width
      */}
      <div className="home-leftSidebar">
        <div className="home-leftSidebar-title">
          EXPENSEO.
        </div>
        <div className="home-leftSidebar-topMenu">
          <div className="home-leftSidebar-topMenu-menu">
            <SpaceDashboardOutlinedIcon />
            <span>Dashboard</span>
          </div>
          <div className="home-leftSidebar-topMenu-menu">
            <AccountBalanceWalletOutlinedIcon />
            <span>Reports</span>
          </div>
        </div>
        <div className="home-leftSidebar-bottomMenu">
          <div className="home-leftSidebar-bottomMenu-menu">
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </div>
          <div className="home-leftSidebar-bottomMenu-menu">
            <HelpCenterOutlinedIcon />
            <span>Help</span>
          </div>
        </div>
      </div>
      <div className="home-mainMenu">
        <div className="home-mainMenu-header">
          <span className="home-mainMenu-header-welcome">
            welcome, {username}
          </span>
          <div className="home-mainMenu-header-avatar">
            <AccountCircleOutlinedIcon className="home-avatar" />
          </div>
        </div>
        <div className="home-mainMenu-body">

        </div>
      </div>
      
    </div>
  )
}

export default Home