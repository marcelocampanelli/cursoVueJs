new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  computed: {
    resultado() {
      return this.valor >= 10 ? "Maior ou igual que 10" : "Menor que 10";
    },
  },
  watch: {
    resultado(novo, antigo) {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
});
