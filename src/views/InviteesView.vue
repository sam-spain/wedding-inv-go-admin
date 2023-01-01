<template>
  <div class="Invitees">
    <p>List all invitees here.</p>
    <router-link :to="{name: 'CreateInvitee'}">
    Create New Invitee
    </router-link>
    <div v-if="inviteesData">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Known As</th>
            <th>Status</th>
            <th>Declined Invite</th>
            <th>Invited To Ceremony</th>
            <th>Attending Ceremony</th>
            <th>Invited To Reception</th>
            <th>Attending Reception</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="invitee in inviteesData.data" :key="invitee._id">
          <tr>
            <td>{{ invitee.enteredName }}</td>
            <td>{{ invitee.preferredName }}</td>
            <td>{{ invitee.inviteeStatus }}</td>
            <td>{{ invitee.declinedInvite }}</td>
            <td>{{ invitee.invitedToCeremony }}</td>
            <td>{{ invitee.attendingCeremony }}</td>
            <td>{{ invitee.invitedToReception }}</td>
            <td>{{ invitee.attendingReception }}</td>
            <td>
              <router-link :to="{
                name: 'InviteeDetails',
                params: { userId: invitee._id },
              }">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
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
