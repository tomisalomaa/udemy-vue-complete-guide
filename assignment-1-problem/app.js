const app = Vue.createApp({
    data() {
        return {
            name: "Tomi Salomaa",
            age: 32,
            imgLink: "https://learncode.tobdu399.repl.co/Kuvat/javascript.png"
        }
    },
    methods: {
        createRandomNum() {
            return Math.floor(Math.random()*2);
        }
    }
});

app.mount("#assignment");