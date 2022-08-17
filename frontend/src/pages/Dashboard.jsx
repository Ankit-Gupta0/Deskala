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
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Dropbox from '../components/Dropbox';
import {RiDeleteBin6Line} from 'react-icons/ri'
import CandidateForm from '../components/CandidateForm';
import Spinner from '../components/Spinner'
import { getCandidates, deleteCandidate } from '../features/candidates/candidateSlice'
import {reset} from '../features/auth/authSlice'
import CandidateEditForm from '../components/CandidateEditForm';

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
      backgroundColor: '#00FFFF',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { candidates, isLoading, isError, message } = useSelector(
    (state) => state.candidates
  )
  console.log(candidates);
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getCandidates())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
    

  return (
    <>
      <section>
        <h3 className='candidate__heading'>Candidates List : {candidates.length}</h3>
      </section>
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
          {!isLoading && candidates.map((cand, id) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {id+1}
              </StyledTableCell>
              <StyledTableCell align="left">{cand.name}</StyledTableCell>
              <StyledTableCell align="left">{new Date(cand.dob).toISOString().substring(0,10)}</StyledTableCell>
              <StyledTableCell align="left">{cand.email}</StyledTableCell>
              <StyledTableCell align="center">{<Dropbox />}</StyledTableCell>
              <StyledTableCell align="left">
                  <CandidateEditForm index={id}/>
              </StyledTableCell>
              <StyledTableCell align="left">
                <button onClick={() => dispatch(deleteCandidate(cand._id))} className='dashboard__button'>
                  {<RiDeleteBin6Line />}
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <CandidateForm />
    </>
  )
}

export default Dashboard
