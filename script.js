function bclick(val){
document.getElementById("screen").value+=val
}
function clears(){
    document.getElementById("screen").value=""
}
function eclick(){
    var txt=document.getElementById("screen").value
    var res=eval(txt)
    document.getElementById("screen").value=res
}