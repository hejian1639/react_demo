define(function (require) {

    var React = require('react');
    var ReactDOM = require('react-dom');


    require('css!jmui.ios.core');
    require('jmui.ios.core');
    var jmui = require('jmui');
    //require('react-addons-css-transition-group');
    var ReactRouter = require('ReactRouter');
    var History = require('history');
    var browserHistory = ReactRouter.browserHistory;

    //  var Framework = require('app/views/Framework');
    //  var Index = require('app/views/Index');

    var Framework = ({location, children}) => (
        <jmui.TransitionPages location={location}>
            {children}
        </jmui.TransitionPages>
    );
    var Index = () => (
        <div>
            <h2>Index!</h2>
        </div>
    );

    function getRoutes() {
        return (
            <ReactRouter.Route path='demo01/' component={Framework}>
                <ReactRouter.IndexRoute component={Index} />
                <ReactRouter.Route path='components' />
            </ReactRouter.Route>
        );
    }

    var Root = React.createClass({

        render() {
            return (
                <jmui.View>
                    <ReactRouter.Router history={this.props.history}>
                        {this.props.routes}
                    </ReactRouter.Router>
                </jmui.View>
            )
        }
    });

    function withExampleBasename(history, dirname) {
        return History.useBasename(() => history)({ basename: `/${dirname}` })
    }

    function App() {


        this.AppView = React.createClass({


            render: function () {

                var routes = getRoutes()


                return (
                    <Root history={withExampleBasename(browserHistory, '')} routes={routes} />
                );
            }
        });

        this.init = function () {
            ReactDOM.render(<this.AppView />, document.getElementById('example'));
        };
    }

    return App;

});
