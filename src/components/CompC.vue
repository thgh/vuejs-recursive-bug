<template>
  <div>
    C to A {{level}}
    <comp-a :level="level+1"></comp-a>
  </div>
</template>

<script>
export default {
  props: ['level']
}
</script>