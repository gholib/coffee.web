export default {
    SET_IMPORT_TYPES(state, importTypes){
        state.importTypes = importTypes
    },
    SET_IMPORT_TYPE(state, importType){
        state.importTypes.push(importType)
    },
    UPDATE_IMPORT_TYPE(state, importType){
        const index = state.importTypes.findIndex(el => el.id === importType.id)
        state.importTypes.splice(index, 1, importType)
    },
    DELETE_IMPORT_TYPE(state, importTypeId){
        const index = state.importTypes.findIndex(el => el.id === importTypeId)
        state.importTypes.splice(index, 1)
    },
    DELETE_SELECTED_IMPORT_TYPES(state, selected){
        selected.forEach(importTypeId => {
            const index = state.importTypes.findIndex(el => el.id === importTypeId)
            state.importTypes.splice(index, 1)
        })
    },
}