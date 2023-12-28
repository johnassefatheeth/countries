<template>
  <div>
    <h1>Countries</h1>
    <ul v-if="!loading && !error">
      <li  v-for="country in result.countries" :key="country.code">
        <div class="w-24 h-24"><h1>{{ country.name }}</h1> - {{ country.capital }} ({{ country.code }})</div>
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error loading data</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gql } from '@apollo/client/core';
import { useQuery } from '@vue/apollo-composable';

const {result} =useQuery(gql`
  query {
    countries {
      name
      code
      capital
    }
  }
`) 

// const { result, loading, error } = useQuery(countriesQuery);
// const countries = ref([]);

// // Load countries from localStorage if available
// const storedCountries = localStorage.getItem('countries');
// if (storedCountries) {
//   countries.value = JSON.parse(storedCountries);
// } else {
//   onMounted(() => {
//     if (result.value) {
//       countries.value = result.value.countries;
//       localStorage.setItem('countries', JSON.stringify(result.value.countries));
//     }
//   });
// }

console.log(result.value);
</script>