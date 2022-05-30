import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import './widget.scss'
import { userRequest } from '../../requestMethods';

const Widget = ({type}) => {


  //temporary
  let requestEndpoint;
  let data;
  switch (type) {
    case "user":
      data={
        title:"USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlined className='icon' style={{color: "crimsom", backgroundColor: "rgba(255, 0, 0.2)"}}/>
        )
      }
      requestEndpoint='users';
      break;
    case "order":
      data={
        title:"ORDERS",
        isMoney: false,
        link: "View all Orders",
        icon: (
          <ShoppingCartOutlined className='icon' style={{color: "goldenrod", backgroundColor: "rgba(218, 165, 32 0.2,)"}}/>
        )
      }
      requestEndpoint='orders'
      break;
    case "earning":
      data={
        title:"EARNINGS",
        isMoney: true,
        link: "View net Earnings",
        icon: (
          <MonetizationOnOutlined className='icon' style={{color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)"}}/>
        )
      }
      requestEndpoint='orders/income'
      break;
    case "balance":
      data={
        title:"BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlined className='icon' style={{color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}}/>
        )
      }
      break;

      default:
        break;
  }

  const [fetchData, setFetchData] = useState([]);

  useEffect(()=>{
    const getData = async (requestEndpoint) =>{
      try{
        const res = await userRequest.get(requestEndpoint);
        setFetchData(res.data);
      }catch(err){}
    }
    getData(requestEndpoint)
  }, [requestEndpoint])

  return (
    <div>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "Rs."} {fetchData.total}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp/>
          {fetchData.length}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget