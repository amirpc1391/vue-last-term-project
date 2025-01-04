<script setup>

import { useAuthStore } from "@/stores/auth.js";
import { onMounted } from "vue";
import router from "@/router/index.js";

const auth = useAuthStore()

onMounted( () =>
{

  auth.isAuth = false
  auth.reset()
  router.push( '/auth' )

} )

</script>