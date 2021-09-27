<template>
    <div class ="Invitees">
        <p>List all invitees here.</p>
        <div v-if="inviteesData">
            <li v-for="invitee in inviteesData" :key="invitee._id">
                {{invitee.enteredName}}
                </li>
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
            inviteesData: undefined
        }
    },
    mounted() {
        this.getInvitees();
    },
    methods: {
        async getInvitees() {
            const response = await this.$http.get(
                '/api/v1/invitee'
            );
            console.log(response.data);
            this.inviteesData = response.data;
        }
    }
}
</script>