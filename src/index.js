// Dados do herói
let herois = [
{ nome: "Arthurus", xp: 2280 },
{ nome: "Sylvana", xp: 980 },
{ nome: "Uriel", xp: 7050 },
{ nome: "Galadriel", xp: 10500 },
{ nome: "Thanos", xp: 8500 }
]

// Laço de repetição para processar todos os heróis
for (let i = 0; i < herois.length; i++) {
  let heroi = herois[i];
  let nivel = "";

  // Estrutura de decisão para definir o nível
  if (heroi.xp < 1000) {
    nivel = "Ferro";
  } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    nivel = "Bronze";
  } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    nivel = "Prata";
  } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
    nivel = "Ouro";
  } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    nivel = "Platina";
  } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    nivel = "Ascendente";
  } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    nivel = "Imortal";
  } else if (heroi.xp >= 10001) {
    nivel = "Radiante";
  }

  // Mensagem final
  console.log("O Herói de nome " + heroi.nome + " está no nível de " + nivel);
}
