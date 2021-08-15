exports.action = function(data){

  var reponses = [
    "Ca va bien, et vous ?",
    "Comme d'habitude, et vous ?",
    "Je me sens bien, merci. Et vous ?",
    "J'ai la patate ! Et vous ?",
    "Je sens que mes circuit chauffe un peu, mais ça va. Et vous ?"
  ];

var choix = Math.floor(Math.random() * reponses.length);
var answer = reponses[choix];

JarvisAskMe(answer,function(result){
console.log("ta réponse : "+result.trim())
    
    function cava (result) {

    var answer=[
                'bien','good',
                'normal','good',
                'comme d\'habitude','good',
                'ça va', 'good',
                'tranquille', 'good',
                'oui', 'good',
                
                'pas très bien', 'bad',
                'pas super', 'bad',
                'pas top', 'bad',
                'bof', 'bad',
                'non', 'bad'
  ]
  var rep = answer.findIndex(answer => answer === result);
//console.log(rep); // donne la position de la demande
//console.log(answer[rep]); //donne le nom trouvé
//console.log(answer[rep+1]); // donne le suivant 


       if(answer[rep+1] == 'bad') {
          var reponses4Bad = [
            "Dommage",
            "Ah mince",
            "Je suis désolé pour vous",
            "Ah mince, n'hésitez pas à soliciter mon aide",
            "ça change de d'habitude"
          ];

          var choix = Math.floor(Math.random() * reponses4Bad.length);
          var answer4Bad = reponses4Bad[choix];

          JarvisIASpeech(answer4Bad);
      } else {
          
          var reponses4Good = [
            "Super",
            "Génial",
            "Je suis content pour vous",
            "Super, n'hésitez pas à soliciter mon aide",
            "Ah ! Je suis content pour vous"
          ];

          var choix = Math.floor(Math.random() * reponses4Good.length);
          var answer4Good = reponses4Good[choix];

          JarvisIASpeech(answer4Good);
      } 
    
  
       
       
}
  cava (result)
return  
})//fin ask
}

