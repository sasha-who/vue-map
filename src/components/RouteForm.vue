<template>
  <form class="route-form" @submit.prevent>
    <input
      class="route-form__input"
      type="text"
      name="point"
      placeholder="Enter the name of the new point"
      v-model="title"
      @keyup.enter="addPoint"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    addPoint() {
      if (this.title.trim()) {
        const newPoint = {
          id: Date.now(),
          title: this.title,
          address: ''
        }

        this.$emit('add-point', newPoint);
        this.title = '';
      }
    }
  }
}
</script>

<style>
.route-form {
  margin-top: 20px;
}

.route-form__input {
  width: 100%;
  padding-top: 7px;
  padding-bottom: 7px;
  box-sizing: border-box;
}
</style>
