<template>
  <div id="app">
    <h1>Составьте свой маршрут за пару кликов</h1>

    <RouteList
      :points="points"
      @remove-point="removePoint"
      @add-point="addPoint"
    />
  </div>
</template>

<script>
import RouteList from '@/components/RouteList';

export default {
  name: 'App',
  data() {
    return {
      points: [
        {id: 1, title: 'Точка 1'},
        {id: 2, title: 'Точка 2'},
        {id: 3, title: 'Точка 3'}
      ]
    }
  },
  components: {
    RouteList
  },
  methods: {
    removePoint(id) {
      this.points = this.points.filter((item) => item.id !== id);
    },
    addPoint(newPoint) {
      this.points.push(newPoint);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: 30px;
  margin-bottom: 60px;
  margin-left: 30px;
}

h1 {
  text-align: right;
}
</style>
