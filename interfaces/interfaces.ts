interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarpassword?:string; 
}
let objeto:Usuario={nombreUsuario:"Juan",password:"1234",confirmarpassword:"1234"}
console.log(objeto);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar={
    abordarTransporte: function(){
        console.log("abordando");
    }
}

avion.abordarTransporte();