<template>
<Page class="page">
    <NavBar />
    <StackLayout flexDirection="column" class="buttons">
        <Label class="level1" height="34%" @tap="openAlert(level1)" text="Level 1" />
        <Label class="level2" height="34%" @tap="openAlert(level2)" text="Level 2" />
        <Label class="level3" height="34%" @tap="openAlert(level3)" text="Level 3" />
    </StackLayout>
</Page>
</template>

<script>
import NavBar from './NavBar';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            level1: "Level 1",
            level2: "Level 2",
            level3: "Level 3",
        };
    },
    methods: {
        sendMessages(level) {
 
        },
        openAlert(level) {
            confirm({
                title: "Confirm " + level + " Alert?",
                message: "Confirm?",
                okButtonText: "Confirm",
                cancelButtonText: "Cancel"
            }).then(result => {
                if (result === true) {
                    this.sendMessages(level)
                } else {
                    console.log("Cancel Pressed")
                }
            });
        },
    }
};
</script>

<style scoped>
.buttons {
    display: flex;
    justify-content: space-between;
    font-family: BlackOps;
    font-size: 100px;
    color: white;
    text-align: center;
}

.level1 {
    background-color: green;
    padding-top: 180px;
}

.level2 {
    background-color: blue;
    padding-top: 180px;
}

.level3 {
    background-color: red;
    padding-top: 180px;
}
</style>
