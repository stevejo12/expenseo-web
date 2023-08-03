import React, { useState } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import "./Home.scss";
import Sidebar from '../Sidebar/Sidebar';

// Reference
// https://quickbooks.intuit.com/accountants/products-solutions/accounting/quickbooks-online/
// https://www.pcmag.com/reviews/expensify

const Home = () => {
  const [username, setUsername] = useState("guestb")

  return (
    <div className="home">
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