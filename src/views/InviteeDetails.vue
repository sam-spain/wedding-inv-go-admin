<template>
  <form>
    <label for="inviteeIdField"> Invitee ID </label>
    <input
      id="inviteeIdField"
      v-bind:value="this.$route.params.userId"
      readonly
    />
    <br />
    <label for="enteredNameInput">Full Name</label>
    <input id="enteredNameInput" v-model="model.enteredName" />
    <br />
  </form>
</template>

<script>
export default {
  name: "InviteeDetils",
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
      attendingReceptiion: "",
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
      this.model = response.data;
    },
  },
};
</script>