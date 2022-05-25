import Vue from 'vue';
import vuescroll from 'vuescroll';

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    // The global config
      rail: {
    background: '#01a99a',
    opacity: 0,
    size: '3px',
    specifyBorderRadius: false,
    gutterOfEnds: null,
     gutterOfSide: '2px',
    keepShow: false
    },
    
  bar: {
    showDelay: 500,
    onlyShowBarOnScroll: true,
    keepShow: false,
    background: '#cecece',
    opacity: 1,
    hoverStyle: false,
    specifyBorderRadius: false,
    minSize: false,
    size: '3px',
    disable: false,
  },  
  },


  name: 'Scroll' // customize component name, default -> vueScroll
});