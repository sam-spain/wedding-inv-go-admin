<template>
  <form>
    <label for="inviteeIdField"> Invitee ID </label>
    <input
      id="inviteeIdField"
      v-bind:value="this.$route.params.userId"
      readonly
    />
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
  mounted() {},
  methods: {
    async updateInvitee() {
      this.model = await this.$http.put(
        `/api/invitee/${this.$route.params.userId}`,
        this.model
      );
      this.$router.push({ path: "/invitees" });
    },
    async deleteInvitee() {
      await this.$http.delete(
        `/api/invitee/${this.$route.params.userId}`,
        this.model
      );
      this.$router.push({ path: "/invitees" });
    },
    cancel() {
      this.$router.push({ path: "/invitees" });
    },
    async getInvitee() {
      const response = await this.$http.get(
        "/api/invitee/${this.$route.params.userId}"
      );
      this.model = response.data;
    },
  },
};
</script>