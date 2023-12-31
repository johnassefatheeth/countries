<template>
    <div class="justify-center flex flex-col content-center w-screen items-center bg-zinc-600 p-4">
      <h4 class="text-4xl m-4 text-cyan-300 center">Countries</h4>
      <div class="justify-center" v-if="!loading && !error" >
         
          <div v-for="country in result.countries" :key="country.code" class="h-52 bg-slate-400 m-2 w-72 inline-block rounded-xl felx justify-center">
            <h1 class="text-2xl m-2 font-bold">
            {{ country.name }}</h1> 
            <h1 class="text-xl m-2">capital: {{ country.capital }}</h1> 
                {{ country.code }}
        </div>
        
      </div>
     
      <p v-if="loading">Loading...</p>
      <p v-if="error">Error loading data</p>
  
    </div>
    
  </template>
  
  <script setup>
  import { gql } from '@apollo/client/core';
  import { useQuery } from '@vue/apollo-composable';
  
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
  
  </script>