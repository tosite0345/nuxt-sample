<template>
  <div>
    <h1>
      Tasks
    </h1>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">create task</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="task name*" v-model="newName" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="create">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <ul>
      <li v-for="row in rows" :key="row.id">{{ row.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rows: [],
      dialog: false,
      newName: ''
    }),
    async asyncData({app}) {
      const res = await app.$axios.$get('/api/tasks')
      return {rows: res}
    },
    methods: {
      create() {
        this.$axios.$post('/api/tasks', {name: this.newName})
        this.dialog = false
      },
    }
  }
</script>
