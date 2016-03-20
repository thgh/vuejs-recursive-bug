<template>
  <div>
    B to C {{level}}
    <div v-if="level<11111111">
      <comp-c :level="level+1"></comp-c>
    </div>
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