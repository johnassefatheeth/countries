<template>
    <div class="justify-center flex flex-col content-center w-screen items-center bg-zinc-600 p-4">
      <h4 class="text-4xl m-4 text-cyan-300 center">Countries</h4>

       <select v-model="continent">
        <option value="all">all</option>
        <option value="Africa"> Africa</option>
        <option value="Antatica">Antatica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania"></option>
       </select>
      <div class="" v-if="!loading && !error" >
         
          <div v-for="country in countryList.countries" :key="country.code" @click="router.push(`/country/${country.code}`)" class="h-52 bg-slate-400 m-2 w-72 inline-block rounded-xl felx justify-center">
            <h1 class="text-2xl m-2 font-bold">
            {{ country.name }}</h1> 
            <h1 class="text-xl m-2">capital: {{ country.capital }}</h1>
            {{ country.continent.name }} 
                
        </div>
        
      </div>
     
      <p v-if="loading">Loading...</p>
      <p v-if="error">Error loading data</p>
  
    </div>
    
  </template>
  
  <script setup>
  import { gql } from '@apollo/client/core';
  import { useQuery } from '@vue/apollo-composable';
  import {useRouter} from 'vue-router'
  import {ref,watch} from 'vue'


  const router=useRouter()

  const continent= ref("")

  watch(continent,()=>{
    if(continent.value){
        if(continent.value==="all"){
            countryList=result
        }
        else{
            countryList.value= result.countries.filter(c => c.continent.name===continent.value)
        }

    }

  })

 
  
  const {result} =useQuery ( gql`
        query {
          countries {
            name
            code
            capital
            continent {
                name
            }
          }
        }
      `); 


var countryList= result
console.log(result.countries)
      
  
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