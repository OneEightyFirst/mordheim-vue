<template>
  <div>
    <v-toolbar density="comfortable" title="Mordheim">
      <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon>
          <v-icon icon="fa:fas fa-list"></v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/display-data">View Data</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
  <section>
  <v-container>
    <v-row v-for="(warband, index) in warbands" :key="index">
      <v-col>
        <v-card>
          <template v-slot:text>
            <h4>Warband uploaded:</h4>
            <h1>{{ warband.warbandName }}</h1>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <template v-slot:text>
            <label for="file-upload">Add Another</label>
            <input type="file" id="file-upload" @change="handleFileUpload">
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</section>



  </div>
</template>

<script>
export default {
  props: {
    dataKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isUploaded: false,
      localStorageKey: 'warband', // new property to hold the key
      warbands: [], // new property to hold an array of warbands
    }
  },
  created() {
    const keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key.startsWith('warband')) {
        const data = JSON.parse(localStorage.getItem(key));
        this.warbands.push(data);
      }
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const jsonString = reader.result;
        try {
          const jsonData = JSON.parse(jsonString);
          const key = `${this.localStorageKey}-${Date.now()}`; // use a unique key for each warband
          localStorage.setItem(key, JSON.stringify(jsonData));
          this.isUploaded = true;
          this.warbands.push(jsonData); // push the new warband to the array
          // update the warband computed property with the new data
          this.$nextTick(() => {
            this.warband = jsonData;
          });
        } catch (e) {
          console.error(e);
        }
      };
      reader.readAsText(file);
    },
    clearData() {
      localStorage.removeItem('warband');
      this.isUploaded = false;
      // update the warband computed property with null
      this.warband = null;
    },
  },
  computed: {
    warband() {
      const data = JSON.parse(localStorage.getItem('warband'));
      return data;
    },
  },
};
</script>

