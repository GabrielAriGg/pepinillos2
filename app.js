
var pescado=[18,1,15];
var pollo=[23,0,3];
var huevo=[13,1,11];
var pavo=[29,0,8];
var yogurt=[3,13,3];
//----------------------proteina----arriba----
var pan=[7,56,1];
var arroz=[6,86,0];
var fruta=[2,9,15];
var pasta=[13,75,2];
var vegetales=[1,7,0];
//--------------carboidratos-----arriba----
var aguacate=[2,9,15];
var salmon=[21,0,6];
var atun=[28,0,9];
//---------------grasas----------arriba
var alimento1;
var alimento2;
var alimento3;
var choose;
// var tipoNumero;
// var operacion;
// var fondo;

document.getElementById("pescado").addEventListener("click",pescadito);
document.getElementById("pollo").addEventListener("click",pollito);
document.getElementById("huevo").addEventListener("click",huevito);
document.getElementById("pavo").addEventListener("click",pavito);
document.getElementById("yogurt").addEventListener("click",yogursito);

document.getElementById("pan").addEventListener("click",panesito);
document.getElementById("arroz").addEventListener("click",arrosito);
document.getElementById("fruta").addEventListener("click",frutita);
document.getElementById("pasta").addEventListener("click",pastita);
document.getElementById("vegetales").addEventListener("click",vegetalitos);

document.getElementById("aguacate").addEventListener("click",aguacatito);
document.getElementById("salmon").addEventListener("click",salmonsito);
document.getElementById("atun").addEventListener("click",atunsito);

document.getElementById("calcular2").addEventListener("click",calcular2);
document.getElementById("opcion1").addEventListener("click",choose1);
document.getElementById("opcion2").addEventListener("click",choose2);
function choose1(e){
    document.getElementById("opcion1").style.background = "red";
    document.getElementById("opcion2").style.background = "yellowgreen";
    choose=1;
    e.preventDefault();
}
function choose2(e){
    document.getElementById("opcion2").style.background = "red";
    document.getElementById("opcion1").style.background = "yellowgreen";
    choose=0;
    e.preventDefault();
}
//------------------------------------------------*********************************************
function pescadito(e){
    document.getElementById("pescado").style.background = "red";
    document.getElementById("pollo").style.background = "yellowgreen";
    document.getElementById("huevo").style.background = "yellowgreen";
    document.getElementById("pavo").style.background = "yellowgreen";
    document.getElementById("yogurt").style.background = "yellowgreen";

    alimento1=pescado;
    pruebaresultado1.textContent = "pescado";
    e.preventDefault();
}
function pollito(e){
    document.getElementById("pescado").style.background = "yellowgreen";
    document.getElementById("pollo").style.background = "red";
    document.getElementById("huevo").style.background = "yellowgreen";
    document.getElementById("pavo").style.background = "yellowgreen";
    document.getElementById("yogurt").style.background = "yellowgreen";

    alimento1=pollo;
    pruebaresultado1.textContent = "pollo";
    e.preventDefault();
}
function huevito(e){
    document.getElementById("pescado").style.background = "yellowgreen";
    document.getElementById("pollo").style.background =  "yellowgreen";
    document.getElementById("huevo").style.background =  "red";
    document.getElementById("pavo").style.background = "yellowgreen";
    document.getElementById("yogurt").style.background = "yellowgreen";
    alimento1=huevo;
    pruebaresultado1.textContent = "huevo";
    e.preventDefault();
}
function pavito(e){
    document.getElementById("pescado").style.background = "yellowgreen";
    document.getElementById("pollo").style.background =  "yellowgreen";
    document.getElementById("huevo").style.background =  "yellowgreen";
    document.getElementById("pavo").style.background = "red";
    document.getElementById("yogurt").style.background = "yellowgreen";
    alimento1=pavo;
    pruebaresultado1.textContent = "pavo";
    e.preventDefault();
}
function yogursito(e){
    document.getElementById("pescado").style.background = "yellowgreen";
    document.getElementById("pollo").style.background =  "yellowgreen";
    document.getElementById("huevo").style.background =  "yellowgreen";
    document.getElementById("pavo").style.background = "yellowgreen";
    document.getElementById("yogurt").style.background =  "red";
    alimento1=yogurt;
    pruebaresultado1.textContent = "yogurt";
    e.preventDefault();
}
//------------------------------------------------*********************************************

function panesito(e){
    document.getElementById("pan").style.background = "red";
    document.getElementById("arroz").style.background = "yellowgreen";
    document.getElementById("fruta").style.background = "yellowgreen";
    document.getElementById("pasta").style.background = "yellowgreen";
    document.getElementById("vegetales").style.background = "yellowgreen";
    alimento2=pan;
    pruebaresultado2.textContent = "pan";

    e.preventDefault();
}
function arrosito(e){
    document.getElementById("pan").style.background = "yellowgreen";
    document.getElementById("arroz").style.background = "red";
    document.getElementById("fruta").style.background = "yellowgreen";
    document.getElementById("pasta").style.background = "yellowgreen";
    document.getElementById("vegetales").style.background = "yellowgreen";
    alimento2=arroz;
    pruebaresultado2.textContent = "arroz";

    e.preventDefault();
}
function frutita(e){
    document.getElementById("pan").style.background = "yellowgreen";
    document.getElementById("arroz").style.background = "yellowgreen";
    document.getElementById("fruta").style.background = "red";
    document.getElementById("pasta").style.background = "yellowgreen";
    document.getElementById("vegetales").style.background = "yellowgreen";
    alimento2=fruta;
    pruebaresultado2.textContent = "fruta";

    e.preventDefault();
}
function pastita(e){
    document.getElementById("pan").style.background ="yellowgreen" ;
    document.getElementById("arroz").style.background = "yellowgreen";
    document.getElementById("fruta").style.background = "yellowgreen";
    document.getElementById("pasta").style.background = "red";
    document.getElementById("vegetales").style.background = "yellowgreen";
    alimento2=pasta;
    pruebaresultado2.textContent = "pasta";

    e.preventDefault();
}
function vegetalitos(e){
    document.getElementById("pan").style.background = "yellowgreen";
    document.getElementById("arroz").style.background = "yellowgreen";
    document.getElementById("fruta").style.background = "yellowgreen";
    document.getElementById("pasta").style.background = "yellowgreen";
    document.getElementById("vegetales").style.background = "red";
    alimento2=vegetales;
    pruebaresultado2.textContent = "vegetales";

    e.preventDefault();
}
//------------------------------------------------*********************************************
function aguacatito(e){
    document.getElementById("aguacate").style.background = "red";
    document.getElementById("salmon").style.background = "yellowgreen";
    document.getElementById("atun").style.background = "yellowgreen";

    alimento3=aguacate;
    pruebaresultado3.textContent = "aguacate";

    e.preventDefault();
}
function salmonsito(e){
    document.getElementById("aguacate").style.background = "yellowgreen";
    document.getElementById("salmon").style.background = "red";
    document.getElementById("atun").style.background = "yellowgreen";

    alimento3=salmon;
    pruebaresultado3.textContent = "salmon";

    e.preventDefault();
}
function atunsito(e){
    document.getElementById("aguacate").style.background = "yellowgreen";
    document.getElementById("salmon").style.background = "yellowgreen";
    document.getElementById("atun").style.background = "red";

    alimento3=atun;
    pruebaresultado3.textContent = "atun";

    e.preventDefault();
}
//------------------------------------------------*********************************************
function calcular2(){
    
    document.getElementById("calcular2").style.background = "red";
    var proteina = document.getElementById('proteina').value;
    var carbohidratos = document.getElementById('carbohidratos').value;
    var grasa = document.getElementById('grasa').value;
    var caloria = document.getElementById('calorias').value;
    var porcentajeuno = document.getElementById('porcentaje1').value;
    var porcentajedos = document.getElementById('porcentaje2').value;
    var porcentajetres = document.getElementById('porcentaje3').value;
    porcentajePRO=(porcentajeuno/100)*caloria;
    porcentajeCARB=(porcentajedos/100)*caloria;
    porcentajeGRA=(porcentajetres/100)*caloria;
    
    if (choose==1) {
        x1=(porcentajePRO/4);
        x2=(porcentajeCARB/4);
        x3=(porcentajeGRA/9);
        
    } else {
        x1=parseFloat(proteina);
        x2=parseFloat(carbohidratos);
        x3=parseFloat(grasa);
        
        
    }
   
    


   

    a1=parseFloat(alimento1[0]);
    b1=parseFloat(alimento1[1]);
    c1=parseFloat(alimento1[2]);
    a2=parseFloat(alimento2[0]);
    b2=parseFloat(alimento2[1]);
    c2=parseFloat(alimento2[2]);
    a3=parseFloat(alimento3[0]);
    b3=parseFloat(alimento3[1]);
    c3=parseFloat(alimento3[2]);
    determinanteA=a1*(b2*c3-b3*c2)-a2*(b1*c3-b3*c1)+a3*(b1*c2-b2*c1);
    determinante1=x1*(b2*c3-b3*c2)-a2*(x2*c3-b3*x3)+a3*(x2*c2-b2*x3);
    determinante2=a1*(x2*c3-b3*x3)-x1*(b1*c3-b3*c1)+a3*(b1*x3-x2*c1);
    determinante3=a1*(b2*x3-x2*c2)-a2*(b1*x3-x2*c1)+x1*(b1*c2-b2*c1);
    porcion1=(determinante1/determinanteA);
    porcion2=(determinante2/determinanteA);
    porcion3=(determinante3/determinanteA);
    porcionGR1=porcion1*100;
    porcionGR2=porcion2*100;
    porcionGR3=porcion3*100;    

    porcionr1.textContent=porcion1+" porciones";
    porcionr2.textContent=porcion2+" porciones";
    porcionr3.textContent=porcion3+" porciones";
    GR1.textContent=porcionGR1+" gr";
    GR2.textContent=porcionGR2+" gr";
    GR3.textContent=porcionGR3+" gr";

}

// document.getElementById("potencia").addEventListener("click",potencia);
// document.getElementById("raiz").addEventListener("click",raiz);
// document.getElementById("calcular").addEventListener("click",calcular); /*para que pueda acceder a la variable cambiada a en el elemento deve estar por una funcion*/  
// document.getElementById("rectangular").addEventListener("click",rectangular);
// document.getElementById("polar").addEventListener("click",polar);
// document.getElementById("exponencial").addEventListener("click",exponencial);

document.getElementById("reset").addEventListener("click",reset);

function reset(e){
    document.getElementById("calcular2").style.background = "yellowgreen";
    pruebaresultado1.textContent="";
    pruebaresultado2.textContent="";
    pruebaresultado3.textContent="";

    porcionr1.textContent="";
    porcionr2.textContent="";
    porcionr3.textContent="";

    GR1.textContent="";
    GR2.textContent="";
    GR3.textContent="";

    e.preventDefault();
}

// function rectangular(e){
//     document.getElementById("rectangular").style.background = "red";
//     document.getElementById("polar").style.background = "yellowgreen";
//     document.getElementById("exponencial").style.background = "yellowgreen";
//     tipoNumero=1;
//     e.preventDefault();
// }

// function polar(e){
//     document.getElementById("rectangular").style.background = "yellowgreen";
//     document.getElementById("polar").style.background = "red";
//     document.getElementById("exponencial").style.background = "yellowgreen";
//     tipoNumero=2;
//     e.preventDefault();
// }

// function exponencial(e){
//     document.getElementById("rectangular").style.background = "yellowgreen";
//     document.getElementById("polar").style.background = "yellowgreen";
//     document.getElementById("exponencial").style.background = "red";
//     tipoNumero=3;
//     e.preventDefault();
// }


// function potencia(e){
//     document.getElementById("potencia").style.background = "red";
//     document.getElementById("raiz").style.background = "yellowgreen";
//     operacion="*";
// e.preventDefault();
// }

// function raiz(e){
//     document.getElementById("potencia").style.background = "yellowgreen";
//     document.getElementById("raiz").style.background = "red";
//    operacion="r";
//    e.preventDefault();
// }

// function init(){
//     var final =document.getElementById('final');
// }

// function calcular(){
//     document.getElementById("calcular").style.background = "red";
    
//     var k;
//  switch (operacion) {

//     case "r": if (tipoNumero==1) {                                          //RAICES--------------------------------------------
//         var numeror = document.getElementById('numerr').value;
//         var numeroi = document.getElementById('numeri').value;
//         var numeroe = document.getElementById('grado').value;
//         numeroee=parseFloat(numeroe);
//         numerorr=parseFloat(numeror);
//         numeroii=parseFloat(numeroi);
        
//         numerodd=Math.atan((numeroii/numerorr));// con if if vamos a determinar el angulo correctamente
//         if (numeroii>0 && numerorr<0) {
//             numerodd=(Math.PI)-numerodd;
//         }
//         if (numeroii<0 && numerorr<0) {
//             numerodd=(Math.PI)+numerodd;
//         }
//         if (numeroii<0 && numerorr>0) {
//             numerodd=(2*(Math.PI))-numerodd;
//         }
//         numerocc=Math.sqrt((Math.pow(numeroii,2))+(Math.pow(numerorr,2)));
//         raizh=Math.pow(numerocc,(1/numeroee));
              
//         // document.getElementById('resultado5').value=raizh;

//     } else {
        
    
//               var numeroc = document.getElementById('modulo').value;
//               var numerod = document.getElementById('angulo').value;
//               var numeroe = document.getElementById('grado').value;
//               numerocc=parseFloat(numeroc);
//               numerodd=parseFloat(numerod);
//               numeroee=parseFloat(numeroe);
//               raizh=Math.pow(numerocc,(1/numeroee));
              
//             //   document.getElementById('resultado5').value=raizh;
//     }
            
// for (var k = 0; k < numeroee; k++) {
//     angulo=((numerodd)+(2*(Math.PI)*k))/numeroee;
//     // angulocadena=angulo;
//     // angulocadena=parse
//     var raizh2=raizh.toFixed(3);
//     var angulo2=angulo.toFixed(3)
//       final.textContent = final.textContent + raizh2 + " < " + angulo2 + " rad" +" | ";

//       real=(raizh)*Math.cos(angulo);
//       img =(raizh)*Math.sin(angulo);
//       var real2=real.toFixed(3);
//       var img2=img.toFixed(3)
//       if (img2>0) {
//         img3=" + "+img2;
//       } else {
//         img3=img2;
//       }
      
//       abajo.textContent = abajo.textContent + real2 + " " + img3 +"i"+ " ▭ "; 
      
// }
        
//         break;
//         case "*":if (tipoNumero==1) {                                                //POTENCIA-------------------------------------
//             var numeror = document.getElementById('numerr').value;
//             var numeroi = document.getElementById('numeri').value;
//             var numeroe = document.getElementById('grado').value;
//             numeroee=parseFloat(numeroe);
//             numerorr=parseFloat(numeror);
//             numeroii=parseFloat(numeroi);

//             numerodd=Math.atan((numeroii/numerorr));// con if if vamos a determinar el angulo correctamente
//             if (numeroii>0 && numerorr<0) {
//                 numerodd=(Math.PI)-numerodd;
//             }
//             if (numeroii<0 && numerorr<0) {
//                 numerodd=(Math.PI)+numerodd;
//             }
//             if (numeroii<0 && numerorr>0) {
//                 numerodd=(2*(Math.PI))-numerodd;
//             }
//             numerocc=Math.sqrt((Math.pow(numeroii,2))+(Math.pow(numerorr,2)));
//             // raizh=Math.pow(numerocc,(1/numeroee));
                  
//             // document.getElementById('resultado5').value=raizh;
    
//         } else {
            
        
//                   var numeroc = document.getElementById('modulo').value;
//                   var numerod = document.getElementById('angulo').value;
//                   var numeroe = document.getElementById('grado').value;
//                   numerocc=parseFloat(numeroc);
//                   numerodd=parseFloat(numerod);
//                   numeroee=parseFloat(numeroe);
//                 //   raizh=Math.pow(numerocc,(1/numeroee));
                  
//                 //   document.getElementById('resultado5').value=raizh;
//         }

//               potenciaNumero=Math.pow(numerocc,numeroee);
//               anguloNumero=numeroee*numerodd;
//               var vuelta=2*Math.PI;
//               determinacion=anguloNumero/vuelta;
//               var determinacion2=parseInt(determinacion);

//               for (let index = 0; index <=determinacion2; index++) {
//                 if (anguloNumero>vuelta) {
//                     anguloNumero=anguloNumero-vuelta;
//                 }
                
//               }
//               var anguloNumero2 = anguloNumero.toFixed(3);
//               final.textContent = final.textContent + potenciaNumero + " < " + anguloNumero2 +" rad"+"\n";
        
//               real=(potenciaNumero)*Math.cos(anguloNumero);
//               img =(potenciaNumero)*Math.sin(anguloNumero);
//               var real2=real.toFixed(3);
//               var img2=img.toFixed(3)
//               if (img2>0) {
//                 img3=" + "+img2;
//               } else {
//                 img3=img2;
//               }
//               abajo.textContent = abajo.textContent + real2 + " " + img3 +"i"+"   |   "; 
            
        
           

//             break;
  

//     default:
//         break;
// } 
// }







