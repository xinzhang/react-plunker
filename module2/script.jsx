// Code goes here
var Card = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    var component = this;
    $.get("https://api.gethub.com/users/" + this.props.login, function(data) {
      component.setState(data);
    })
  },

  render: function() {
    return (
      <div>
        <img src="{this.state.avatar_url}" width="80" />
        <h3>{this.state.name}</h3>
        <hr />
      </div>
    );
  }
  
});


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Card login="petehunt" />
        <Card login="spicy" />
      </div>
    )
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById("main")
)
