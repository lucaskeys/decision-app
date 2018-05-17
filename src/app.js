const app = {
  title: 'Indecision App',
  subtitle: 'put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  // this stops from refreshing the page and just runs the code in the function
  const option = e.target.elements.option.value;

  if(option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      initializeApp();
  }
}

const removeAll = () => {
  app.options = [];
  initializeApp();
}

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum)
};

const appRoot = document.getElementById('app');

const numbers = [55,101,1000];

const initializeApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

    
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>

      {
        // numbers.map((number) => {
        //   return <p key={number}>Number: {number}</p>;
        // })
      }

      <ol>
        {
          app.options.map((option) =>{
            console.log(option)
            return <li key={option}>Option: {option}</li>
          })
        }
      </ol>


      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

initializeApp();
