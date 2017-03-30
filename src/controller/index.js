import * as Actions from '../actions'

export default class Controller {

    constructor(store) {
        this.store = store;
    }

    openTodos(cb) {
        this.store.dispatch(Actions.setVisibilityFilter('1', 'SHOW_ALL'));
        this.store.dispatch(Actions.setVisibilityFilter('2', 'SHOW_ALL'));
        window.require(['dist/todos'], (Todos) => {
            cb(null, Todos.default);
        });
    }
}

