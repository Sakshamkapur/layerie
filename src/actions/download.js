export default function(stage){
    let obj = (stage.current.toObject())
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    
    let el = document.createElement('a');
    el.setAttribute("href", "data:"+data);
    el.setAttribute("download", "data.json");
    el.click();
    el.remove();
}