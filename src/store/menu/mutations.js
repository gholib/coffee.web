export default {
    SET_MENU_ITEMS(state, menuItems){
        state.menuItems = menuItems
    },
    SET_MENU(state, menuItem){
        state.menuItems.push(menuItem)
    },
    UPDATE_MENU(state, menuItem){
        const index = state.menuItems.findIndex(el => el.id === menuItem.id)
        state.menuItems.splice(index, 1, menuItem)
    },
    DELETE_MENU(state, menuItemId){
        const index = state.menuItems.findIndex(el => el.id === menuItemId)
        state.menuItems.splice(index, 1)
    },
    DELETE_SELECTED_MENU(state, selected){
        selected.forEach(menuItemId => {
            const index = state.menuItems.findIndex(el => el.id === menuItemId)
            state.menuItems.splice(index, 1)
        })
    },

    ADD_ITEM(state, item){
        state.summa.push(item)
    },

    SET_DEFAULT_SUMM(state){
        state.summa = []
    },

    DELETE_ITEM(state, index){
        state.summa.splice(index,1)
    }
}