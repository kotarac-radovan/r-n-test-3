import { View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles';


const DUMMY_EXPENSES = [    
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of pants',
        amount: 99.99,
        date: new Date('2023-1-19')
    },
    {
        id: 'e3',
        description: 'Food',
        amount: 9.99,
        date: new Date('2023-6-13')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 20.99,
        date: new Date('2023-7-13')
    },
    {
        id: 'e5',
        description: 'Another Book',
        amount: 25.99,
        date: new Date('2023-7-23')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-12-19')
    },
    {
        id: 'e7',
        description: 'A pair of pants',
        amount: 99.99,
        date: new Date('2023-1-19')
    },
    {
        id: 'e8',
        description: 'Food',
        amount: 9.99,
        date: new Date('2023-6-13')
    },
    {
        id: 'e9',
        description: 'Book',
        amount: 20.99,
        date: new Date('2023-7-13')
    },
    {
        id: 'e10',
        description: 'Another Book',
        amount: 25.99,
        date: new Date('2023-7-23')
    },
];


export default function ExpensesOutput( { expenses, expensesPeriod } ) {
  return ( 
  <View style={styles.container}>
    <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
    <ExpensesList expenses={DUMMY_EXPENSES}/>
  </View>

  );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    }
})