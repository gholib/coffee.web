export default{
    GET_MENU_ITEMS({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        context.$http.get('menu-items').then(response => {
            commit('SET_MENU_ITEMS', response.data.menuItems)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    CREATE_MENU({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        let formData = {
            display_name:context.dataName,
            price: context.dataPrice,
            cost_price: context.dataCostPrice,
            import_type_id: context.selected
        }
        context.$http.post('menu-items', formData).then(response => {
            commit('SET_MENU', response.data.menuItem)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    UPDATE_MENU({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        let formData = {
            display_name:context.dataName,
            price: context.dataPrice,
            cost_price: context.dataCostPrice,
            import_type_id: context.selected
        }
        context.$http.post(`menu-items/${context.data.id}`, formData).then(response => {
            commit('UPDATE_MENU', response.data.menuItem)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    DELETE_MENU({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        context.$http.delete(`menu-items/${context.deletedId}`).then(() => {
            commit('DELETE_MENU', context.deletedId)
        }).finally(() => {
            context.$vs.loading.close()
        })
    },
    DELETE_SELECTED_CATEGORY(){
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

    PAY({commit}, context){
        context.$vs.loading({color: 'rgb(228, 222, 37)' })
        context.$http.post('pay', {sales:context.summa}).then(() => {
            commit('SET_DEFAULT_SUMM')
            context.$vs.notify({
                time: 2500,
                title: 'Урааа',
                text: "Список продаж успешно добавлен",
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                position: 'top-center',
                color: 'success'
            });
        }).finally(() => {
            context.$vs.loading.close()
        })
    }
}