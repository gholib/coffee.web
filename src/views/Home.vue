<template>
  <div>
	<menu-header />
	<div class="mt-7 top-10">
      <menu-items />
    </div>
  </div>
</template>

<script>
import MenuHeader from '../components/menu/MenuHeader'
import MenuItems from '../components/menu/MenuItems'
export default {
  data() {
    return {
	comments:[],
	likes:[],
	users:[],
    }
  },
  components: {
	MenuHeader,
	MenuItems
  },

  methods:{

  },

}
</script>

<style lang="scss">
    .top-10{
        margin-top: 15rem;
    }
</style>