const Const = {
  INITIAL_CENTER_LOCATION: { lat: 55.95048267534379, lng: -3.186657634388129 },
  ZOOM: 14,
  INFO_WINDOW_OFFSET: { width: 0, height: -35 }
};

Const.install = function (Vue) {
  Vue.prototype.$getConst = (key) => {
      return Const[key];
  }
};

export default Const;
