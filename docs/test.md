# Test Page


<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button class="btn__test" @click="count++">Increment</button>

<style lang="scss">
.btn {
  &__test {
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;
    background: red
  }
}
</style>
