sessionStorage.removeItem('seleccion');
let cot = document.getElementById('coti');
cot.addEventListener ('click', cotizador);

let buy = document.getElementById('comp');
buy.addEventListener ('click', comprar);

function cotizador() {
    let str = document.getElementsByName('stream');
    let pac = document.getElementsByName('pack'); 
    let des = document.getElementById('choice');
    let precio = [100,200,500];
    let cont = 0; 
    for(i = 0; i < str.length; i++) {
        for (x = 0; x < pac.length; x++)
        {
        if(str[i].checked && pac[x].checked)
            {
                if (des.value == "si"){
                    let valor = precio[x] * 0.8;
                    document.getElementById("result").innerHTML
                    = "El precio mensual sería de $" + valor + " (%20 de descuento).";
                    const sel = {stream: str[i].value, pack: pac[x].value, descuento: des.value, valor: valor, cot: "si"};
                    const jsel = JSON.stringify(sel);
                    sessionStorage.setItem('seleccion',jsel);
                    return 1;
                    
                }
                else {
                    let valor = precio[x];
                    document.getElementById("result").innerHTML
                     = "El precio mensual sería de $" + valor + ".";
                     const sel = {stream: str[i].value, pack: pac[x].value, descuento: des.value, valor: valor, cot: "si"};
                     const jsel = JSON.stringify(sel);
                     sessionStorage.setItem('seleccion',jsel);
                     return 1;
                     
                     
        }
        }
        else  {
            document.getElementById("result").innerHTML
                     = "Elegí servicio de Streaming y pack.";
                     
        }
        }
    }
}

function comprar(){
       let sel = JSON.parse(sessionStorage.getItem('seleccion'));
       if (sel != null){
            if (sel.cot == "si"){
            document.getElementById("compra").innerHTML
            = "Felicitaciones! Adquiriste una subscripción mensual de " + sel.stream+ ", con el paquete "+sel.pack+", por un total de $"+sel.valor+".";
            let msj = "Adquiriste una subscripción mensual de " + sel.stream+ ", con el paquete "+sel.pack+", por un total de $"+sel.valor+"."
            Swal.fire({
                title: 'Felicitaciones!',
                text: msj,
                icon: 'success',
                confirmButtonText: 'Cerrar'
            })
            
                sel.cot = "no";
                const jsel = JSON.stringify(sel);
                sessionStorage.setItem('seleccion',jsel);
        }
            else {
                document.getElementById("compra").innerHTML
                = "Primero cotizá.";
        }
        }
        else {
            document.getElementById("compra").innerHTML
        = "Antes elegí servicio de streaming y pack, y cotizá.";
        }
        

}
