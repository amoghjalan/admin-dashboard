import './featured.scss';
import {MoreVert, KeyboardArrowDown, KeyboardArrowUpOutlined} from '@mui/icons-material'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">

        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">Rs. 202</p>
        <p className="description">Last Updated today</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize='small'/>
              <div className="resultAmount">Rs. 202</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">Rs. 202</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">Rs. 202</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured