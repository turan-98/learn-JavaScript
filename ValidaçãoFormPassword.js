function hasUpperCase($input){
  //$input[i].toUpperCase() verifica se tem letras maiusculas
    for (var i = 0; i < $input.length; i++){
     if($input[i] === $input[i].toUpperCase()){
      return true;
     }
    }
  }
  function hasLowerCase($input){
    //$input[i].toLowerCase() verifica se a senha tem letras minusculas
    for(var i = 0; i < $input.length; i++){
      if($input[i] === $input[i].toLowerCase()){
        return true;
      }
    }
  }
  function isLongEnough($input){
    //$input.length verifica o tamanho da senha
    for(var i = 0; i < $input.length; i++){
      if($input.length >= 8){
        return true;
      }
    }
  }
  function hasSpecialCharacter($input){
    //array com caracters especais
    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
    for(var i = 0; i < $input.length; i++){
      for(var j = 0; j < $input.length; j++){
        if($input[i] === $input[j]){
          return true;
        }
      }
    }
  }
  function hasEmptyPassowrd($input){
    //verifica se o campo senha esta vazio
    if($input){
      return true;
    }
  }
function isPasswordValid($input){
  /*
    Defini o retorno de todas as funcoes com true !hasUpperCase($input) -> nessa expressão
    o "!" troca o valor da funcao ou parametro, se ele for true então sera falso -> !hasUpperCase($input)
    estamos dizendo que se nossa funcao retornar false ele mostra o erro
  */
  if(!hasUpperCase($input)){
    console.log('Senha precisa de letras Maiusculas');
  }
  if(!hasLowerCase($input)){
    console.log('Senha precisa de letras Minusculas');
  }
  if(!isLongEnough($input)){
     console.log('Senha precisa ser maior que 8 caracteres');
  }
  if(!hasSpecialCharacter($input)){
    console.log('Senha precisa ter caracteres especiais');
  }
  if(!hasEmptyPassowrd($input)){
    console.log('Campo vazio');
  }
  /*
    Verificando se todas são true
  */
  if(hasUpperCase($input) && hasLowerCase($input) && isLongEnough($input) && hasSpecialCharacter($input) && hasEmptyPassowrd($input)){
    console.log('Senha Valida !!');
  }
}
//Passando o parametro senha 
isPasswordValid('Sammy@Santana');


