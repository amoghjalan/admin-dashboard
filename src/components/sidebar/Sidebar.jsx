import './sidebar.scss'
import {AccountCircleOutlined, CreditCard, Dashboard,
        ExitToApp,
        InsertChart,
        LocalShippingOutlined,
        NotificationsNone,
        PersonOutline,
        PsychologyOutlined,
        SettingsApplications,
        SettingsSystemDaydreamOutlined,
        Store
} from '@mui/icons-material'
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div>
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">BYit</span>
      </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>

            <li>
              <PersonOutline className='icon'/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Store className='icon'/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlined className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className='icon'/>
            <span>Logout</span>
          </li>

        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div> */}
    </div>
  )
}

export default Sidebar