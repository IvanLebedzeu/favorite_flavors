$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
    var flavors = ["vanilla", "chocklate", "flavorX". "flavorY", "flavorZ"];
    flavors.forEach(function(flavor){
      alert('I love ' + flavor);
     // $(".flav1").append(flavors);
      
    })

  })
})