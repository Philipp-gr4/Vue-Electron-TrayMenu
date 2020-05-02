<template>
  <button class="fancy-button">{{text}}</button>
</template>

<script>
export default {
  name: "",
  props: ["text"]
};
</script>

<style scoped>
.fancy-button {
  width: 100%;
  height: 30px;
  background-color: white;
  border: 2px solid #494949;
  color: #494949;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.4s ease 0s;
}
.fancy-button:hover {
  background-color: #494949;
  border: 2px solid black;
  color: white;
}
.fancy-button:active {
  letter-spacing: 1px;
  transition: all 0.1s ease 0s;
}
</style>
