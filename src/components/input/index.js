import React from 'react';
import styles from './index.module.css';

function Input(props) {
    var {json,setJson} = props;
    return (
        <React.Fragment>
            <textarea className={styles.jsoninput} value={json} onChange={(e)=>setJson(e.target.value)} placeholder="Please Input a Json..">

            </textarea>
        </React.Fragment>
    );
}

export default Input;