<template>
  <q-page-container id="GwasSingleVariantPage">
    <q-page class="q-mt-lg" style="margin-bottom: 100px;">
      <UILeftBorderedTitleCard :title="$t('gwasSingleVariant')">
        <p>{{ $t('message') }}</p>
        <div class="row select-line-height search-filter">
          <p class="q-mr-sm q-mb-sm">{{ $t('search') }}</p>
          <q-select
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
            style="width: 320px;"
            use-input
            @filter="variantFilterFn"
            @input="selectVariant"
          >
            <template #no-option>
              <q-item>
                <q-item-section class="text-grey">{{ $t('noResults') }}</q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </UILeftBorderedTitleCard>
      <UILeftBorderedTitleCard class="q-mt-md" :title="$t('result')">
        <div v-if="isIE" class="text-negative">{{ $t('toGoogle') }}</div>
        <div v-if="isNoResult" class="text-bold">{{ $t('noPhewas') }}</div>
        <div id="plot" />
      </UILeftBorderedTitleCard>
    </q-page>
  </q-page-container>
</template>

<script src="./script.js"></script>

<i18n src="../common/i18n.json"></i18n>

<style lang="scss" src="./style.scss"></style>
