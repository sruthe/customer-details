import React from "react";
import {connect} from "react-redux";
import styles from './style.module.css'


function CustomerAddress(props) {
    let {customerDetails=[], selectedCustomer=1} = props;
    debugger
    let address = customerDetails.length>1? customerDetails[selectedCustomer].address:[];
    return(
        <div style={{width:'25%'}}>
            {address.map((item, index)=>{
                return (
                    <>
                    <div className={styles.card}>
                        <h3>Address {index+1}</h3>
                        <p>{item.address_line_1}</p>
                        <p>{item.address_line_2}</p>
                        <p>{item.city}</p>
                        <p>{item.pincode}</p>
                    </div>
                    </>
                );
            })}
        </div>
    );
}

function mapStateToProps({ customerDetails, selectedCustomer }) {
    return {
        customerDetails,
        selectedCustomer
    }
}

export default connect(mapStateToProps)(CustomerAddress);