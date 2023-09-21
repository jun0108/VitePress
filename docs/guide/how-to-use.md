<!-- 기존 vue 파일의 <script> 영역 -->
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<!-- 기존 vue 파일의 <template> 영역 -->
# 사용해보기
## 기존 작업 방식대로 코드작성이 가능합니다.
- `<template>` 태그 안에서 코드 작성이 아닌 그냥 바로 코드 작성하시면 됩니다.
- 기존 문법 그대로 사용 가능합니다.

클릭 횟수: {{ count }}

<button class="btn__test" @click="count++">Clik Me!</button>

```
<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)
</script>

클릭 횟수: {{ count }}

<button class="btn__test" @click="count++">Clik Me!</button>

<style lang="scss">
.btn {
  &__test {
    padding: 3px 8px;
    border: 1px solid black;
    border-radius: 8px;
    background: #eeeeee;
  }
}
</style>
```

<!-- 기존 vue 파일의 <style> 영역 -->
<style lang="scss">
$test: #eeeeee;

.btn {
  &__test {
    padding: 3px 8px;
    border: 1px solid black;
    border-radius: 8px;
    background: $test;
  }
}
</style>
