<template>
  <div>
    Let's see component A to B {{level}}
    <comp-b :level="level+1"></comp-b>
  </div>
</template>

<script>
import CompB from './CompB'

export default {
  props: ['level'],
  components: {
    CompB
  }
}
</script>