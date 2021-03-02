<template>
  <div id="app" class="container">
    <RouteList
      :points="points"
      @remove-point="removePoint"
      @add-point="addPoint"
    />

    <GmapMap
      :center="$getConst('INITIAL_CENTER_LOCATION')"
      :zoom="14"
      style="width: 75%; height: 100vh;"
      ref="map"
    >
      <GmapMarker
        :key="point.id"
        v-for="(point, index) in points"
        :position="point.position"
        :clickable="true"
        :draggable="true"
        @click="toggleInfoWindow(point)"
        @dragstart="removeInfoWindowWhileDragging(point)"
        @drag="redrawPath($event.latLng, index)"
        @dragend="redrawPath($event.latLng, index), updateCoordinates($event.latLng, point), setAddress($event.latLng, point)"
      />

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPosition"
        :opened="isInfoWindowOpen"
        @closeclick="isInfoWindowOpen = false"
      />

      <gmap-polyline :path.sync="path" :options="{ strokeColor:'#2c3e50'}" />
    </GmapMap>
  </div>
</template>

<script>
import axios from 'axios'
import RouteList from '@/components/RouteList';

export default {
  name: 'App',
  data() {
    return {
      points: [],
      path: [],
      pointWithOpenWindowId: null,
      infoWindowPosition: null,
      isInfoWindowOpen: false,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
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
      const mapCenter = this.$refs.map.$mapObject.getCenter();

      newPoint.position = { lat: mapCenter.lat(), lng: mapCenter.lng() };

      this.points.push(newPoint);
    },
    updateCoordinates(evt, point) { 
      point.position = { lat: evt.lat(), lng: evt.lng() };
    },
    redrawPath(evt, index) {
      this.path.splice(index, 1, { lat: evt.lat(), lng: evt.lng() });
    },
    setAddress(evt, point) {
      axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${evt.lat()},${evt.lng()}&key=AIzaSyC0m6cM1EYezpN9-QyEQEO8BRAxWQah9UM`)
        .then((response) => {
          point.address = `${response.data.results[0].formatted_address}`;
        })
        .catch((error) => {
          console.log(error);
          point.address = 'failed to recognize';
        });
    },
    toggleInfoWindow(point) {
      this.infoWindowPosition = point.position;
      this.infoOptions.content = `${point.title}. Address: ${point.address}`;

      if (this.pointWithOpenWindowId === point.id) {
        this.isInfoWindowOpen = !this.isInfoWindowOpen;
      } else {
        this.isInfoWindowOpen = true;
        this.pointWithOpenWindowId = point.id;
      }
    },
    removeInfoWindowWhileDragging(point) {
      if (this.pointWithOpenWindowId === point.id && this.isInfoWindowOpen) {
        this.isInfoWindowOpen = false;
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.container {
  display: flex;
  height: 100vh;

  font-family: "Avenir", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #2c3e50;
}

@media (max-width: 768px) {
  .container {
    width: 768px;
  }
}
</style>
