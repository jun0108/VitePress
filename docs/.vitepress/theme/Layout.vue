<script setup>
import DefaultTheme from 'vitepress/theme'
import test from './404.vue'
import './style.css'

const { Layout } = DefaultTheme
</script>

<template>
  <!-- 아래 링크에서 레이아웃 slot 처리 가능 -->
  <!-- https://vitepress.dev/guide/extending-default-theme#layout-slots -->
  <Layout>
    <template #not-found>
      <test />
    </template>
  </Layout>
</template>