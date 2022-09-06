import React from 'react';
// import NewExpense from './form/form';
import ExpenseList from './product/product';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };
    this.intervalId = "";
    console.log(this);
    this.clickHandler = this.clickHandler.bind(this);

  }
  // addExpenseHandler(expense) {
  //   console.log(this);
  //   // setExpenses((prevexpenses) => { return [...[expense], ...prevexpenses] });
  //   // this.setState((prevexpenses) => { return [...[expense], ...prevexpenses] });
  // }
  clickHandler() {
    console.log(this)
    this.setState({
      expenses: [...[{
        // id: new Date().getTime(),
        item: '',
        offer: '',
        price: ''
      }], ...this.state.expenses]
    });

  }
  logout = () => {
    this.props.logout(false)
  }
  // componentDidMount() {
  // }
  // componentWillUnmount() {
  //     console.log('unmounted expenses')
  //     clearInterval(this.intervalId);
  // }

  render() {
    return (<div>
      <button onClick={this.logout}>Log out</button>
      {/* <NewExpense newcomponents={this.addExpenseHandler} /> */}
      {/* <NewExpense /> */}
      {/* <button>Refresh list</button> */}
      <ExpenseList expenses={this.state.expenses} />

      {/* <button onClick={this.clickHandler}>Add Groceries</button> */}
    </div>);
  }
}
export default Expenses;