import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import Dropbox from '../components/Dropbox';
import {FiEdit2} from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import CreateCandidate from '../components/CreateCandidate';

const Dashboard = () => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontSize: 12
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
  function createData(sno, name, dob, email) {
    return { sno, name, dob, email };
  }
  
  const rows = [
    createData(1, 'Rajesh', '25/03/1999', 'rajeshkumar@gmail.com' ),
    createData(2, 'Rajesh', '25/03/1999', 'rajeshkumar@gmail.com' ),
    createData(3, 'Rajesh', '25/03/1999', 'rajeshkumar@gmail.com' ),
    createData(4, 'Rajesh', '25/03/1999', 'rajeshkumar@gmail.com' ),
    createData(5, 'Rajesh', '25/03/1999', 'rajeshkumar@gmail.com' ),
  ];

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Date of Birth</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="center">Result</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {row.sno}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.dob}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{<Dropbox />}</StyledTableCell>
              <StyledTableCell align="left">
                <button className='dashboard__button'>
                  {<FiEdit2 />}
                </button>
              </StyledTableCell>
              <StyledTableCell align="left">
                <button className='dashboard__button'>
                  {<RiDeleteBin6Line />}
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <CreateCandidate />
    </>
  )
}

export default Dashboard
