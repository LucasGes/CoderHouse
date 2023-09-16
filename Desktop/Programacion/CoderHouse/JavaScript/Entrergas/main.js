    let opcion
    let rta
    let final

    let avion = 15000
    let barco = 10000
    let auto = 2000
    let bicicleta = 800

    menu()
    
function menu(){
    opcion = parseInt (prompt(
        "1- avion 2- barco 3- auto  4- bicicleta  5 - Salir - Ingresa una opcion"));
  
        switch (opcion) {

            case 1 :
            alert ("Eligio el avion y tiene un costo de " + avion + " más I.V.A. le quedaria en " + costoFinal() )
            validacion()
            break
        
            case 2 :
            alert ("Eligio el barco y tiene un costo de " + barco + " más I.V.A. le quedaria en " + costoFinal() );
            validacion()
            break
        
            case 3 :
                alert ("Eligio el auto y tiene un costo de " + auto + " más I.V.A. le quedaria en " + costoFinal() );
                validacion()
            break
        
            case 4 :
                alert ("Eligio la bicicleta y tiene un costo de " + bicicleta + " más I.V.A. le quedaria en " + costoFinal() );
                validacion()
            break

            case 5 :
                alert("Gracias por su consulta")
            break
                
                
            default :
            alert("No valido, ingrerse una opcion correcta")
            menu()
            break;
    
        }

}

function costoFinal() {

        if (opcion == 1){
    
        final = avion + (avion * 1.21)
        }

        if (opcion == 2){
    
        final = barco + (barco * 1.21)
        }

        if (opcion == 3){
    
        final = auto + (auto * 1.21)
        }

        if (opcion == 4){
    
        final = bicicleta + (bicicleta * 1.21)
        }
    
    return final;
    }
 
function validacion(){
    
    rta= prompt ("Desea realizar otra consulta SI - NO").toLowerCase()

    if (rta == "si"){
    menu()}
    
    if  (rta == "no"){

    alert ("Gracias por su consulta")
    }
    
    else {
            alert ("Ingrese una opcion correcta")
            validacion()

        }
    

}
 





