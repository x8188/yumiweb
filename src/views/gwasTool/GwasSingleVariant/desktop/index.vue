<template>
  <div id="GwasSingleVariantPage">
    <div class="q-mt-lg" style="margin-bottom: 100px">
      <div>
        <Title> GWAS Single-Variant </Title>
        <p>
          Browse all GWAS signals related to the given variant, scatters were
          colored by trait category. The whole genome position and detailed
          position of the given variant were indicated by the yellow and red
          vertical line in the chromesome track and the gene track,
          respectively.
        </p>
        <div
          class="row select-line-height search-filter"
          style="background-color: #f1f7f7; padding-left: 20px"
        >
          <p
            class="q-mr-sm q-mb-sm"
            style="display: inline-block; margin-right: 10px"
          >
            Search
          </p>
          <el-select
            v-model="variant"
            bg-color="white"
            class="selector"
            maxlength="64"
            :options="variantOpts"
            style="width: 320px"
            filterable
            remote
            :remote-method="remoteMethod"
            @clear="IDsClear"
            clearable
            @change="selectVariant"
          >
            <el-option
              v-for="(item, index) in variantOpts"
              :key="index"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <em style="margin-left: 10px"
            >Example:
            <strong
              style="cursor: pointer"
              @click="variant = 'ZMPV01aSNPC01P000026255';getVariantData(variant)"
              >ZMPV01aSNPC01P000026255 </strong
            >
            <strong
              style="cursor: pointer"
              @click="variant = 'ZMPV01aSINC01P000001921';getVariantData(variant)"
              >ZMPV01aSINC01P000001921 </strong
            >
          </em>
        </div>
      </div>
      <el-card class="q-mt-md" style="margin-top: 20px" v-loading="loading">
        <div v-if="isIE" class="text-negative">{{ "toGoogle" }}</div>
        <div v-if="isNoResult" class="text-bold">{{ "noPhewas" }}</div>
        <Title> Result </Title>
        <div id="plot" />
      </el-card>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<!-- <i18n src="../common/i18n.json"></i18n> -->

<style lang="scss" src="./style.scss"></style>
