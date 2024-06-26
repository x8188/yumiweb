<template>
  <div id="app">
    <router-view />
    <theme-picker />
  </div>
</template>

<script>
import ThemePicker from "@/components/ThemePicker";

export default {
  name: "App",
  components: { ThemePicker },
    metaInfo() {
        return {
            title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
            titleTemplate: title => {
                return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
            }
        }
    }
};
</script>
<style>
#app{
  min-width: 1700px;
}
#app .theme-picker {
  display: none;
}
.bianKuang{

/* padding-top: 12%; */
background: linear-gradient(to left, #04afaf, #04afaf) left top no-repeat,
linear-gradient(to bottom, #04afaf, #04afaf) left top no-repeat,
linear-gradient(to left, #04afaf, #04afaf) right top no-repeat,
linear-gradient(to bottom, #04afaf, #04afaf) right top no-repeat,
linear-gradient(to left, #04afaf, #04afaf) left bottom no-repeat,
linear-gradient(to bottom, #04afaf, #04afaf) left bottom no-repeat,
linear-gradient(to left, #04afaf, #04afaf) right bottom no-repeat,
linear-gradient(to left, #04afaf, #04afaf) right bottom no-repeat,
#f1f8f8;
background-size: 4px 20px, 20px 4px, 4px 20px, 20px 4px;

border: 1px solid #037a7a;
position: relative;

padding:10px;
}
</style>
