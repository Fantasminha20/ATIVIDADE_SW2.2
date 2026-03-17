// 3 - Conversor de Turno: Receba uma letra ("M", "V" ou "N") e imprima "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Exiba "Inválido" para outras entradas. 


//let turno = 'n'

export function turno1(turno) {

  if (turno == 'm') {
    return ("bom dia");

  } else if (turno == 't') {
    return ("boa tarde");

  } else if (turno == 'n') {
    return ("boa noite");

  } else {
    return ("inválido");
  }
};

