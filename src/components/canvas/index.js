import React,{useEffect,useRef} from 'react';
import { Stage, Layer, Circle, Rect } from 'react-konva';
import URLImage from '../urlimage';
import convert from '../../actions/convert';
import styles from './index.module.css';
import '../../App.css';

const dimensions = {
    "vertical": {width: 300,height: 600},
    "horizontal": {width: 468,height: 200},
    "square": {width: 1000,height: 1000},
    "default": {width: 1080,height: 1080}
}

function Canvas(props) {
    var {json,option,setStage} = props;
    json = JSON.parse(json);
    var stage = useRef(null)

    useEffect(()=>{
        setStage(stage);
    },[setStage])

    let layers = (convert(json,option));
    return (
        <React.Fragment>
            <Stage ref={stage} className={styles.center} width={dimensions[option.type].width} height={dimensions[option.type].height}>
                {layers.map(eleProps=>(<Layer>
                    {eleProps.type === "Image"? <URLImage src={eleProps.exportedAsset} {...eleProps} />
                        :eleProps.type === "Rectangle"?<Rect {...eleProps} />:eleProps.type === "Circle"? 
                        <Circle {...eleProps} />
                    :null}
                </Layer>))}
            </Stage>
        </React.Fragment>
    );
}

export default Canvas;
