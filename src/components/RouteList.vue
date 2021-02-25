<template>
  <section class="route-list">
    <h2 class="route-list__title">Все точки маршрута</h2>

    <RouteForm @add-point="addPoint" />

    <ul class="route-list__list" v-if="points.length">
      <draggable v-model="points">
        <RouteListItem
          v-for="point in points"
          :key="point.id"
          :point="point"
          @remove-point="removePoint"
        />
      </draggable>
    </ul>

    <p class="route-list__notice" v-else>Точки маршрута пока не созданы</p>
  </section>
</template>

<script>
import draggable from "vuedraggable";
import RouteForm from '@/components/RouteForm';
import RouteListItem from '@/components/RouteListItem';

export default {
  props: ['points'],
  components: {
    draggable,
    RouteForm,
    RouteListItem
  },
  methods: {
    removePoint(id) {
      this.$emit('remove-point', id);
    },
    addPoint(newPoint) {
      this.$emit('add-point', newPoint);
    }    
  }
}
</script>

<style>
.route-list {
  position: fixed;
  top: 0;
  left: 0;

  width: 300px;
  min-height: 100vh;
  padding-top: 60px;
  padding-right: 10px;
  padding-bottom: 60px;
  padding-left: 10px;

  color: #ffffff;

  background-color: #2c3e50;
}

.route-list__title {
  margin: 0;
}

.route-list__list {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;

  list-style: none;
}

.route-list__notice {
  margin-top: 20px;
  margin-bottom: 0;

  font-size: 16px;

  opacity: 0.7;
}
</style>
