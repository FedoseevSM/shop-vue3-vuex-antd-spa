<script setup>
import { Header } from "../../widgets/header/index.js"
import { Body } from "../../widgets/body/index.js"
import { Footer } from "../../widgets/footer/index.js"
</script>

<template>
  <Header />
  <div class="page-container">
    <div class="page-wrapper">
      <Body />
      <Footer />
    </div>
  </div>
</template>