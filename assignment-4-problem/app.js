const app = Vue.createApp({
    data() {
        return {
            styleSelected: "",
            visibility: true,
            inputColor: ""
        }
    },
    methods: {
        toggleVisibility: function() {
            this.visibility = !this.visibility;
        }
    },
    computed: {
        toggleClasses() {
            return {
                user1: this.styleSelected === "user1",
                user2: this.styleSelected === "user2",
                visible: this.visibility,
                hidden: !this.visibility
            }
        }
    }
});

app.mount("#assignment");