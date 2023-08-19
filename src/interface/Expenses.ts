export interface IExpensesData {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  categoryLogo: string;
}

export interface IExpenseColumn {
  id: "No" | "Description" | "Amount" | "Date" | "Category";
  label: string;
}