<template>
    <b-navbar type="light" variant="light">
        <b-navbar-nav>
            <b-nav-item>
                <router-link to="/">Inicio</router-link>
            </b-nav-item>
            <b-nav-item-dropdown text="Gestionar" left>
                <b-dropdown-item>
                    <router-link to="/gestionar/unidad-de-medida">Unidad de Medida</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                    <router-link to="/about">About</router-link>
                </b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>
<style scoped>
nav a {
    text-decoration: none;
    font-weight: bold;
    color: black;
}

nav a.router-link-exact-active {
    font-weight: bold;
    color: darkcyan;
}
</style>