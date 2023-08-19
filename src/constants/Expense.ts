import { IExpenseColumn, IExpensesData } from "../interface/Expenses";

export const ExpenseColumnData: readonly IExpenseColumn[] = [
  {
    id: "No",
    label: "No"
  },
  {
    id: "Description",
    label: "Description"
  },
  {
    id: "Amount",
    label: "Amount"
  },
  {
    id: "Date",
    label: "Date"
  },
  {
    id: "Category",
    label: "Category"
  },
]

export const ExpensesData: IExpensesData[] = [
  {
    id: "1",
    description: "Makan malam Ibu Sum",
    amount: 109000,
    date: "2023-08-19",
    category: "Food",
    categoryLogo: "https://scontent.fcgk27-1.fna.fbcdn.net/v/t1.6435-9/49500036_528565317656767_8785467925952724992_n.png?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGq1WZJxHZeFbz2Ga6LIHpsP8f6FKe7hPc_x_oUp7uE91-IEogp5NOKFLnMdmayD14&_nc_ohc=0GYq7KCtqSsAX8VrGMG&_nc_ht=scontent.fcgk27-1.fna&oh=00_AfDOzl81cORq6zqTO3Bm0xf0vZj_V8yr9ALJ4sw6AIeoKQ&oe=65083022"
  }
]