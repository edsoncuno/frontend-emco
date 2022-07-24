<template>
    <div>
        <!--<b-button @click="post">Agregar</b-button>-->
        <b-button v-b-toggle="'collapse-2'">Toggle Collapse</b-button>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>
        <b-button>Actualizar Tabla</b-button>
        <b-table striped hover :items="items"></b-table>
        <b-modal id="modal-1" hide-footer>
        </b-modal>
        <b-collapse id="collapse-2">
            <div>
                asd
            </div>
        </b-collapse>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
    props: {
        post: Function,
    },
    methods: {
        doo: function () {
            console.log('asdasd');
        }
    },
    components: {
    }
}
</script>