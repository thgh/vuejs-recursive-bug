<template>
  <div>
    A{{level}}
    <div v-if="level<111111111">
    	<comp-b :level="level+1"></comp-b>
    </div>
  </div>
</template>

<script>
import CompB from './CompB'

export default {
  name: 'comp-a',
  props: ['level'],
  components: {
    CompB
  }
}
</script>