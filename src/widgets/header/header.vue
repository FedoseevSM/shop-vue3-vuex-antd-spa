<script setup>
import { NavigationHeader } from "./index.js"
</script>

<template>
  <section class="header">
    <div class="header__inner page-container">
      <NavigationHeader />
      <div class="header-block">
        <div class="header-block__title">
          Медиа
        </div>
        <div>
          <div class="header-block__frame">
            <div class="link">
              <div class="led" style="color: #fff;">
                Каталог</div>
              <div class="dot"
                style="width: 16px; height: 16px; position: relative; top: transform: rotate(-90deg); transform-origin: 0 0">
                <div class="ellipse"
                  style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: white; border-radius: 9999px">
                </div>
              </div>
            </div>
            <div class="link">
              <div class="led">
                Загрузить</div>
            </div>
            <div class="link">
              <div class="led">
                Документы для загрузки</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header {
  height: 600px;
}

.header__inner {
  background: url(../public/images/8868db50dfed9a610c386219a40e264d.png) center center/cover no-repeat #F9F9F9;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.header-block {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.header-block__title {
  color: white;
  font-size: 64px;
  font-family: Suisse Intl;
  font-weight: 700;
  line-height: 64px;
  word-wrap: break-word;
}

.header-block__frame {
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex
}

.link {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex
}

.led {
  color: rgba(255, 255, 255, 0.50);
  font-size: 15px;
  font-family: Suisse Intl;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word
}
</style>