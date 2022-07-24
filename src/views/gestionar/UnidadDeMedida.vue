<template>
    <div>
        <b-container>
            <Title msg="Gestionar Unidad de Medida"></Title>
            <Gestionar :post="prueba"></Gestionar>
        </b-container>
    </div>
</template>
<script>
import Title from '@/components/Title.vue'
import Gestionar from '@/components/Gestionar.vue'
export default {
    components: {
        Title,
        Gestionar,
    },
    methods: {
        prueba: function () {
            alert('alerta de prueba para el metodo post');
        }
    }
}
</script>