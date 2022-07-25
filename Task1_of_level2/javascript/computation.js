function emptyscreen(){
    document.getElementById("answer").value=" ";
}

function output(value){
    document.getElementById("answer").value += value;
}

function compute(){
    var a = document.getElementById("answer").value;
    document.getElementById("answer").value = eval(a);
}
// function compute()
// {
//     var p=document.getElementById("answer").value;
//     var q=eval(p);
//     document.getElementById("answer").value=q;
// }