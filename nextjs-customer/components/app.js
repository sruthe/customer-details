import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomerList from './customerList'
import CustomerAddress from './customerAddress'

class App extends Component {

    render() {
        return (
            <>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Customer Info"/>
                </head>
                <h2 style={{textAlign:'center'}}>Customer Details</h2>
                <div style={{display:'flex', justifyContent:'space-around', alignItems:'flex-start', marginTop:'5%'}}>
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
