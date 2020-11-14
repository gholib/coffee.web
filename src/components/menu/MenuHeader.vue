<template>
    <div class="vx-col w-full mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
          <p class="price">{{result}}(Сомони)</p>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">
                <vs-button @click="openConfirm" :disabled="summa.length === 0" color="success" type="filled">Оплатить</vs-button>
                <vs-button @click="popupActive=true" :disabled="summa.length === 0"  class="ml-3 mt-3" color="warning" type="filled">Показать список</vs-button>
          </p>
        </vx-card>
        <vs-popup  title="Список продаж" :active.sync="popupActive">
            <vs-list>
                <vs-list-item v-for="(item,index) in summa" :key="index" 
                    :title="item.display_name" :subtitle="item.price + 'сомони'">
                    <vs-button @click="destroy(index)" color="danger" type="filled">
                        <feather-icon  
                        icon="TrashIcon" 
                        svgClasses="h-4 w-4" 
                        class="mr-2 cursor-pointer" />
                    </vs-button>
                </vs-list-item>
            </vs-list>
        </vs-popup>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {

    data() {
        return {
            popupActive:false
        }
    },

    computed:{
        ...mapGetters({
            summa: 'menu/getSumm'
        }),
        result(){
            if(this.summa.length === 0) return 0
            let res = 0
            this.summa.forEach(el => {
                res += Number(el.price)
            })
            return res
        }
    },

    methods:{
        ...mapMutations({
            deleteItem: 'menu/DELETE_ITEM'
        }),
        openConfirm() {
            this.$vs.dialog({
                type: 'confirm',
                color: 'success',
                title: `Подтвердите оплату`,
                text: 'Сумма проданных товаров равна = ' + this.result + 'сомони',
                accept: this.pay,
                acceptText: "Подтвердить",
                cancelText: "Отменить"
            })
        },
        destroy(index){
            this.deleteItem(index)
        },
        pay(){
            this.$store.dispatch('menu/PAY', this)
        }
    }
}
</script>

<style>
    .price{
        font-size: 30px;
        color: #fff;
        font-weight: bold;
    }
    .p-fixed{
        position: fixed;
        z-index: 999999999999999999999999999999;
        opacity: 0.5;
        width: 80%;
    }
</style>