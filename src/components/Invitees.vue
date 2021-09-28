<template>
  <div class="Invitees">
    <p class="text-xl">List all invitees here.</p>
    <div v-if="inviteesData">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2 text-blue-600">Full Name</th>
            <th class="px-4 py-2 text-blue-600"> Known As</th>
            <th class="px-4 py-2 text-blue-600">Status</th>
            <th class="px-4 py-2 text-blue-600">Invited To Ceremony</th>
            <th class="px-4 py-2 text-blue-600">Attending Ceremony</th>
            <th class="px-4 py-2 text-blue-600">Invited To Reception</th>
            <th class="px-4 py-2 text-blue-600">Attending Reception</th>
          </tr>
        </thead>
        <tbody v-for="invitee in inviteesData" :key="invitee._id">
          <tr class="bg-blue-200">
            <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{{ invitee.enteredName }}</td>
            <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{{ invitee.preferredName }}</td>
            <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{{ invitee.inviteeStatus }}</td>
            <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{{ invitee.invitedToCeremony }}</td>
            <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{{ invitee.attendingCeremony }}</td>
            <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{{ invitee.invitedToReception }}</td>
            <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{{ invitee.attendingReception }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No data loaded</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invitees",
  data() {
    return {
      inviteesData: undefined,
    };
  },
  mounted() {
    this.getInvitees();
  },
  methods: {
    async getInvitees() {
      const response = await this.$http.get("/api/v1/invitee");
      console.log(response.data);
      this.inviteesData = response.data;
    },
  },
};
</script>
