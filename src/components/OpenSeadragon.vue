<template>
  <div id="container"></div>
</template>

<script>
/* eslint-disable no-unused-vars */

import OpenSeadragon from 'openseadragon'
import './openSeadragonFabricjsOverlay'
export default {
  name: 'OpenSeadragon',
  data () {
    return {
      viewer: undefined,
      fabricjsOverlay: undefined
    }
  },
  mounted: function () {
    var tileSource = {
      Image: {
        xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
        Url: 'http://openseadragon.github.io/example-images/highsmith/highsmith_files/',
        Format: 'jpg',
        Overlap: '2',
        TileSize: '256',
        Size: {
          Height: '9221',
          Width: '7026'
        }
      }
    }
    this.viewer = OpenSeadragon({
      id: 'container',
      prefixUrl: 'openseadragon/images/',
      tileSources: [{
        tileSource: tileSource,
        width: 1,
        y: 0,
        x: 0
      }]

    })
    // initialize overlay
    var options = {
      scale: 1000
    }
    this.fabricjsOverlay = this.viewer.fabricjsOverlay(options)
  }
}
</script>

<style scoped>
#container{
  width:800px;
  height:600px;
}
</style>
