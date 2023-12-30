<template>
  <Countries/>
</template>

<script setup>
import { gql } from '@apollo/client/core';
import { useQuery } from '@vue/apollo-composable';
import Countries from "./components/Countries.vue";

const {result} =useQuery ( gql`
      query {
        countries {
          name
          code
          capital
        }
      }
    `); 

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