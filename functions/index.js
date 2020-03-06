const functions = require('firebase-functions');

exports.recomienda = functions.https.onRequest(
      
    (request, response) => {
      try {
        if(request.query.sexo === "uno"){
            if (request.query.tipo === "uno" && request.query.color === "uno") {
               response.send("Fear of the dark:Iron maiden");
             }
             else if(request.query.tipo === "uno" && request.query.color === "dos") {
               response.send("Con calma:Daddy Yankee");
             }
             else if(request.query.tipo === "uno" && request.query.color === "tres") {
               response.send("Girl next door:Drake Bell");
             }
             else if(request.query.tipo === "uno" && request.query.color === "cuatro") {
               response.send("Lazy song:Bruno Mars");
             }
             else if(request.query.tipo === "dos" && request.query.color === "uno") {
               response.send("Get rich or die tryin");
             }
             else if(request.query.tipo === "dos" && request.query.color === "dos") {
               response.send("Crazy, Stupid Love");
             }
             else if(request.query.tipo === "dos" && request.query.color === "tres") {
               response.send("500 days of summer");
             }
             else if(request.query.tipo === "dos" && request.query.color === "cuatro") {
               response.send("Shottas 'hermanos en el crimen'");
             }
             else {
               response.send("Opcion no existente");
             }
             }
             else if(request.query.sexo === "dos"){
                
               if (request.query.tipo === "uno" && request.query.color === "uno") {
                  response.send("Complicated:Abril Lavigne");
               }
               else if(request.query.tipo === "uno" && request.query.color === "dos") {
                  response.send("Corre:Jesse y Joy");
               }
               else if(request.query.tipo === "uno" && request.query.color === "tres") {
                  response.send("Mundo de caramelo:Danna Paola");
               }
               else if(request.query.tipo === "uno" && request.query.color === "cuatro") {
                  response.send("Single ladies:Beyoncé");
               }
               else if(request.query.tipo === "dos" && request.query.color === "uno") {
                  response.send("Chicas Pesadas");
               }
               else if(request.query.tipo === "dos" && request.query.color === "dos") {
                  response.send("Triunfos Robados");
               }
               else if(request.query.tipo === "dos" && request.query.color === "tres") {
                  throw new Error("Bajo la misma estrella");
               }
               else if(request.query.tipo === "dos"  && request.query.color === "cuatro") {
                  response.send("Rapunzel");
               }
               else {
                  response.send("Opcion no existente");
               }
               
               }
               else{
                  response.send("Debes seleccionar tu sexo");
               }
             }
           
       catch (e) {
        response.send(e.message);
      }
    });