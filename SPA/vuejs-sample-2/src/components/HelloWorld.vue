<template>
  <div class="hello">
    <Search @queryUpdated="updateQuery" />

    <h1>{{ msg }}</h1>
    <input type="text" :value="msg" @input="(e) => changedData" />
    <h1>{{ test }}</h1>
    <h1>{{ getName | upperCase }}</h1>
    <button @click="updateData">Update</button>

    <!-- <input type="text" :value="search" @input="(e) => search = e.target.value " /> -->
    <!-- <input placeholder="Search" type="text" v-model="search" /> -->
  </div>
</template>

<script>
export const testData = { name: "Fero" };
import Search from "./Search";

export default {
  name: "HelloWorld",
  components: {
    Search,
  },
  props: ["msg", "test"],
  data() {
    return {
      search: "",
    };
  },
  computed: {
    getName() {
      return `${this.innerMsg} +++ ${this.msg} `;
    },
  },
  methods: {
    changedData(e) {
      this.$emit("update:msg", e.target.value);
    },
    updateData() {
      this.$emit("updateData", { data: "hu ha" });
    },
    async updateQuery({ query }) {
        console.log(query)
    },
  },
  watch: {
    search(newVal, oldVal) {
      console.log(`old val ${oldVal} ... new val ${newVal}`);
    },
  },
  filters:{
      upperCase(value){
          return value.toUpperCase();
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
