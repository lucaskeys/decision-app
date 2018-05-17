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
      This is a single option
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}



class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        Add option component here
      </div>
    )
  }
}



// When rendering, always use ReactDOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
