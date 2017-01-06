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
        <h3>{this.state.name} - {this.props.login}</h3>
        <hr />
      </div>
    );
  }

});

var Form = React.createClass({
  handleSubmit : function() {

  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="github logins" />
        <button>Add</button>
      </form>
    );
  }
})

var Main = React.createClass({
  getInitialState: function() {
    return {logins:[]};
  },

  render: function() {
     var cards = this.state.logins.map(function(login) {
       return (<Card login={login} />);
     });

    return (
      <div>
        <Form />
        {cards}
      </div>
    )
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById("main")
)
