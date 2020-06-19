function insert(num) {
    document.getElementById('textview').value = document.getElementById('textview').value + num;
}

function equal(){
    var exp = document.getElementById('textview').value;
    if(exp){
        document.getElementById('textview').value = eval(document.getElementById('textview').value);
    }
}

function Clear(){
    var exp = document.getElementById('textview').value
    document.getElementById('textview').value = exp.substring(0,exp.length-1);


}

function ClearAll(){
    document.getElementById('textview').value = "";
}