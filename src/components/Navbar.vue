<template>
  <nav class="flex items-center flex-wrap bg-teal-500 p-3">
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <router-link :to="{ name: 'Home' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </router-link>
      <router-link :to="{ name: 'Invitees'}" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Invitees
      </router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
    }
  }
}
</script>