// Link do dojo
// https://dojopuzzles.com/problems/ano-bissexto/
//

function calculaBissexto(){
    let ano = document.getElementById("ano").value;
    if ( (ano % 4) == 0 && 
         (
            (ano % 100) != 0 || 
            (
              (ano % 100) == 0 && 
              (ano % 400) == 0
            )  
          )
       ){
      alert("bissexto");
    }
}
