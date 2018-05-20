const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
};

const func = function() {
  console.log(this);
}

const getName = obj.getName.bind(obj);

console.log(getName);

class IndecisionApp extends React.Component {
  render() {
    const headerTitle = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <div>
        <Header title={headerTitle} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handle pick")
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}



class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options)
    alert("removeAll")
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class AddOption extends React.Component {

  onFormSubmit(e) {
    e.preventDefault;
    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}



// When rendering, always use ReactDOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
