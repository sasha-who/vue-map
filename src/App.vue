<template>
  <div id="app">
    <RouteList
      :points="points"
      @remove-point="removePoint"
      @add-point="addPoint"
    />

    <GmapMap
      :center="center"
      :zoom="14"
      map-type-id="terrain"
      style="width: calc(100% - 320px); height: 100vh; margin-left: 320px;"
    >
      <GmapMarker
        :key="point.id"
        v-for="point in points"
        :position="center"
        :clickable="true"
        :draggable="true"
        @click="center=center"
      />
    </GmapMap>
  </div>
</template>

<script>
import RouteList from '@/components/RouteList';

export default {
  name: 'App',
  data() {
    return {
      center: { lat: 57.47215240038789, lng: -4.211518416535753 },
      points: [
        { id: 1, title: 'Точка 1', position: this.center },
        { id: 2, title: 'Точка 2', position: this.center },
        { id: 3, title: 'Точка 3', position: this.center }
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
}

body {
  margin: 0;
}

h1 {
  text-align: right;
}
</style>
