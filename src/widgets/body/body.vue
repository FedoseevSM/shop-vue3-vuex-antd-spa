<script setup>
import { BlockTemplate } from "../../features/index.js";
import { TableItemsBody } from "./index.js";
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 86px; margin-top: 110px;">
    <div>
      <BlockTemplate title="Каталог" />
    </div>
    <div>
      <TableItemsBody />
    </div>
  </div>
</template>