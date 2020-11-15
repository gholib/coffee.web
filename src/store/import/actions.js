export default{
    GET_IMPORT_TYPES({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        context.$http.get('import-types').then(response => {
            commit('SET_IMPORT_TYPES', response.data.importTypes)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    CREATE_IMPORT_TYPE({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        let formData = {
            display_name:context.dataName,
            price: context.dataPrice,
        }
        context.$http.post('import-types', formData).then(response => {
            commit('SET_IMPORT_TYPE', response.data.importType)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    UPDATE_IMPORT_TYPE({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        let formData = {
            display_name:context.dataName,
            price: context.dataPrice,
        }
        context.$http.post(`import-types/${context.data.id}`, formData).then(response => {
            commit('UPDATE_IMPORT_TYPE', response.data.importType)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    DELETE_IMPORT_TYPE({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        context.$http.delete(`import-types/${context.deletedId}`).then(() => {
            commit('DELETE_IMPORT_TYPE', context.deletedId)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    DELETE_SELECTED_IMPORT_TYPES(){
        // context.$vs.loading({color: 'rgb(228, 222, 37)' })
        // const obj = {selected: context.selectedId}
        // context.$http.patch(`category/delete_selected`, obj).then(() => {
        //     commit('DELETE_SELECTED_CATEGORY', context.selectedId)
            
        //     context.$vs.loading.close()
        // }).catch(err => {
            
        //     context.$vs.loading.close()
        //     context.$vs.notify({
        //         time: 2500,
        //         title: 'Error',
        //         text: err.message,
        //         iconPack: 'feather',
        //         icon: 'icon-alert-circle',
        //         position: 'top-center',
        //         color: 'danger'
        //     });
        // })
    },
}