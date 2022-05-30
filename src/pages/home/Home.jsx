import {useState, useMemo, useEffect} from 'react'
import Featured from "../../components/featured/Featured"
import Chart from "../../components/featured/Chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.scss"
import Table from "../../components/table/Table"
import {userRequest} from '../../requestMethods'

const Home = () => {
  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(()=>[
    'Jan','Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ], []);

  useEffect(()=>{
    const getStats = async ()=>{
      try{
        const res = await userRequest.get('/users/stats')
        res.data.map((item) =>
          setUserStats(prev => [...prev, {name: MONTHS[item._id-1], "Active User": item.total}])
        )
      }catch(err){}
    }
    getStats();
  }, [MONTHS])

  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart title="User Analytics" grid data={userStats} dataKey='Active User'/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home
