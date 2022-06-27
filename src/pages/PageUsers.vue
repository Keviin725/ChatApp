<template>
  <q-page class="flex q-pa-md">
  	<q-list 
  		class="full-width"
  		separator>
  	  <q-item
  	  	v-for="user in users"
  	  	:key="user.id"
  	  	to="/chat"
  	  	clickable
  	  	v-ripple>
  	    <q-item-section avatar>
  	      <q-avatar color="primary" text-color="white">
  	        {{ user.name.charAt(0) }}
  	      </q-avatar>
  	    </q-item-section>

  	    <q-item-section>
  	      <q-item-label>{{ user.name }}</q-item-label>
  	    </q-item-section>

  	    <q-item-section side>
  	      <q-badge 
  	      	:color="user.online ? 'light-green-5' : 'grey-4'">
            {{ user.online ? 'Online' : 'Offline' }}
          </q-badge>
  	    </q-item-section>
  	  </q-item>

  	</q-list>
  </q-page>
</template>

<script>
	export default {
	  data () {
	    return {
	      users: [{
      	  id: 1,
      	  name: 'Danny',
      	  online: true
      	}, {
      	  id: 2,
      	  name: 'Crush',
      	  online: false
      	}, {
      	  id: 3,
      	  name: 'Kyle Jenner',
      	  online: true
      	}, {
      	  id: 4,
      	  name: 'S Jay',
      	  online: true
      	}, {
      	  id: 5,
      	  name: 'Poze',
      	  online: false
      	}, {
      	  id: 6,
      	  name: '21 Savage',
      	  online: true
      	}, {
      	  id: 7,
      	  name: 'Scott',
      	  online: false
      	}]
	    }
	  }
	}
</script>

<style>
</style>
