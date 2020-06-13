function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
export default function(text){
    if(text.trim().length === 0){
        return {status: false,text: "Please Add Something!"};
    }else if(!isJson(text)){
        return {status: false,text: "Looks Like Its Not A Json!"};
    }else if(!!!JSON.parse(text).children){
        return {status: false,text: "Children Property is Mandatory!"};
    }
    return {status:true};
}