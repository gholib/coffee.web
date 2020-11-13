<template>
    <div class="p-3">
        <vs-button @click="addPay" class="menu-button" :color="color" type="filled">
            <span class="display-name">
                {{displayName}}
            </span>
            <span class="price-list">
                ({{price}} сомони)
            </span>
        </vs-button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props:{
        color:{required:true},
        displayName:{required:true},
        price:{required:true},
        menuItemId:{required:true},
    },

    methods:{
        ...mapMutations({
            addItem: 'menu/ADD_ITEM'
        }),
        addPay(){
            this.addItem({
                display_name:this.displayName,
                price: this.price,
                menu_item_id: this.menuItemId
            })
        }
    }
}
</script>

<style>
.menu-button{
    width: 100%;
    height: 6rem;
    text-transform: uppercase;
}
.display-name{
    text-transform: uppercase;
    margin-right: 3rem;
}
.price-list{
    text-transform: uppercase;
    color: red;
}
</style>