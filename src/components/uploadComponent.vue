<template>
  <div>
    <input type="file" @change="handleFileUpload">
    <button @click="uploadData">Upload</button>
    <div v-if="isUploaded">
      <router-link to="/display-data">View Data</router-link>
    </div>
  </div>
</template>

<script>
import { parseString } from 'xml2js';

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
        const xmlString = reader.result;
        parseString(xmlString, { explicitArray: false }, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          try {
            const jsonData = JSON.stringify(result);
            localStorage.setItem('myData', jsonData);
            this.isUploaded = true;
          } catch (e) {
            console.error(e);
          }
        }
      });
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
