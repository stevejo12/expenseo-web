import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { IExpensesData } from '../../interface/Expenses';

interface IProps {
  no: number,
  data: IExpensesData
}

const Expense = ({ no, data }: IProps) => {
  return (
    <TableRow className="expense-container">
      <TableCell>{no}</TableCell>
      <TableCell>{data.description}</TableCell>
      <TableCell>{data.amount}</TableCell>
      <TableCell>{data.date.toString()}</TableCell>
      <TableCell>{data.category}</TableCell>
    </TableRow>
  )
}

export default Expense