<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://countries.trevorblades.com/',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
</script>

<template>
  <div>
    
    
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

