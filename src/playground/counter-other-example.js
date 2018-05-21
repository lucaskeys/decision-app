// const user = {
//   name: 'luke',
//   age: 26,
//   cities: ['New York', 'England', 'Vancouver'],
//   location: 'Portland',
//   printPlacesLived() {
//     return this.cities.map((city) => this.name + 'has lived in ' + city);
//   }
// };
// //
// // const multiplier = {
// //   numbers: [1,5,7,8],
// //   multiplyBy: 8,
// //   multiply() {
// //     this.numbers.map((number) => number * this.multiplyBy);
// //   }
// // }
// //
// //
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
//
// const template = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// )
// const count = 0;
//
// const addOne = () => {
//   count++;
// };
//
// const subtractOne = () => {
//   count--;
// };
//
// const reset = () => {
//   count =0;
// };
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subtractOne}>-1</button>
//       <button onClick={reset}>+Reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();



class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = JSON.ParseInt(stringCount, 10);
    console.log(count);
     // this if statement confirms that is is a number
    if(isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
      // first argument is the key, second the the item you want to store

    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };

  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
    // This is the syntax doe 
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));
