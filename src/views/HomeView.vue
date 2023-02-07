<template>
  <h1>
    <p>Home Page {{ $route.params.id }}</p>
    <p>Invitations sent: {{ inviteeSummary.invitationsSent }}</p>
    <p>Total possible guests: {{ inviteeSummary.totalPossibleGuests }}</p>
    <p>Invitations accepted: {{ inviteeSummary.invitationsAccepted }}</p>
    <p>Invitations declined: {{ inviteeSummary.invitationsDeclined }}</p>
    <p>Invitations outstanding: {{ inviteeSummary.invitationsOutstanding }}</p>
    <p>Total guests attending reception: {{ inviteeSummary.totalGuestsAttendingReception }}</p>
    <p>Total guests attending ceremony: {{ inviteeSummary.totalGuestsAttendingCeremony }}</p>
  </h1>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      inviteeSummary: {
        invitationsSent: undefined,
        totalPossibleGuests: undefined,
        invitationsAccepted: undefined,
        invitationsDeclined: undefined,
        invitationsOutstanding: undefined,
        totalGuestsAttendingReception: undefined,
        totalGuestsAttendingCeremony: undefined
      }
    }
  },
  created() {
    this.getInviteeSummary();
  },
  methods: {
    async getInviteeSummary() {
      const response = await this.$http.get("/api/v1/invitee/summary", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.inviteeSummary = response.data;
    }
  }
};
</script>
