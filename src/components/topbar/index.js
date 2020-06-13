import React from 'react';
import styles from './index.module.css';
import download from '../../actions/download';
import validate from '../../actions/validate';

const options=["Vertical","Horizontal","Square","Default"]

function Section({className,children}){
  return <div className={className}>
    {children}
  </div>
}

function TopBar(props) {
  let {option,setOption,active,stage,json,setActive} = props;
  return (
    <React.Fragment>
        <Section className={styles.actions}>
          <Section>
            <select value={option.type} onChange={(e)=>setOption({...option,type:e.target.value})}>
              {options.map((text,key)=>(<option key={key} value={text.toLowerCase()}>{text}</option>))}
            </select>
          </Section>
          <Section>
            {active !== "input" && stage && <button style={{marginRight: "10px"}} onClick={()=>download(stage)}>Download Json</button>}
            <button className={styles.secondary} onClick={()=>{
              let validation = validate(json);
              if(validation.status){
                setActive(active=>(active === "input"?"canvas":"input"))
              }else{
                alert(validation.text);
              }
            }}>{active === "input"? "View Canvas":"Change Json"}</button>
          </Section>
        </Section>
    </React.Fragment>
  );
}

export default TopBar;
