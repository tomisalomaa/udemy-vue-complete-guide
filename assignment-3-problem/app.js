const app = Vue.createApp({
    data() {
        return {
            result: 0,
            showResult: "Try reaching 37"
        }
    },
    methods: {
        resultAddFive: function () {
            this.result = this.result + 5;
        },
        resultAddOne: function () {
            this.result++;
        }
    },
    watch: {
        result(value) {
            if (value < 37) {
                this.showResult = "Not there yet";
            } else if (value > 37) {
                this.showResult = "Too much!";
            } else {
                this.showResult = this.result;
            }
        }
    }
});

app.mount("#assignment");