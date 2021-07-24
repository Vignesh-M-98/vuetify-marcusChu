<template>

  <NavBar />
  <router-view/>
  <Footer />

</template>


<script type="text/javascript">
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: {
    NavBar, // register component
    Footer
  },
};
</script>
