<template>
  <div>
    Let's see component B to C {{level}}
    <comp-c :level="level+1"></comp-c>
  </div>
</template>

<script>
import CompC from './CompC'

export default {
  props: ['level'],
  components: {
    CompC
  }
}
</script>