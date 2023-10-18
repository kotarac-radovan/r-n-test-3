
import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput fallbackText='No expenses found' expenses={expensesCtx.expenses} expensesPeriod='Total'/>
}