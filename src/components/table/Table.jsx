import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product, img, customer, date, amount, method, status) {
  const id = rows.size()+1
  return { id, product, img, customer, date, amount, method, status};
}

const rows = [
  createData('Frozen yoghurt', '#', "Peter", "1 March", 900, "Online", "Approved"),
  createData('Ice cream sandwich', '#', "Micheal", "2 March", 800, "Online", "Pending"),
  createData('Eclair', '#', "Michelle", "2 March", 800, "Online", "Approved"),
  createData('Cupcake', '#', "Stefii", "3 March", 900, "Cash", "Pending"),
  createData('Gingerbread', '#', "PeStefanter", "1 March", 200, "Online", "Approved"),
];

const ListTable = () => {
  return (
     <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>TrackingID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell className='tableCell' align="right">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="imange" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell' align="right">{row.customer}</TableCell>
              <TableCell className='tableCell' align="right">{row.date}</TableCell>
              <TableCell className='tableCell' align="right">{row.amount}</TableCell>
              <TableCell className='tableCell' align="right">{row.method}</TableCell>
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