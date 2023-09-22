<script setup>
import { useData } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
import NotFound from './404.vue'
import Home from './Home.vue'

import '/./styles/common.scss'

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()
</script>

<template>
  <NotFound v-if="page.isNotFound" />
  <!-- <Home v-if="frontmatter.layout === 'home'" /> -->
  <!-- 아래 링크에서 레이아웃 slot 처리 가능 -->
  <!-- https://vitepress.dev/guide/extending-default-theme#layout-slots -->
  <Home v-if="frontmatter.layout === 'home'" class="home">
  </Home>
  <Layout>
  </Layout>
</template>