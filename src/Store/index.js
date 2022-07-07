import {reactive} from "vue";

export const store = reactive({
    TechSelected: "",
    changeTech(value) {
        this.TechSelected = value;
    }
});