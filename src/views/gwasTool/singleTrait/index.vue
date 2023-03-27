<template>
  <div>
    <!-- <remote-js src="https://cdn.jsdelivr.net/npm/locuszoom@0.14.0/dist/locuszoom.app.min.js"></remote-js> -->
    <div class="gwas-content">
      <p>
        Browse GWAS locus for single trait within given region. If not
        specified, the region with the most significant P-value was displayed.
        The scatter plot region can be easily changed by input a new region and
        'SEARCH' or click on a BIN in the navigational Manhattan Plot panel. You
        could also search the GWAS data through our
        <a href="/table/gwas">GWAS Table browser</a>. &nbsp;&nbsp;&nbsp;&nbsp;<a
          id="view-more"
          href="javascript:"
          >View More >>></a
        >
      </p>
      <div id="view-more-info">
        <p><b>Navigational Manhattan Plot</b></p>
        <p>
          This panel shows the most significant P-value (Y-axis) between the
          selected trait and the genetic variants within 500Kb sliding window of
          the genome (X-axis). You can navigate to your interested region by
          zoom and drag. Click on the region will generat a gray vertical
          indicator, and draw 'Detailed Scatter Plot' of this region below.
        </p>
        <p><b>Detailed Scatter Plot</b></p>
        <p>
          This panel shows the detailed plot of the variants and the genes
          within a certain region. Currently, only variants with -Log10(P-value)
          greater than 5 were displayed. The dots were colored by LD r2 value
          with the 'ref-variant' ( If not specified, the variant with the most
          significant P-value was set as the default ref-variant. ). The gene
          information tooltip provides interfaces for connecting with the gene
          detailed information, genome browser and eQTL signals. Please notice
          that the min and max plot regions of the scatter plot are 20 Kb and 1
          Mb, respectively. If your input region was smaller than 20 Kb (or
          larger than 1Mb), the flanking 20 Kb (or 1 Mb) of the middle position
          was plotted.
        </p>
      </div>
      <p id="messageBox"></p>
      <div class="gwasFilter">
        <div class="fuzzySearch">
          Trait:
          <input
            id="fuzzySearch"
            type="text"
            placeholder="eg. cobcolor"
            length=""
          />
          <div id="zmap-gwas-phenotype-tree" class="ztree"></div>
        </div>
        <div class="gwasRegion">
          Region:
          <input
            id="gwasRegion"
            type="text"
            placeholder="eg. 1:48000000-48500000"
          />
        </div>
        <div class="gwasSearch">
          <input
            id="gwasSearch"
            class="btn-primary"
            type="button"
            value="Search"
          />
        </div>
      </div>
      <div id="echart-gwas"></div>
      <div class="container">
        <div class="row">
          <div class="ten columns">
            <div id="lz-plot"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- <remote-js src="/js/jquery.js"></remote-js> -->
    <!-- <remote-js src="/js/single_trait/locuszoom.vendor.min.js"></remote-js> -->
    <!-- <remote-js src="/js/single_trait/locuszoom.app.min.js"></remote-js> -->
    <!-- <remote-js src="/js/single_trait/lz-dynamic-urls.min.js"></remote-js>
    <remote-js src="/js/ext/jquery.ztree.core.js"></remote-js>
    <remote-js src="/js/ext/jquery.ztree.excheck.js"></remote-js>
    <remote-js src="/js/ext/jquery.ztree.exedit.js"></remote-js>
    <remote-js src="/js/ext/jquery.ztree.exhide.js"></remote-js>
    <remote-js src="/js/ext/fuzzysearch.js"></remote-js>
    <remote-js src="/js/ext/echarts.min.js"></remote-js> -->
    <!-- <remote-js src="/js/single_trait/zmap_gwasviz_single_trait.js"></remote-js> -->
  </div>
</template>

<script>
// const globalObj = {};
// Object.assign(globalObj, window);

// import "../js/jquery.js";
// import "../js/single_trait/locuszoom.vendor.min.js";
// import "../js/single_trait/locuszoom.app.min.js";
// import "..c/js/single_trait/lz-dynamic-urls.min.js"
// import "../js/ext/jquery.ztree.core.js"
// import "../js/ext/jquery.ztree.excheck.js"
// import "../js/ext/jquery.ztree.exedit.js"
// import "../js/ext/jquery.ztree.exhide.js"
// import "../js/ext/fuzzysearch.js"
// import "../js/ext/echarts.min.js"
// import "../js/single_trait/zmap_gwasviz_single_trait.js"

// import LocusZoom from '../js/single_trait/locuszoom.app.min.js';


import LocusZoom from "locuszoom"
import * as echarts from 'echarts';

export default {
  components: {
    "remote-css": {
      render(createElement) {
        return createElement("link", {
          attrs: { rel: "stylesheet", href: this.href },
        });
      },
      props: {
        href: { type: String, required: true },
      },
    },
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src },
        });
      },
      props: {
        src: { type: String, required: true },
      },
    },
  },

  mounted() {
    window.LocusZoom=LocusZoom
    window.echarts=echarts

    // console.log(d3)

    // let script1 = document.createElement("script");
    // script1.type = "text/javascript";
    // script1.src = "/js/jquery.js";
    // script1.async = true;
    // document.head.appendChild(script1);

    // let script2 = document.createElement("script");
    // script2.type = "text/javascript";
    // script2.src = "/js/single_trait/locuszoom.vendor.min.js";
    // script2.async = true;
    // document.head.appendChild(script2);

    // let script3 = document.createElement("script");
    // script3.type = "text/javascript";
    // script3.src = "/js/single_trait/locuszoom.app.min.js";
    // script3.async = true;
    // document.head.appendChild(script3);

    // script3.onload = () => {
    //   let script4 = document.createElement("script");
    //   script4.type = "text/javascript";
    //   script4.src = "/js/single_trait/lz-dynamic-urls.min.js";
    //   script4.async = true;
    //   document.head.appendChild(script4);
    // };

    // let script1 = document.createElement("script");
    // script1.type = "text/javascript";
    // script1.async=true
    // script1.src = require("@/../public/js/jquery.js");

    // let script2 = document.createElement("script");
    // script2.type = "text/javascript";
    // script2.src = require("@/../public/js/single_trait/locuszoom.vendor.min.js");
    

    // let script3 = document.createElement("script");
    // script3.type = "text/javascript";
    // script3.src = require("@/../public/js/single_trait/locuszoom.app.min.js")

    // let script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = require("@/../public/js/single_trait/lz-dynamic-urls.min.js");

    // console.log("$:",$)
    // console.log("jQuery:",jQuery)


    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = require("@/../public/js/single_trait/lz-dynamic-urls.min.js");

    // console.log(LocusZoom.ext)

    let script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src = require("@/../public/js/ext/jquery.ztree.core.js");

    let script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = require("@/../public/js/ext/jquery.ztree.excheck.js");

    let script3 = document.createElement("script");
    script3.type = "text/javascript";
    script3.src = require("@/../public/js/ext/jquery.ztree.exedit.js");

    let script4 = document.createElement("script");
    script4.type = "text/javascript";
    script4.src = require("@/../public/js/ext/jquery.ztree.exhide.js");

    let script5 = document.createElement("script");
    script5.type = "text/javascript";
    script5.src = require("@/../public/js/ext/fuzzysearch.js");

    // let script6 = document.createElement("script");
    // script6.type = "text/javascript";
    // script6.src = require("@/../public/js/ext/echarts.min.js");

    let script7 = document.createElement("script");
    script7.type = "text/javascript";
    script7.src = require("@/../public/js/single_trait/zmap_gwasviz_single_trait.js");

    // let script7 = document.createElement("script");
    // script7.type = "text/javascript";
    // script7.src = "/js/single_trait/locuszoom.app.min.js";
    // script7.async = true;
    // document.head.appendChild(script7);

    // console.log(LocusZoom)
  },
};
</script>
<style scoped src='../css/gwasviz_single_trait.css'></style>
<style scoped src='../css/locuszoom.css'></style>
<style scoped src='../css/skeleton.css'></style>
<style scoped src='../css/zTreeStyle.css'></style>

<style scoped>
/* @import url(../css/gwasviz_single_trait.css); */
/* @import url(../css/locuszoom.css); */
/* @import url(../css/skeleton.css); */
/* @import url(../css/zTreeStyle.css); */
</style>
