<template>
  <div id="GwasSingleVariantPage">
    <div class="q-mt-lg" style="margin-bottom: 100px">
      <div>
        <p>{{ "message" }}</p>
        <div class="row select-line-height search-filter">
          <p class="q-mr-sm q-mb-sm">{{ "search" }}</p>
          <el-select
            v-model="variant"
            bg-color="white"
            borderless
            class="selector"
            dense
            fill-input
            hide-dropdown-icon
            hide-selected
            maxlength="64"
            :options="variantOpts"
            options-dense
            outlined
            style="width: 320px"
            use-input
            @filter="variantFilterFn"
            @input="selectVariant"
          >
            <el-option
              v-for="(item, index) in variantOpts"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="q-mt-md">
        <div v-if="isIE" class="text-negative">{{ "toGoogle" }}</div>
        <div v-if="isNoResult" class="text-bold">{{ "noPhewas" }}</div>
        <div id="plot" />
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<!-- <i18n src="../common/i18n.json"></i18n> -->

<style lang="scss" src="./style.scss"></style>
