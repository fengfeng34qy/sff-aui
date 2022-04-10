import sffBox from './src/sff-box';
sffBox.install = function(Vue) {
  Vue.component(sffBox.name, sffBox);
}

export default sffBox;