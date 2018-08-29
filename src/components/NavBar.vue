<template>
    <ActionBar>
        <NavigationButton @tap="onTap()" text="Menu" android.systemIcon="ic_more_items" />
        <StackLayout orientation="horizontal" class="menu">
            <Label text="Trakkr" fontSize="30" fontFamily="BlackOps" verticalAlignment="center" />
        </StackLayout>
    </ActionBar>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
        };
    },
}
</script>

<style scoped>
.menu {
    display: flex;
    color: black;
}
</style>
