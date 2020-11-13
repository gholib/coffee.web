<template>
    <div>
        <ul v-if="importTypes.length > 0">
            <li class="mt-6" v-for="importType in importTypes" :key="importType.id">
                <import-form :title="importType.display_name" :import-type-id="importType.id" />
            </li>
        </ul>
    </div>
</template>

<script>
import ImportForm from '../../components/import/ImportForm'
export default {
    components:{
        ImportForm
    },
    data(){
        return{
            importTypes:[]
        }
    },

    methods:{
        getImportTypes(){
            this.$http.get('import-types').then(response => {
                this.importTypes = response.data.importTypes
            })
        }
    },

    mounted(){
        this.getImportTypes()
    }
}
</script>