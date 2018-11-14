/*function calculatePo(base,pow){
   var resul= Math.pow(base,pow);//recibe dos numeros las las bases de la potencia
    document.write("<h1>"+base+" elevado a "+pow+" s igual a "+resul+"</h1>");
}
function setValue(){
    var base=parseInt(prompt("ingresè la base"));
    var power=parseInt(prompt("ingresè la potencia"));
    while (isNaN(base) || base<=0 || power<=0 || isNaN(power)) {
        alert("Solo puede ingresar un nùmero");
        var base=parseInt(prompt("ingresè la base"));
        var power=parseInt(prompt("ingresè la potencia"));
    }
    calculatePo(base,power );
}
setValue();
*/
//utilizando funciones resolver  la siguiente ecuacion ax^2+bx+c
//"<h1>De la funcion aX^2+bX+c <br>"+"a= "+a+"<br>"+"b= "+b+"<br>"+"c= "+c+"<br>"+"<br>x="+x+"<br>x="+x2+"</h1>"
function solve(a,b,c){
    var res=Math.pow(b,2)-(4*((a)*(c)));
    var y=-(b)-Math.pow(res,0.5);
    var x=y/(2*(a));
    var res2=Math.pow(b,2)-(4*((a)*(c)));
    var y2=-(b)+Math.pow(res2,0.5);
    var x2=y2/(2*(a));
    document.write("El valor de x positivo es igual a "+x2+" <br>");
    document.write("El valor de x negativo es igual a "+x);
}
function val(){
    alert("De la funcion ax^2+bx+c, dar los valores de a,b y c");
    var a=parseInt(prompt("ingresé valor de a "));
    var b=parseInt(prompt("ingresé valor de b "));
    var c=parseInt(prompt("ingresé valor de c "));
    while (isNaN(a)||isNaN(b)||isNaN(c) ){
        alert("No es un numero, por favor digite un numero");
        var a=parseInt(prompt("ingresè valor de a "));
        var b=parseInt(prompt("ingresè valor de b "));
        var c=parseInt(prompt("ingresè valor de c "));
    }
    solve(a,b,c)
}

val()
