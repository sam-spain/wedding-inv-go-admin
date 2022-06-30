<template>
  <div class="Invitees">
    <p>List all invitees here.</p>
    <div v-if="inviteesData">
      <li v-for="invitee in inviteesData.data" :key="invitee._id">
        {{ invitee.enteredName }}
      </li>
      <button @click="backButton">Back Page</button>
      <button @click="forwardButton">Forward Page</button>
    </div>
    <div v-else>
      <p>No data loaded</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InviteesView",
  data() {
    return {
      inviteesData: undefined,
      pageNumber: 1,
    };
  },
  mounted() {
    this.getInvitees();
  },
  methods: {
    async getInvitees() {
      const response = await this.$http.get(
        `/api/v1/invitee?page=${this.pageNumber}`
      );
      this.inviteesData = response.data;
    },
    async backButton() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
        this.getInvitees();
      }
    },
    async forwardButton() {
      const pageSize = this.inviteesData.limit;
      const totalPages = (this.inviteesData.total + pageSize - 1) / pageSize;
      if (this.pageNumber < totalPages) {
        this.pageNumber++;
        this.getInvitees();
      }
    },
  },
};
</script>
