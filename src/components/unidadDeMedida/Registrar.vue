<template>
    <div class="d-flex flex-row justify-content-start">
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Nombre de la unidad de medida:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" placeholder="Ingrese el nombre">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="my-2">Registrar</b-button>
        </b-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
            }
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.form.name = '';
        }
    }
}
</script>