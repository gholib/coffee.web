<template>
    <vs-row>
        <vs-col  v-for="item in menuItems" :key="item.id" vs-w="6">
            <menu-item 
                :color="colors[Math.floor(Math.random() * 4)]"
                :display-name="item.display_name"
                :price="item.price"
                :menu-item-id="item.id" />
        </vs-col>
    </vs-row>
</template>


<script>
import MenuItem from './MenuItem'
export default {
    components:{MenuItem},

    data() {
        return {
            menuItems: [],
            colors:[
                'primary',
                'success',
                'warning',
                'dark',
                'rgb(62, 201, 214)',
            ],
        }
    },

    methods:{
        getMenuItems(){
            this.$vs.loading({color: 'rgb(228, 222, 37)' })
            this.$http.get('menu-items').then(response => {
                this.menuItems = response.data.menuItems
                this.$vs.loading.close()
            })
        }
    }, 

    created(){
        this.getMenuItems()
    }
}
</script>