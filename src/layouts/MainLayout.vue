<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>


      <q-toolbar>

        <q-btn v-if="$route.fullPath.includes('/chat')" color="orange" to="/" icon="arrow_back" rounded dense flat></q-btn>

        <q-toolbar-title class="text-center">
          {{title}}
        </q-toolbar-title>

        <q-btn to="/auth"
        flat round dense icon="account_circle"/>


      </q-toolbar>


    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>



export default ({
  computed:{
    title(){
      console.log(this.$route)
      let currentPath = this.$route.fullPath
      if(currentPath == '/')return 'Chat App'
      else if(currentPath == '/chat')return 'Chat'
      else if(currentPath == '/auth')return 'Login'
    }
  }

})
</script>

<style lang="scss">

</style>
