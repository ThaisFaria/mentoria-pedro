const template = num => `${num} carneirinhos...`;

function contandoCarneirinhos(limit){

  if (!limit) return 'Sem carneirinhos';

  let counterStr = '';

  for(counter = 1; counter <= limit; counter++){
    counterStr = counterStr + template(counter)
  }
  return counterStr
}

module.exports = {
  contandoCarneirinhos,
}