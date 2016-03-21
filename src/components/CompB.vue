<template>
  <div>
    B{{level}}
    <div v-if="level<111111111">
    	<comp-a :level="level+1"></comp-a>
    </div>
  </div>
</template>

<script>
import CompA from './CompA'

export default {
  name: 'comp-b',
  props: ['level'],
  components: {
    CompA
  }
}
</script>