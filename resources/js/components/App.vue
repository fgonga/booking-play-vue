<template>
  <div id="app">
      <component :is="layout" v-if="layout" />
  </div>
</template>

<script>
// Load layout components dynamically.
const requireContext = require.context('~/layouts', false, /.*\.vue$/);
const layouts = requireContext.keys()
  .map((file) => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component;
    return components;
  }, {});
export default {
  el: '#app',
  data: () => ({
    layout: null,
    defaultLayout: 'default',
  }),
  metaInfo() {
    const  appName  = 'Boocking Hotels';
    return {
      title: appName,
      titleTemplate: `%s · ${appName}`,
    };
  },
  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout;
      }

      this.layout = layouts[layout];
    },
  },
};
</script>
