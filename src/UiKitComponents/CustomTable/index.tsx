import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
  TableBody,
  tableRowClasses,
  Checkbox,
} from '@mui/material';
import classes from './CustomTable.module.scss';
import { RootState } from '@RootStateType';
import { useSelector } from 'react-redux';

interface CustomTableProps {}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#264f7a',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#264f7a',
    textTransform: 'uppercase',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#fff',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: '#EDF6FF',
  },
  ':hover': {
    backgroundColor: '#EDF6FF',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  [`&.${tableRowClasses.root}`]: {
    transition: 'all 0.5s ease',
    cursor: 'pointer',
  },
}));

const getStateCompanyList = (state: RootState) =>
  state.CompanyReducer.companyList;

const CustomTable: React.FC<CustomTableProps> = () => {
  const companyList = useSelector(getStateCompanyList);

  return (
    <div className={classes.customTable}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />
              </TableCell>
              <StyledTableCellHead>COMPANY NAME</StyledTableCellHead>
              <StyledTableCellHead align="right">TXN</StyledTableCellHead>
              <StyledTableCellHead align="right">PHONE</StyledTableCellHead>
              <StyledTableCellHead align="right">CITY</StyledTableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {companyList.map((company) => (
              <StyledTableRow key={company.name}>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <StyledTableCell>{company.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {company.createdDate}
                </StyledTableCell>
                <StyledTableCell align="right">{company.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {company.address}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default CustomTable;
