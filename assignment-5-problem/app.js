const app = Vue.createApp({
    data() {
        return{
            taskList: [],
            inputText: "",
            hideShowButton: true
        }
    },
    methods: {
        addTask: function() {
            this.taskList.push(this.inputText);
            console.log(this.taskList)
        },
        hideOrShow: function() {
            this.hideShowButton = !this.hideShowButton;
        }
    }
});

app.mount("#assignment");