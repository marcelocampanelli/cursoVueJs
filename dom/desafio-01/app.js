new Vue({
    el: "#desafio",
    data: {
        nome: "Marcelo",
        idade: 20,
        link: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fletsgoalintercambio.com.br%2Flogo-img%2F&psig=AOvVaw0FIAoZnYdIJOGcalMh_un0&ust=1592235748690000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDSxsPSgeoCFQAAAAAdAAAAABAJ",
    },
    methods: {
        multiplica: function() {
            return this.idade * 3;
        },
        numberRandom: function() {
            return Math.random() * 1;
        },
        alterarTitulo(event) {
            input = event.target.value = this.nome;
        },
    },
});