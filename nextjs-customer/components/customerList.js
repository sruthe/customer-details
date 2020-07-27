import React from "react";
import {connect} from "react-redux";
import {setSelectedCustomer} from '../redux/actions'
import styles from './style.module.css'


function CustomerList(props) {
    let {customerDetails=[], selectedCustomer, dispatch} = props;

    function setSelectedRow(index) {
        dispatch(setSelectedCustomer(index));
    }

    return(
        <div>
            <table>
                <tr className={styles.row}>
                    <th className={styles.header}>ID</th>
                    <th className={styles.header}>Name</th>
                    <th className={styles.header}>Age</th>
                </tr>
                {
                    customerDetails.map((detail,index) => {
                            return(
                                <tr className={index===selectedCustomer?styles.selected:styles.row} key={index} onClick={()=>{setSelectedRow(index)}}>
                                    <td className={styles.cell}>{detail.id}</td>
                                    <td className={styles.cell}>{detail.name}</td>
                                    <td className={styles.cell}>{detail.age}</td>
                                </tr>
                            );
                        }
                    )}
            </table>
            </div>
    );
}

function mapStateToProps({ customerDetails, selectedCustomer }) {
    return {
        customerDetails,
        selectedCustomer
    }
}
export default connect(mapStateToProps)(CustomerList);