<template>
    <div>
      <HeaderComponent />
      <ContentComponent>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </ContentComponent>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import ContentComponent from '@/components/ContentComponent.vue';
  
  export default {
    name: 'HomeView',
    components: {
      HeaderComponent,
      FooterComponent,
      ContentComponent,
    },
  };
  </script>
  