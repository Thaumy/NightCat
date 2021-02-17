new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: true
        }
    }),
    data() {
        return {
            UUID_N: '',
            UUID_D: '',
            YMD_XXXX: '',
            YMD: '',
            RndNumber: '',
            RndString: '',
            PubK: '',
            PriK: '',
            Plain: '',
            Cipher: ''
        }
    },
})