import React, { useState, useEffect } from 'react';
import { Pagination, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { ExpenseColumnData, ExpensesData } from '../../constants/Expense';
import { IExpensesData } from '../../interface/Expenses';
import Expense from '../Expense/Expense';

import "./Expenses.scss";

const Expenses = () => {
  const [expenses, setExpenses] = useState<IExpensesData[]>([]);
  const [paginationCount, setPaginationCount] = useState<number>(expenses.length);

  useEffect(() => {
    setExpenses(ExpensesData)
    setPaginationCount(ExpensesData.length);
  }, []);
  // TODO EXPENSES PAGE
  return (
    <div className="expenses-container">
      <div className="expenses-header">
        <div className="expenses-header-title">Expenses</div>
        <button className='btn btn-primary' style={{ fontSize: "1.1rem" }}>
          New Expense
        </button>
      </div>
      <hr className="expenses-line" />
      <Table>
        <TableHead>
          <TableRow>
            {ExpenseColumnData.map((column) => {
              return (
                <TableCell key={column.id}>
                  {column.label}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense, key) => {
            return (
              <Expense
                no={key+1}
                data={expense}
              />
            )
          })}
        </TableBody>
      </Table>
      {paginationCount > 0 && <Pagination count={paginationCount} />}
    </div>
  )
}

export default Expenses