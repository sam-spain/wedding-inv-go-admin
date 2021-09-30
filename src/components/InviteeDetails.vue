<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-md mx-auto">
      <form class="w-full bg-gray-300 shadow rounded-sm mt-5 p-12">
      <label class="block text-gray-700 text-sm font-bold" for="inviteIdField"
        >Invitee ID</label
      >
      <input
        id="inviteIdField"
        class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
        v-bind:value="this.$route.params.userId"
        readonly
      />

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
        for="preferredNameInput"
        >Known As</label
      >
      <input
        id="preferredNameInput"
        class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
        v-model="model.preferredName"
      />

      <label
        class="block text-gray-700 text-sm font-bold"
        for="inviteeStatusInput"
        >Invitee Status</label
      >
      <select
        id="inviteeStatusInput"
        class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
        v-model="model.inviteeStatus"
      >
        <option value="Not Sent">Not Sent</option>
        <option value="Sent">Sent</option>
        <option value="Responded">Responded</option>
        <option value="Revoked">Revoked</option>
      </select>

      <label
        class="block text-gray-700 text-sm font-bold"
        for="contactNumberInput"
        >Contact Number</label
      >
      <input
        id="contactNumberInput"
        class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
        v-model="model.contactNumber"
      />

      <label
        class="block text-gray-700 text-sm font-bold"
        for="contactEmailInput"
        >Contact Email</label
      >
      <input
        id="contactEmailInput"
        class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
        v-model="model.contactEmail"
      />

      <label
        class="block text-gray-700 text-sm font-bold"
        for="preferredContactInput"
        >Preferred Contact Method</label
      >
      <select
        id="preferredContactInput"
        class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
        v-model="model.preferredContact"
      >
        <option value="Email">Email</option>
        <option value="Number">Number</option>
        <option value="Facebook">Facebook</option>
      </select>
      <div class="flex">
        <label
          class="block mr-3 text-gray-700 text-sm font-bold"
          for="invitedToCeremonyInput"
          >Invited To Ceremony?</label
        >
        <input
          type="checkbox"
          id="invitedToCeremonyInput"
          v-model="model.invitedToCeremony"
        />
      </div>
      <div class="flex">
        <label
          class="block mr-3 text-gray-700 text-sm font-bold"
          for="attendingCeremonyInput"
          >Attending Ceremony?</label
        >
        <input
          type="checkbox"
          id="attendingCeremonyInput"
          v-model="model.attendingCeremony"
        />
      </div>
      <div class="flex">
        <label
          class="block mr-3 text-gray-700 text-sm font-bold"
          for="invitedToReceptionInput"
          >Invited To Reception?</label
        >
        <input
          type="checkbox"
          id="invitedToReceptionInput"
          v-model="model.invitedToReception"
        />
      </div>
      <div class="flex">
        <label
          class="block mr-3 text-gray-700 text-sm font-bold"
          for="attendingReceptionInput"
          >Attending Reception?</label
        >
        <input
          type="checkbox"
          id="attendingReceptionInput"
          v-model="model.attendingReception"
        />
      </div>
      <label
        class="block text-gray-700 text-sm font-bold"
        for="dietaryNotesInput"
        >Dietary Notes</label
      >
      <textarea
        class="block bg-gray-100 text-gray-700 text-sm font-bold"
        id="dietaryNotesInput"
        rows="10"
        cols="40"
        v-model="model.dietaryNotes"
      />
      <label
        class="block text-gray-700 text-sm font-bold"
        for="additionalNotesInput"
        >Additional Notes</label
      >
      <textarea
        class="block bg-gray-100 text-gray-700 text-sm font-bold"
        id="additionalNotesInput"
        rows="10"
        cols="40"
        v-model="model.additionalNotes"
      />

      <button
        v-on:click="updateInvitee"
        type="button"
        class="w-1/4 mr-3 mt-3 py-3 bg-blue-400 text-white rounded-sm"
      >
        Save
      </button>
      <button
        v-on:click="cancel"
        type="button"
        class="w-1/4 mr-3 mt-3 py-3 bg-gray-400 text-white rounded-sm"
      >
        Cancel
      </button>

      <button
        v-on:click="deleteInvitee"
        type="button"
        class="w-1/4 mt-3 py-3 bg-red-400 text-white rounded-sm"
      >
        Delete
      </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "InviteeDetails",
  data: () => ({
    model: {
      enteredName: "",
      preferredName: "",
      inviteeStatus: "",
      contactNumber: "",
      contactEmail: "",
      preferredContact: "",
      invitedToCeremony: false,
      attendingCeremony: false,
      invitedToReception: false,
      attendingReception: false,
      dietaryNotes: "",
      additionalNotes: "",
    },
  }),
  mounted() {
    this.getInvitee();
  },
  methods: {
    async updateInvitee() {
      this.model = await this.$http.put(
        `/api/v1/invitee/${this.$route.params.userId}`,
        this.model
      );
      this.$router.push({ path: "/invitees" });
    },
    async deleteInvitee() {
      await this.$http.delete(
        `/api/v1/invitee/${this.$route.params.userId}`,
        this.model
      );
      this.$router.push({ path: "/invitees" });
    },
    cancel() {
      this.$router.push({ path: "/invitees" });
    },
    async getInvitee() {
      const response = await this.$http.get(
        `/api/v1/invitee/${this.$route.params.userId}`
      );
      console.log(response.data);
      this.model = response.data;
    },
  },
};
</script>
