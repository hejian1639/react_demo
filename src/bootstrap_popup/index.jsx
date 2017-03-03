
import React from 'react'
import 'css!bootstrap'
import 'css!bootstrap-theme'
import BootstrapButton from './button'
import BootstrapModal from './modal'
import { browserHistory } from 'ReactRouter'


module.exports = React.createClass({

   

    openModal: function () {
        this.refs.modal.open();
        // location.href += '/dialog';
        browserHistory.push(browserHistory.getCurrentLocation().pathname + '/dialog');
    },
    closeModal: function () {
        this.refs.modal.close();
    },
    handleModalDidClose: function () {
        console.log("The modal has been dismissed!");
    },
    handleCancel: function () {
        if (confirm('Are you sure you want to cancel?')) {
            this.refs.modal.close();
        }
    },
    render: function () {
        var modal = (
            <BootstrapModal
                ref="modal"
                confirm="OK"
                cancel="Cancel"
                onCancel={this.handleCancel}
                onConfirm={this.closeModal}
                onHidden={this.handleModalDidClose}
                title="Hello, Bootstrap!">
                This is a React component powered by jQuery and Bootstrap!
            </BootstrapModal>
        );
        return (
            <div >
                {modal}
                <BootstrapButton onClick={this.openModal} className="btn-default" style={{ margin: '10px' }}>
                    Open modal
                </BootstrapButton>
            </div>

        );
    }
});




