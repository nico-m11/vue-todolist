var app = new Vue ({
  el:'#app',
  data: {
    testoInput: '',
    inputUtente: [],
  },

  methods: {
      inputUtenteArray: function () {
        this.inputUtente.push(this.testoInput)
        this.testoInput = '';
      },
      cancellaInput: function (cancIndex) {
        this.inputUtente.splice(cancIndex, 1)
      },
    },
});
