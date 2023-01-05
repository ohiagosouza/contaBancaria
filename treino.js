let balance = parseFloat(prompt("Qual o seu saldo bancário?"));
option = "";
let extratos = "";

do {
  option = prompt(
    `Seu saldo é de R$ ${balance}\nEscolha a opção desejada:\n\n1-Depósitos\n2-Transferências\n3-Extrato\n4-Sair`
  );

  switch (option) {
    case "1":
      let deposit = parseFloat(prompt("Digite o valor para depósito"));
      balance += deposit;
      extratos += " Depósito: R$ " + deposit + "\n";
      break;

    case "2":
      let transfer = parseFloat(prompt("Digite o valor da transferência"));
      if (transfer > balance) {
        alert(
          `Transferência não concluída, saldo insuficiente\n\nSaldo atual: R$ ${balance}`
        );
        break;
      } else {
        balance -= transfer;
        extratos += " Transferência: R$ " + transfer + "\n";
      }
      break;

    case "3":
      alert(`Ultimas transações:\n\n${extratos}\n\nSaldo atual: R$ ${balance}`);
      break;

    case "4":
      alert("Agradecemos a confiança, Até logo! :)");
      break;
    default:
      alert("Hum... Algo deu errado! Escolha uma das opções.");
      break;
  }
} while (option !== "4");
