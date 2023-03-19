<template>
  <div>
    <input type="file" @change="handleFileUpload">
    <button v-if="isUploaded">
      <router-link to="/display-data">View Data</router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUploaded: false
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
          localStorage.setItem('myData', JSON.stringify(jsonData));
          this.isUploaded = true;
        } catch (e) {
          console.error(e);
        }
      };
      reader.readAsText(file);
    },
    uploadData() {
      const data = localStorage.getItem('myData');
      // do something with the data, such as send it to a server
      console.log(data);
    },
    clearData() {
      localStorage.removeItem('myData');
      this.isUploaded = false;
    },
  },
  computed: {
    myData() {
      const data = localStorage.getItem('myData');
      return data ? JSON.parse(data) : null;
    },
  },
};
</script>
