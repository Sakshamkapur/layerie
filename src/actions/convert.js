const dimensions = {
    "vertical": {width: 300,height: 600},
    "horizontal": {width: 468,height: 200},
    "square": {width: 1000,height: 1000},
    "default": {width: 1080,height: 1080}
}

export default function(json,option){
    let {children} = json,arr=[];
    let {type} = option;
    let originalDimension = {width: json.width,height: json.height};
    let dimension = dimensions[type];
    children.forEach(layer => {
        let percVals = {
            x: ((layer.x / originalDimension.width).toFixed(12)),
            y: ((layer.y / originalDimension.height).toFixed(12)),
            width: ((layer.width / originalDimension.width).toFixed(12)),
            height: ((layer.height / originalDimension.height).toFixed(12))
        }
       
        let newDimension = {
            x: Math.round((percVals.x * dimension.width)),
            y: Math.round((percVals.y * dimension.height)),
            width: Math.round((percVals.width * dimension.width)),
            height: Math.round((percVals.height * dimension.height))
        }

        if(layer.type === "Image"){

            let originalRatio = layer.width/layer.height;
            let newRatio = newDimension.width/newDimension.height;
    
            if(originalRatio !== newRatio){
                var changedValue = 0;
                if((newRatio > 1)){
                    changedValue = originalRatio * newDimension.height;
                    newDimension.x = newDimension.x + ((newDimension.width-changedValue)/2);
                    newDimension.width = changedValue;
                }
                if((newRatio < 1)){
                    changedValue = newDimension.width / originalRatio;
                    newDimension.y = newDimension.y + ((newDimension.height-changedValue)/2);
                    newDimension.height = changedValue;
                }
            }
        }


        arr.unshift({...layer,...newDimension});

    });

    return arr;
}