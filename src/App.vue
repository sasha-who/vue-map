<template>
  <div id="app">
    <RouteList
      :points="points"
      @remove-point="removePoint"
      @add-point="addPoint"
    />

    <GmapMap
      :center="$getConst('INITIAL_CENTER_LOCATION')"
      :zoom="14"
      style="width: calc(100% - 320px); height: 100vh; margin-left: 320px;"
    >
      <GmapMarker
        :key="point.id"
        v-for="point in points"
        :position="$getConst('INITIAL_CENTER_LOCATION')"
        :clickable="true"
        :draggable="true"
        @click="center=$getConst('INITIAL_CENTER_LOCATION')"
        @dragend="updateCoordinates($event.latLng, point)"
      />

      <gmap-polyline :path.sync="path" :options="{ strokeColor:'#2c3e50'}" />
    </GmapMap>
  </div>
</template>

<script>
import RouteList from '@/components/RouteList';

export default {
  name: 'App',
  data() {
    return {
      points: [],
      path: []
    }
  },
  components: {
    RouteList
  },
  watch: {
    points(value) {
      this.path = value.map((item) => item.position);
    }
  },
  methods: {
    removePoint(id) {
      this.points = this.points.filter((item) => item.id !== id);
    },
    addPoint(newPoint) {
      this.points.push(newPoint);
    },
    updateCoordinates(evt, point) { 
      const currentPointIndex = this.points.findIndex((item) => item.id === point.id);

      point.position = { lat: evt.lat(), lng: evt.lng() };
      this.path.splice(currentPointIndex, 1, point.position);
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
