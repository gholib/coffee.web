<template>
  <div>
	  <menu-header />
	  <menu-items />
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