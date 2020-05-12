function telephoneCheck(str) {
  /*regex recebe expressao regular do padrao do telefone*/
  let regex = /^(1(\s|)|)(\(\d{3}\)|\d{3})(\s|-|)\d{3}(\s|-|)\d{4}$/g;
  //se responder aos padroes o metodo test retorna true ou false
  let result = regex.test(str);
  return result;
}

console.log(telephoneCheck("123**&!!asdf#"));
//"(275)762 2738"
//"555-555-5555"
//"1 555-555-5555"
//"1 (555) 555-5555"
//"5555555555"
//"(555)555-5555"
//"1 456 789 4444"
//"123**&!!asdf#"
