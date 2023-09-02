function filtername(name) {
    if (name===undefined){
        name = "unknow";
    }
    if(name.startsWith(' ') || name.endsWith(" ")){
        name=name.trim()
    }
    if(name.length>10){
        name=name.substring(0,11)
    }
    return name 
}
module.exports=filtername