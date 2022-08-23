<template>
  <form>
    <div>
      <label for="inviteeIdField"> Invitee ID </label>
      <input id="inviteeIdField" v-bind:value="this.$route.params.userId" readonly />
    </div>
    <div>
      <label for="enteredNameInput">Full Name</label>
      <input id="enteredNameInput" v-model="model.enteredName" />
    </div>
    <div>
      <label for="preferredNameInput">Preferred Name</label>
      <input id="preferredNameInput" v-model="model.preferredName" />
    </div>
    <div>
      <label for="inviteeStatusInput">Invitation Status</label>
      <select id="inviteeStatusInput" v-model="model.inviteeStatus">
        <option value="Not Sent">Not Sent</option>
        <option value="Sent">Sent</option>
        <option value="Responded">Responded</option>
        <option value="Revoked">Revoked</option>
      </select>
    </div>
    <div>
      <label for="contactNumberInput">Contact Number</label>
      <input id="contactNumberInput" v-model="model.contactNumber" />
    </div>
    <div>
      <label for="contactEmailInput">Contact Email</label>
      <input id="contactEmailInput" v-model="model.contactEmail" />
    </div>
    <div>
      <label for="preferredContactInput">Preferred Contact</label>
      <select id="preferredContactInput" v-model="model.preferredContact">
        <option value="Email">Email</option>
        <option value="Number">Number</option>
        <option value="Facebook">Facebook</option>
      </select>
    </div>
    <div>
      <label for="invitedToCeremonyInput">Invited To Ceremony</label>
      <input type="checkbox" id="invitedToCeremonyInput" v-model="model.invitedToCeremony" />
    </div>
    <div>
      <label for="attendingCeremonyInput">Attending Ceremony</label>
      <input type="checkbox" id="attendingCeremonyInput" v-model="model.attendingCeremony" />
    </div>
    <div>
      <label for="invitedToReceptionInput">Invited To Reception</label>
      <input type="checkbox" id="invitedToReceptionInput" v-model="model.invitedToRecepion" />
    </div>
    <div>
      <label for="attendingReceptionInput">Attending Reception</label>
      <input type="checkbox" id="attendingReceptionInput" v-model="model.attendingReception" />
    </div>
    <div>
      <label for="dietaryNotesInput">Dietary Notes</label>
      <textarea rows="10" cols="40" id="dietaryNotesInput" v-model="model.dietaryNotes" />
    </div>
    <div>
      <label for="additionalNotesInput">Additional Notes</label>
      <textarea rows="10" cols="40" id="additionalNotesInput" v-model="model.additionalNotes" />
    </div>
    <div>
      <button v-on:click="updateInvitee" type="button">Update
      </button>
      <button v-on:click="cancel" type="button">Cancel</button>
      <button v-on:click="deleteInvitee" type="button">Delete</button>
    </div>
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