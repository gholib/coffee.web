<template>
    <vx-card :title="title">
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
            <vs-input class="w-full" type="number" label="Количество" v-model="quantity" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
            <vs-input class="w-full" type="number" label="За сколько сомон" v-model="price" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-button :disabled="!quantity || !price" @click="openAlert" class="mr-3 mb-2">Добавить</vs-button>
            </div>
        </div>
    </vx-card>
</template>


<script>
export default {
    props:{
        title:{
            required:true
        },
        importTypeId:{
            required:true
        }
    },

    data(){
        return{
            quantity:null,
            price:null,
        }
    },

    methods:{
        openAlert(color){
            this.colorAlert = color
            this.$vs.dialog({
                type: 'confirm',
                color:'success',
                title: 'Внимание',
                text: 'Подтвердите правильности данных',
                accept:this.addImport,
                acceptText:'Подтвердить',
                cancelText:'Отменить'
            })
        },
        addImport(){
            this.$http.post('import', {
                import_type_id: this.importTypeId,
                quantity: this.quantity,
                price: this.price,
            }).then(() => {
                this.quantity = this.price = null
                this.$vs.notify({
                    title: 'Success',
                    text: 'Приход успешно добавлен',
                    color: 'success',
                    time: 5000,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    position: 'top-center',
                });
            })
        }
    }
}
</script>