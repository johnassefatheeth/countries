<template>
    <div v-if="country">
      <h1>{{ country.country.name }}</h1>
      <p>Capital: {{ country.country.capital  }}</p>
      <p>Code: {{ result.country.code }}</p>
      <p>Amazon Web Services Region: {{ country.country.awsRegion }}</p>
      <p>Currency: {{ country.country.currency }}</p>
      <p>Native: {{ country.country.native }}</p>
      <p>Phone: {{ country.country.phone }}</p>
    </div>
    <div v-else>
      Loading...
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted} from 'vue';
  import { gql } from '@apollo/client/core';
  import { useQuery } from '@vue/apollo-composable';
  
  const route = useRoute();
  const code = route.params.code;
  
  const { result, refetch } = useQuery(gql`
    query ($code: ID!) {
      country(code: $code) {
        capital
        code
        awsRegion
        currency
        name
        native
        phone
      }
    }
  `, { code });
  
  const country = ref(null);
  
 
  
  onMounted(() => {
  refetch().then(() => {
    if (result.value) {
      country.value = result.value;
      console.log(country.value);
    }
  });
});
  
  </script>
  