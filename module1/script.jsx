/** @jsx React.DOM */

var Button = React.createClass({
  
  localHandleClick: function() {
    this.props.localHandleClick(this.props.increment);
  },
  
  render : function() {
    return (
        <button onClick={this.localHandleClick}>increment {this.props.increment}</button>
    )
  }
});

var Result = React.createClass({
  render: function() {
    return (
      <div>{this.props.localCounter}</div>
    )
  }
})

var Main = React.createClass({

  getInitialState: function() {
    return {counter:0}
  },
  
  handleClick: function(inc) {
    this.setState({counter: this.state.counter + inc});
  },
  
  render: function() {
    return (
        <div>
          <Button localHandleClick={this.handleClick} increment={1} />
          <Button localHandleClick={this.handleClick} increment={5} />
          <Button localHandleClick={this.handleClick} increment={10} />
          <Result localCounter={this.state.counter} />
        </div>
    )
  }
})

React.render(
  <Main />,
  document.getElementById('main')
)
