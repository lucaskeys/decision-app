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
  render() {
    return (
      <div>
        <button onCilck={}>What should I do?</button>
      </div>
    )
  }
}



class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}



// When rendering, always use ReactDOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
