import {ChatBubbleOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOffOutlined} from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOffOutlined/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className='icon' onClick={() => dispatch({ type: "TOGGLE" })}/>
          </div>
          <div className="item">
            <Badge badgeContent={4} color='primary'>
              <NotificationsNoneOutlined className='icon'/>
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={4} color='primary'>
              <ChatBubbleOutlined className='icon'/>
            </Badge>
          </div>
          <div className="item">
            <ListOutlined className='icon'/>
          </div>
          <div className="item">
            <img
              src='#'
              alt=''
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar