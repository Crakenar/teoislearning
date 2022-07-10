import {reactive} from "vue";

export const store = reactive({
    TechSelected: "",
    SkillSelected: 0,
    changeTech(value) {
        this.TechSelected = value;
    },

    changeSkill(value){
        this.SkillSelected = value;
    }
});