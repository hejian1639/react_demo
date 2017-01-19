define(function(require){
  var React = require('react');
  var ReactDOM = require('react-dom');

  var ReactRouter = require('ReactRouter');
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var Link = ReactRouter.Link;
    var IndexLink = ReactRouter.IndexLink;
    var browserHistory = ReactRouter.browserHistory;
  var History = require('history');


var ACTIVE = { color: 'red' }

var App = function( ref ) {
  return (
  <div style={{padding:'10'}}>
    <h1>APP!</h1>
    <ul>
      <li><Link      to="demo01/"           activeStyle={ACTIVE}>/</Link></li>
      <li><IndexLink to="demo01/"           activeStyle={ACTIVE}>/IndexLink</IndexLink></li>

      <li><Link      to="demo01/users"      activeStyle={ACTIVE}>/users</Link></li>
      <li><IndexLink to="demo01/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

      <li><Link      to="demo01/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
      <li><Link      to={{ pathname: 'demo01/users/ryan', query: { foo: 'bar' } }}
                                      activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

      <li><Link      to="demo01/about"      activeStyle={ACTIVE}>/about</Link></li>
    </ul>

    {ref.children}
  </div>
);
};

var Index = () => (
  <div>
    <h2>Index!</h2>
  </div>
)

var Users = ({ children }) => (
  <div>
    <h2>Users</h2>
    {children}
  </div>
)

var UsersIndex = () => (
  <div>
    <h3>UsersIndex</h3>
  </div>
)

var User = ({ params: { id } }) => (
  <div>
    <h3>User {id}</h3>
  </div>
)

var About = () => (
  <div>
    <h2>About</h2>
  </div>
)
function withExampleBasename(history, dirname) {
  return History.useBasename(() => history)({ basename: `/${dirname}` })
}

  function Root() {
        this.AppView = React.createClass({

          render: function () {
          
            return (
              <Router history={withExampleBasename(browserHistory, '')}>
                <Route path="demo01/" component={App}>
                  <IndexRoute component={ () => (
                                                  <div>
                                                    <h2>Index!</h2>
                                                  </div>
                                                )}/>
                  <Route path="about" component={About}/>
                  <Route path="users" component={Users}>
                    <IndexRoute component={UsersIndex}/>
                    <Route path=":id" component={User}/>
                  </Route>
                </Route>
              </Router>
            );
          }
    });
      this.init = function () {
        ReactDOM.render(<this.AppView />, document.getElementById('example'));
      };
  }

  return Root;
});
