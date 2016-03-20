<template>
  <div>
    Let's see component C to A {{level}}
    <div v-if="level<11111111">
    	<comp-a :level="level+1"></comp-a>
    </div>
  </div>
</template>

<script>
import CompA from './CompA'

export default {
  props: ['level'],
  components: {
    CompA
  }
}
</script>