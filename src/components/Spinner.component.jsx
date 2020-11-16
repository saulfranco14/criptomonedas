import React, { Fragment } from 'react';
import '../styles/Spinner.css'

const Spinner = () => {
    return (
        <Fragment>
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </Fragment>
    );
}
 
export default Spinner;