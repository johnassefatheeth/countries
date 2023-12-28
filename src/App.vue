<template>
  <div>
    <h1>Countries</h1>
    <ul v-if="!loading && !error">
      <li v-for="country in countries" :key="country.code">
        {{ country.name }} - {{ country.capital }} ({{ country.code }})
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error loading data</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gql } from '@apollo/client/core';
import { useQuery } from '@vue/apollo-composable';

const countriesQuery = gql`
  query {
    countries {
      name
      code
      capital
    }
  }
`;

const { result, loading, error } = useQuery(countriesQuery);
const countries = ref([]);

onMounted(async () => {
  console.log(result)
  const data  =result.value; // Access the function by calling result.value()
  countries.value = data.countries;

});
</script>