var app = new Vue ({
  el:'#app',
  data: {
    testoInput: '',
    inputUtente: [],
    active: []
  },

  methods: {
      inputUtenteArray: function () {
        this.inputUtente.push(this.testoInput)
        this.testoInput = '';
        myActive = false;
      },
      cancellaInput: function (cancIndex) {
        this.inputUtente.splice(cancIndex, 1)
      },
      actived: function (index) {
        this.$set(this.active, index, !this.active[index]);
      },
    },
});
