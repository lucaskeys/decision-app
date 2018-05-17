'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // this stops from refreshing the page and just runs the code in the function
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    initializeApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  initializeApp();
};

var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var initializeApp = function initializeApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        console.log(option);
        return React.createElement(
          'li',
          { key: option },
          'Option: ',
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

initializeApp();
