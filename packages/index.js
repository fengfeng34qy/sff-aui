
import sffBox from './sff-box'

let components = [sffBox]

let install = function(Vue, options) {
  components.forEach(function (component) {
    Vue.use(component);
  });
}

export default {
  install
};

