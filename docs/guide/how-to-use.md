<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

# `VitePress`를 써보아요
## 기본 문법

- 기존 작업 방식대로 코드작성이 가능합니다.
- ` <template> ` 태그 안에서 코드 작성이 아닌 그냥 바로 코드 작성하시면 됩니다.
- 기존 문법 그대로 사용 가능합니다.


클릭 횟수: {{ count }}

<button class="btn__test" @click="count++">Clik Me!</button>

```

<script>
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

<style lang="scss">

</style>