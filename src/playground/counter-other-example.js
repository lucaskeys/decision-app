const user = {
  name: 'luke',
  age: 26,
  cities: ['New York', 'England', 'Vancouver'],
  location: 'Portland',
  printPlacesLived() {
    return this.cities.map((city) => this.name + 'has lived in ' + city);
  }
};
//
// const multiplier = {
//   numbers: [1,5,7,8],
//   multiplyBy: 8,
//   multiply() {
//     this.numbers.map((number) => number * this.multiplyBy);
//   }
// }
//
//
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const template = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
const count = 0;

const addOne = () => {
  count++;
};

const subtractOne = () => {
  count--;
};

const reset = () => {
  count =0;
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={reset}>+Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
