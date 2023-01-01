<template>
  <form>
    <div>
      <label for="inviteeIdField"> Invitee ID </label>
      <input id="inviteeIdField" v-bind:value="this.$route.params.userId" readonly />
    </div>
    <div>
      <label for="inviteeCodeField"> Access Token</label>
      <input id="inviteeCodeField" v-model="model.inviteeAccessToken" readonly />
      <button v-on:click="setInviteLink" type="button">Copy</button>
    </div>
    <div>
      <label for="enteredNameInput">Full Name</label>
      <input id="enteredNameInput" v-model="model.enteredName" />
    </div>
    <div>
      <label for="preferredNameInput">Preferred Name</label>
      <input id="preferredNameInput" v-model="model.preferredName" readonly />
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
      <input type="checkbox" id="invitedToReceptionInput" v-model="model.invitedToReception" />
    </div>
    <div>
      <label for="attendingReceptionInput">Attending Reception</label>
      <input type="checkbox" id="attendingReceptionInput" v-model="model.attendingReception" />
    </div>
    <div>
      <label for="declinedInviteInput">Declined Invite</label>
      <input type="checkbox" id="declinedInviteInput" v-model="model.declinedInvite" disabled />
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
      <label for="adminNotesInput">Admin Notes</label>
      <input id="adminNotesInput" v-model="model.adminNotes" />
    </div>
    <div>
      <label for="additionalGuestsAvailableInput">Additional Guests Available</label>
      <input type="number" id="additionalGuestsAvailableInput" v-model="model.additionalGuestAvailable" />
    </div>
    <div>Total guests saved: {{model.additionalGuests.length}}</div>
    <div>
      <button v-on:click="createAdditionalGuest" type="button" >Add Additional
        Guest</button>
    </div>
    <span v-for="(guest, index) in model.additionalGuests" v-bind:key="guest.preferredName">
      <div>
        <p>Guest {{ index + 1 }}</p>
        <div>
          <label>Preferred Name</label>
          <input v-model="guest.preferredName" />
        </div>
        <div>
          <label>Dietary Notes</label>
          <input v-model="guest.dietaryNotes" />
        </div>
        <div>
          <label>Additional Notes</label>
          <input v-model="guest.additionalNotes" />
        </div>
        <button v-on:click="removeAdditionalGuest(index)" type="button">Delete</button>
      </div>
    </span>
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
      attendingReception: false,
      declinedInvite: false,
      dietaryNotes: "",
      additionalNotes: "",
      adminNotes: "",
      inviteeAccessToken: "",
      additionalGuests: [],
      additionalGuestAvailable: 0
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
    createAdditionalGuest() {
      this.model.additionalGuests.push({});
    },
    removeAdditionalGuest(index) {
      this.model.additionalGuests.splice(index, 1);
    },
    async setInviteLink() {
      await navigator.clipboard.writeText(`https://gospainwedding.com/invitation/${this.model.inviteeAccessToken}`);
    } 
  },
};
</script>