<template>
    <div>
        <div class="vx-col w-full md:w-1/2 mb-base">
        <vx-card>
          <div class="vx-row flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row">
          </div>
          <vs-divider class="my-6"></vs-divider>
          <div class="vx-row">
            <div v-for="(calc, index) in calculations" :key="index" class="vx-col w-1/2 mb-3">
              <p><span class="">
                  {{calc.display_name}}
                </span>, кол-во {{calc.count}}, сумма {{calc.count*calc.price}}</p>
              <vs-progress class="block mt-1" :percent="calc.count" :color="colors[Math.floor(Math.random() * 5)]"></vs-progress>
            </div>
      </div>
    </div>
</template>


<script>
export default {
    data() {
      return {
        calculations:[],
        colors:[
            'primary',
            'success',
            'danger',
            'warning',
            'dark',
            'rgb(62, 201, 214)',
        ],
      }
    },
    computed:{
    },

    methods:{
      getCalculation(){
        this.$http.get('calculation').then(response => {
          this.calculations = response.data.calculations
        })
      }
    },

    created(){
      this.getCalculation()
    }
}
</script>

<style>
  .dispay_name{
    text-transform: uppercase;
    color: green;
  }
</style>