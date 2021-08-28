const app = Vue.createApp({
    data() {
        return {
            firstUserInput: "Enter input",
            secondUserInput: "Enter input"
        }
    },
    methods: {
        showAlert: function () { return alert("Hello! I am an alert box!!")}
    }
});

app.mount("#assignment");