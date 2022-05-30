import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';



const ListTable = () => {
  const [rows, setRows] = useState([])

  useEffect(()=>{
    const getData = async () =>{
      try{
        const res = await userRequest.get('orders/?new=true');
        setRows(res.data);
      }catch(err){}
    }
    getData();
  }, [])
  return (
     <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>TrackingID</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{id}</TableCell>
              <TableCell className='tableCell' align="right">{row.userId}</TableCell>
              <TableCell className='tableCell' align="right">{row.createdAt}</TableCell>
              <TableCell className='tableCell' align="right">{row.amount}</TableCell>
              <TableCell className='tableCell' align="right">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable