import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomerList from './customerList'
import CustomerAddress from './customerAddress'
import styles from './style.module.css'


class App extends Component {

    render() {
        return (
            <>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Customer Info"/>
                </head>
                <h2 style={{textAlign:'center'}}>Customer Details</h2>
                <div className={styles.rootDiv}>
                <CustomerList/>
                <CustomerAddress/>
                </div>
            </>
        );
    }
}

function mapStateToProps({ customerDetails, selectedCustomer }) {
    return {
        customerDetails,
        selectedCustomer
    }
}

export default connect(mapStateToProps)(App)
