<template>
  <div>
    C to A {{level}}
    <comp-a :level="level+1"></comp-a>
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