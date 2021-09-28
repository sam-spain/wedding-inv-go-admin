<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-md mx-auto">
      <form class="w-full bg-white shadow rounded-sm mt-5 p-12">
        <label
          class="block text-gray-700 text-sm font-bold"
          for="enteredNameInput"
          >Full Name</label
        >
        <input
          id="enteredNameInput"
          class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
          v-model="model.enteredName"
        />
        <label
          class="block text-gray-700 text-sm font-bold"
          for="invitedToCeremonyInput"
          >Invited To Ceremony?</label
        >
        <input
          type="checkbox"
          id="invitedToCeremonyInput"
          v-model="model.invitedToCeremony"
        />
        <label
          class="block text-gray-700 text-sm font-bold"
          for="invitedToReceptionInput"
          >Invited To Reception?</label
        >
        <input
          type="checkbox"
          id="invitedToReceptionInput"
          v-model="model.invitedToReception"
        />
        <button v-on:click="createInvitee" type="button" class="w-full mt-3 py-3 bg-blue-400 text-white rounded-sm">
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateInvitee",
  data: () => ({
    model: {
      enteredName: "",
      invitedToCeremony: false,
      invitedToReception: false,
    },
  }),
  methods: {
    async createInvitee() {
      console.log(this.model);
      await this.$http.post("/api/v1/invitee", {
          enteredName: this.model.enteredName,
          invitedToCeremony: this.model.invitedToCeremony,
          invitedToReception: this.model.invitedToReception,
      });
      this.$router.push({ path: '/invitees' })
    },
  },
};
</script>
