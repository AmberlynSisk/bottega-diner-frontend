import React, { Component } from 'react';
import ReactModal from 'react-modal';

import RandomMessage from '../randomMessage';
import CartTotal from './cartTotal';

ReactModal.setAppElement(".app-wrapper");

export default class OrderConfirmationModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "600px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        }
    }

    render() {
        return (
            <ReactModal 
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }}
                isOpen={this.props.confirmationModalIsOpen}
            >
                <div className="submit-order-message-wrapper">
                    <RandomMessage />
                    <CartTotal />
                    <button 
                    className="checkout-btn" 
                    type="button"
                    onClick={() => {
                        this.props.handleCheckoutClick()
                    }}
                    >
                        Checkout
                    </button>
                </div>
            </ReactModal>
        );
    }
}