<template>
    <div>
        <div class="vx-col w-full md:w-1/2 mb-base">
        <vx-card>
          <div class="vx-row flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row">
            <!-- <div class="vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col justify-between" v-if="salesBarSession.analyticsData"> -->
              <!-- <div>
                <h2 class="mb-1 font-bold">{{ salesBarSession.analyticsData.session | k_formatter }}</h2>
                <span class="font-medium">Avg Sessions</span>
                <p class="mt-2 text-xl font-medium">
                  <span :class="salesBarSession.analyticsData.comparison.result >= 0 ? 'text-success' : 'text-danger'">
                    <span v-if="salesBarSession.analyticsData.comparison.result > 0">+</span>
                    <span>{{ salesBarSession.analyticsData.comparison.result }}</span>
                  </span>
                  <span> vs </span>
                  <span>{{ salesBarSession.analyticsData.comparison.str }}</span>
                </p>
              </div>
              <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4">View Details</vs-button>
            </div>

            <div class="vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 md:mb-base sm:mb-0 mb-base">
              <change-time-duration-dropdown class="self-end" />
              <vue-apex-charts type="bar" height="200" :options="analyticsData.salesBar.chartOptions" :series="salesBarSession.series" v-if="salesBarSession.series" />
            </div> -->

          </div>
          <vs-divider class="my-6"></vs-divider>
          <div class="vx-row">
            <div v-for="(calc, index) in calculations" :key="index" class="vx-col w-1/2 mb-3">
              <p><span class="">
                  {{calc.display_name}}
                </span>, кол-во {{calc.count}}, сумма {{calc.count*calc.price}}</p>
              <vs-progress class="block mt-1" :percent="calc.count" :color="colors[Math.floor(Math.random() * 5)]"></vs-progress>
            </div>

            <br>
            <br>
            <br>
          <vs-divider class="my-6"></vs-divider>
            <div class="vx-col mb-3">
              <p><span class="dispay_name">
                  Итого: {{result}} сомони
                </span></p>
              <vs-progress class="block mt-1" :percent="result/100" color="success"></vs-progress>
            </div>
            <div class="vx-col mb-3">
              <p><span class="dispay_name">
                  Себестоимость: {{costPrice}} сомони
                </span></p>
              <vs-progress class="block mt-1" :percent="costPrice/100" color="success"></vs-progress>
            </div>
            
            <div class="vx-col mb-3">
              <p><span class="dispay_name">
                  Доход: {{result - costPrice}} сомони
                </span></p>
              <vs-progress class="block mt-1" :percent="costPrice/100" color="success"></vs-progress>
            </div>
          </div>
        </vx-card>
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
      result(){
        if(this.calculations.length === 0) return 0
          let res = 0
          this.calculations.forEach(el => {
              res += el.price*el.count
          })
        return res
      },
      costPrice(){
        if(this.calculations.length === 0) return 0
          let res = 0
          this.calculations.forEach(el => {
              res += el.cost_price*el.count
          })
        return res
      }
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