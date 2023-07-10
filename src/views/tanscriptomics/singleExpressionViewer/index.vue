<template>
<div class="container-fluid">
  <link rel="stylesheet" href="@/assets/styles/bootstrap.min.css">
  <div>
    <div>
      <p>Browse Gene expressions among different tissues. The overview plot on the left shows the highest value of each tissues in the subdivision plot on the right.
        The gene expression data used here were from these researches:<br />
        - B73: <a href="https://science.sciencemag.org/content/353/6301/814">Walley J W, Sartor R C, Shen Z, <i>et al</i>. Integration of omic networks in a developmental atlas of maize[J]. Science, 2016, 353(6301): 814-818.</a><br />
        - SK: <a href="https://www.nature.com/articles/s41588-019-0427-6">Yang N, Liu J, Gao Q, <i>et al</i>. Genome assembly of a tropical maize inbred line provides insights into structural variation and crop improvement[J]. Nature genetics, 2019, 51(6): 1052.</a><br />
        To search for Maize Gene expression on more tissues/treatments, please visit <a href="http://bar.utoronto.ca/eplant_maize/">ePlant_maize</a> and <a href="https://qteller.maizegdb.org/">MaizeGDB</a>.
      </p>
      <div class="form-group">
        <input class="form-control" id="gene" value="" type="text" />
        <input class="btn btn-primary"  id="search" type="button" value="search" >
        <p id="geneExample" style="color: dodgerblue">click to use example gene Zm00001d000001</p>
      </div>
    </div>
    <div>
      <div class="panel panel-default">
        <div class="panel-heading"><h4>Expression Tissue Overview</h4></div>
        <div class="panel-body">
          <div id="example">
            <div id="svgContainer"></div>
            <div id="svgViewer">
<!--              <input disabled="disabled" class="btn btn-primary" id="downloadTSV" type="button" value="download TSV">-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  // import  svgViewer from '@/api/system/svgViewer/svgViewer-expressionViewer.js'
  var svgViewer = require('@/api/system/svgViewer/svgViewer-expressionViewer.js')
  // import 'bootstrap/dist/css/bootstrap.css'
  // import '@/assets/styles/bootstrap.min.css';
  // import '@/assets/styles/style.css';

  // import    '@/api/system/svgViewer/zmap_tissue_expression.js' 把该js代码写进了script内部，不再导入执行了
  // import '@/api/system/svgViewer/jquery-3.2.1.min.js'

  import request from '@/utils/request'
  export default {
    mounted() {
      $(document).ready(function(){
        // var geneID = Drupal.settings.zmap_tissue_expression.geneID ? Drupal.settings.zmap_tissue_expression.geneID : '';
        // var geneID =document.getElementById("gene").value ?document.getElementById("gene").value:"Zm00001d000001";
        var geneID =document.getElementById("gene").value ?document.getElementById("gene").value:"";
        console.log(geneID)

        console.log(svgViewer)

        var ds = new svgViewer.DataSource();

        console.log(ds)


        // 伾H~]妾K伾L~V弾L~G幼 ~Glegend
        // 第䷾@个伾O~B弾U°为伾L~E伾P«svg漾Z~Ddiv伾E~C糼
        // 第乾L个伾O~B弾U°为弾L~G幼 ~Glabel漾Z~D个弾U°﻾L弾\~@壾Z10个
        var hotGradientSeparate = new svgViewer.HotGradientSeparate({
          el: '#svgContainer',
          width: 500,
          height: 32
        });

        // 伾H~]妾K伾L~V表达輾G~Oviewer
        // 第䷾@个伾O~B弾U°为伾L~E伾P«svg漾Z~Ddiv伾E~C糼
        // 第乾L个伾O~B弾U°为svg漾Z~D路彾D﻾Lsvg輾\~@襾A弾L~I约孾Z纾X伾H¶﻾L伾M³伾\¨伾E~C糼 g漾Z~Dclass伾@¼为纾D纾G伾P~M
        // 第䷾I个伾O~B弾U°为缾N·伾O~V漾Z~D弾I~@弾\~I纾D纾G弾U°纾D
        // 第伾[~[个伾O~B弾U°为䷾J述伾H~]妾K伾L~V孾L弾H~P漾Z~DhotGradient孾^佾K
        var expressionViewer = new svgViewer.ExpressionViewer({
          el: '#svgViewer',
          svgPath: '/svgViewer/ZEAMAP-MaizeDev-SVG-Stable.svg',
          // svgPath: 'http://www.zeamap.com/sites/all/modules/zmap_tissue_expression/theme/image/ZEAMAP-MaizeDev-SVG-Stable.svg',
          hotGradient: hotGradientSeparate,
          // downloadable: user_logged_in
          downloadable: true
        });

        if(geneID != ''){
          drawSVG(ds, hotGradientSeparate, expressionViewer, geneID);
        }

        //点击默认值
        document.getElementById('geneExample').onclick = function () {
          // example 的值，按实际填写
          document.getElementById('gene').value = 'Zm00001d000001';
        }

        // 绑定输入gene ID，鼠标点击事件
        document.getElementById('search').onclick = function () {
          let geneID = document.getElementById('gene').value
          console.log("search:"+geneID);
          drawSVG(ds, hotGradientSeparate, expressionViewer, geneID);
        }



        async function drawSVG(ds, hotGradientSeparate, expressionViewer, geneID){
          expressionViewer.summary.tissues = new Set();
          let btnDownloadTSV = document.getElementById('downloadTSV');
          var tissueMap='';

          //发请求
          // $.ajax({
          // 	url: "/zmap_tissue_expression/api/retrive/tissue_class_map/" + geneID,
          // 	type: "get",
          // 	async: false,
          // 	dataType: "json",
          // 	success: function(data){
          // 		tissueMap = data;
          // 	}
          // });
          //发请求
          // $.ajax({
          // 	url: "/dev-api/zeamap/feature/uniquename1?uniquename=" + geneID,
          // 	type: "get",
          // 	async: false,
          // 	dataType: "json",
          // 	success: function(data){
          // 		tissueMap = data;
          // 	}
          // });
          let data = await request({
            url: "/system/feature/uniquename1?uniquename=" + geneID,
            type: "get",
            dataType: "json",
          });

          tissueMap=data.data;
          //加
          // tissueMap = {
          //   "B73_6-7_internode":"Internode-short","B73_7-8_internode":"Internode-long","B73_Vegetative_Meristem_16-19_Day":"SAM","B73_Ear_Primordium_2-4_mm":"Ear-PrimordiumSmall","B73_Ear_Primordium_6-8_mm":"Ear-PrimordiumBig","B73_Embryo_20_DAP":"Kernel-GerminatingSmall","B73_Embryo_38_DAP":"Kernel-GerminatingBig","B73_Endosperm_12_DAP":"Kernel-Endosperm","B73_Endosperm_Crown_27_DAP":"Kernel-Crown","B73_Germinatin_Kernels_2_DAI":"Kernel-Kernel","B73_Pericarp_Aleurone_27_DAP":"Kernel-Pericarp","B73_Leaf_Zone_1_Symmetrical":"Leaf-YoungZone1","B73_Leaf_Zone_2_Stomatal":"Leaf-YoungZone2","B73_Leaf_Zone_3_Growth":"Leaf-YoungZone3","B73_Mature_Leaf_8":"Leaf-Mature","B73_Primary_Root_5_Days":"Root-Primary","B73_Root_Cortex_5_Days":"Root-Cortex","B73_Root_Elongation_Zone_5_Days":"Root-Elongation","B73_Root_Meristem_Zone_5_Days":"Root-Division","B73_Secondary_Root_7-8_Days":"Root-Secondary","B73_Mature_Pollen":"Tassel-Pollen","B73_Female_Spikelet_Collected_on_day_as_silk":"Ear-Ear","B73_Silk":"Ear-Silk"
          // }

          if (!tissueMap){
            alert(`No data for GeneID: ${geneID}`);
            expressionViewer.refresh();
            hotGradientSeparate.remove();
            btnDownloadTSV.disabled = 'disabled';
            return;
          }

          expressionViewer.setTissues(tissueMap);
          // selectOne 为本地模拟数据操作
          // 使用数据库操作，则使用ajax，传递一个 url
          // 如 ds.remoteSelectOne(url).then(...)
          // 通过查看gene的结构类型，了解后台返回的结构类型
          // var retriveExpUrl = '/zmap_tissue_expression/api/retrive/exp/' + geneID;
           var retriveExpUrl = "/system/feature/uniquename2?uniquename=" + geneID;
          ds.remoteSelectOne(retriveExpUrl).then(function (gene) {
          // 	console.log(gene)

          //加测试数据
          // ds.selectOne(geneID).then(function (gene) {
            // gene = {"geneID":"Zm00001d000001","B73_6-7_internode":"534.3606667","B73_7-8_internode":"937.3466667","B73_Vegetative_Meristem_16-19_Day":"1466.885","B73_Ear_Primordium_2-4_mm":"50.9252","B73_Ear_Primordium_6-8_mm":"54.59923333","B73_Embryo_20_DAP":"1.584866667","B73_Embryo_38_DAP":"11.17333667","B73_Endosperm_12_DAP":"0","B73_Endosperm_Crown_27_DAP":"1.27837","B73_Germinatin_Kernels_2_DAI":"21.5213","B73_Pericarp_Aleurone_27_DAP":"11.22052333","B73_Leaf_Zone_1_Symmetrical":"565.1873333","B73_Leaf_Zone_2_Stomatal":"169.073","B73_Leaf_Zone_3_Growth":"48.85053333","B73_Mature_Leaf_8":"6.38015","B73_Primary_Root_5_Days":"4.403233333","B73_Root_Cortex_5_Days":"4.862066667","B73_Root_Elongation_Zone_5_Days":"2.22319","B73_Root_Meristem_Zone_5_Days":"7.265293333","B73_Secondary_Root_7-8_Days":"7.57871","B73_Mature_Pollen":"1.56354","B73_Female_Spikelet_Collected_on_day_as_silk":"136.839","B73_Silk":"1376.446667"},
            console.log("gene",gene)





            if (gene == false) {
              alert(`No data for GeneID: ${geneID}`);
              expressionViewer.refresh();
              hotGradientSeparate.remove();
              btnDownloadTSV.disabled = 'disabled';
              return;
            };

          /**  下载tsv按钮
            btnDownloadTSV.disabled = false
            btnDownloadTSV.onclick = function () {
              if (!user_logged_in){
                alert('Permission Denied. Please login.');
                return;
              }
              $.ajax({
                url: "/zmap_tissue_expression/api/downloadtsv/"+geneID,
                type: "get",
                xhrFields: {
                  responseType: 'blob'
                },
                success: function(data){
                  var a = document.createElement('a');
                  var url = window.URL.createObjectURL(data);
                  a.href = url;
                  a.download = geneID + '.tsv';
                  document.body.append(a);
                  a.click();
                  a.remove();
                  window.URL.revokeObjectURL(url);
                }
              });
            }
            */


            // 前端实现组织表达量值的排序操作

            let data = Object.keys(tissueMap).map(field => {
              return {
                tissue: field,
                value: parseFloat(gene[field]) || 0,
              }
            }).sort((a, b) => b.value - a.value)

            // 查看传递给hotGradient.render的数据结构
            console.log(data)

            // 用于绘制指标legend
            hotGradientSeparate.render(data)

            // expressionViewer.drawColor方法用于绘制svg的组织色值
            expressionViewer.drawColor(data)
            expressionViewer.setDownloadName(geneID)
            // 该步骤为特殊意义
            // 只是为了鼠标hover事件显示的内容
            // Hover框的样式，修改 .viewer-info 和 .viewer-info-active 两个css类名
            let tissueValueMap = {}
            for (let i = 0; i < data.length; i++) {
              tissueValueMap[data[i].tissue] = data[i].value
            }

            console.log(tissueValueMap)

            let vTok = (map, k) => {
              for (let p in map) {
                if (map.hasOwnProperty(p)) {
                  if (map[p] === k) {
                    return p
                  }
                }
              }
              return ''
            }

            // bind操作的目的：用于绑定鼠标hover事件
            // 回调函数返回的字符串为要显示的内容Html
            expressionViewer.bind(function (tissue) {
              return `<p>GeneID: <a href="/feature_info/${geneID}">${geneID}</a></p>`
                + `<p>Tissue: ${vTok(tissueMap, tissue)}</p>`
                + `<p>FPKM: ${tissueValueMap[vTok(tissueMap, tissue)]}</p>`
            }, function (tissue, vs) {
              return `<p>GeneID: <a href="/feature_info/${geneID}">${geneID}</a></p>`
                + `<p>Tissue: ${vs[0].tissue}</p>`
                + `<p>FPKM:${vs[0].value}</p>`
            })
          })
        }
      })
    }
  };
</script>














<style scoped>
  /* hot gradient style */
  #geneExample {
    cursor: pointer;
  }
  #example {
    text-align: center;
  }
  #svgContainer {
    padding: 4px;
    display: inline-block;
  }
  #svgViewer {
    padding: 10px;
    width: 100%;
    text-align: right;
    display: inline-block;
    border: 1px solid #eee;
    position: relative;
  }
  .viewer-info {
    text-align: left;
    width: auto;
    height: auto;
    background: #fff;
    z-index: 9999 !important;
    position: absolute;
    padding:5px;
    left: 0;
    top: 0;
    display: none;
    border-radius: 10px;
    border: 2px solid green;
  }

  .viewer-info-inactive {
    display: none;
  }

  .viewer-info-active {
    display: inline-block;
  }

  .viewer-info p {
    padding: 0;
    margin: 0;
  }

  #gene {
    width: 30%;
    margin-right: 10px;
    display: inline-block;
  }

  #search {
    display: inline-block;
  }
  /* network style */
  .network-wrapper {
    height: 600px;
  }

  .inner-cy-container {
    height: 600px;
  }

  .nw-slider-wrapper {
    width: 15%;
    position: absolute;
    left: 30px;
    bottom: 30px;
    z-index: 9999;
  }

  .nw-slider-value {
    margin-bottom: 10px;
  }

  .nw-slider-range {

  }

  .nw-tool-wrapper {
    position: absolute;
    right: 30px;
    bottom: 30px;
    z-index: 9999;
  }


  /* newick */
  .links {
    fill: none;
    stroke: #000;
  }

  .link-extensions {
    fill: none;
    stroke: #000;
    stroke-opacity: .25;
  }

  .labels {
    font: 10px sans-serif;
  }

  .link--active {
    stroke: #000 !important;
    stroke-width: 1.5px;
  }

  .link-extension--active {
    stroke-opacity: .6;
  }

  .circle--active {
    font-weight: bold;
    transform: scale(6);
    visibility: visible;
  }


</style>
