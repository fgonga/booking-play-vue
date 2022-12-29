import Vue from 'vue';
import Child from './Child.vue';

[
    Child,
].forEach((Component) => {
    Vue.component(Component.name, Component);
});
