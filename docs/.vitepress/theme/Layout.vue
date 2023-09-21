<script setup>
import { useData } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
import NotFound from './404.vue'
import './style.css'

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()
</script>

<template>
  <NotFound v-if="page.isNotFound" />

  <!-- 아래 링크에서 레이아웃 slot 처리 가능 -->
  <!-- https://vitepress.dev/guide/extending-default-theme#layout-slots -->
  <Layout>
    <!-- <template #not-found>
      <test />
    </template> -->
  </Layout>
</template>