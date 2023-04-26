<template>
  <div id="MGwasSingleVariantPage">
    <q-expansion-item
      class="m-filter-panel sticky-position bg-primary text-white shadow-2"
      expand-icon-class="text-white"
      icon="fas fa-filter"
      :label="$t('filters')"
      style="z-index: 3; top: 50px;"
    >
      <q-card class="bg-primary">
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <p class="q-mb-sm">{{ $t('search') }}</p>
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
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div v-if="isNoResult" class="text-bold q-ma-md">{{ $t('noPhewas') }}</div>
    <div id="plot" />
  </div>
</template>

<script src="./script.js"></script>

<i18n src="../common/i18n.json"></i18n>
