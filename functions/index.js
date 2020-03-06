const functions = require('firebase-functions');

exports.recomienda = functions.https.onRequest(
      
    (request, response) => {
      try {
        if(request.query.sexo === "uno"){
            if (request.query.tipo === "uno" && request.query.color === "uno") {
                throw new Error("Fear of the dark:Iron maiden");
             }
             else if(request.query.tipo === "uno" && request.query.color === "dos") {
                throw new Error("Con calma:Daddy Yankee");
             }
             else if(request.query.tipo === "uno" && request.query.color === "tres") {
                throw new Error("Girl next door:Drake Bell");
             }
             else if(request.query.tipo === "uno" && request.query.color === "cuatro") {
                throw new Error("Lazy song:Bruno Mars");
             }
             else if(request.query.tipo === "dos" && request.query.color === "uno") {
                throw new Error("Get rich or die tryin");
             }
             else if(request.query.tipo === "dos" && request.query.color === "dos") {
                throw new Error("Crazy, Stupid Love");
             }
             else if(request.query.tipo === "dos" && request.query.color === "tres") {
                throw new Error("500 days of summer");
             }
             else if(request.query.tipo === "dos" && request.query.color === "cuatro") {
                throw new Error("Shottas 'hermanos en el crimen'");
             }
             else {
                throw new Error("Opcion no existente");
             }
             }
             else if(request.query.sexo === "dos"){
                
               if (request.query.tipo === "uno" && request.query.color === "uno") {
                  throw new Error("Complicated:Abril Lavigne");
               }
               else if(request.query.tipo === "uno" && request.query.color === "dos") {
                  throw new Error("Corre:Jesse y Joy");
               }
               else if(request.query.tipo === "uno" && request.query.color === "tres") {
                  throw new Error("Mundo de caramelo:Danna Paola");
               }
               else if(request.query.tipo === "uno" && request.query.color === "cuatro") {
                  throw new Error("Single ladies:Beyoncé");
               }
               else if(request.query.tipo === "dos" && request.query.color === "uno") {
                  throw new Error("Chicas Pesadas");
               }
               else if(request.query.tipo === "dos" && request.query.color === "dos") {
                  throw new Error("Triunfos Robados");
               }
               else if(request.query.tipo === "dos" && request.query.color === "tres") {
                  throw new Error("Bajo la misma estrella");
               }
               else if(request.query.tipo === "dos" && request.query.color === "cuatro") {
                  throw new Error("Rapunzel");
               }
               else {
                  throw new Error("Opcion no existente");
               }
               
               }
               else{
                  throw new Error("Debes seleccionar tu sexo");
               }
             }
           
       catch (e) {
        response.send(e.message);
      }
    });