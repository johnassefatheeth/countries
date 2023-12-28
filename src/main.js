import { createApp, provide, h } from 'vue';
import App from './App.vue'; // Make sure to provide the correct path to your App component
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.mount('#app');
