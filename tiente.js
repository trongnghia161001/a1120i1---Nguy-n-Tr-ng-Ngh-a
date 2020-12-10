function check(){
    let a,b,c,doi;
    a=parseInt(document.getElementById("amount").value);
    b=parseInt(document.getElementById("test1").value);
    c=parseInt(document.getElementById("test2").value);

    if (b==0&&c==0){
    doi=a/23000;
}
    if (b==0&&c==1){
    doi=a*1;
}
    if (b==1&&c==0){
    doi=a*1;
}
    if (b==1&&c==1){
    doi=a*23000;
}
    document.getElementById("in").value=doi;
}