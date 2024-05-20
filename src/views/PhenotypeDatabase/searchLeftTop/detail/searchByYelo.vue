<template>
  <div>
    <div class="search-tag">
      <template v-for="(value, key) in filteredQuery">
        <template v-if="Array.isArray(value)">
          <el-tag
            v-for="(item, index) in value"
            :key="`array_${key}_${index}`"
            v-if="item !== ''"
          >
            {{ item }}
          </el-tag>
        </template>
        <template v-else>
          <el-tag v-if="value !== ''" :key="`single_${key}`">
            {{ value }}
          </el-tag>
        </template>
      </template>
    </div>
    <div class="content">
      <el-table
        :data="tableData"
        border
        height="650"
        tooltip-effect="dark"
        stripe
        style="width: 100%"
      >
        <el-table-column
          label="序号"
          type="index"
          ref="multipleTable"
          :align="'center'"
          width="80"
        >
        </el-table-column>

        <el-table-column
          v-for="(prop,index) in Object.keys(tableData[0])"
          :key="index"
          :prop="prop"
          :label="translatedTraitLabel(prop)"
          :align="'center'"
          width="240"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { searchByYelo } from "@/api/jointCreation/searchLeftTop/index";
export default {
  data() {
    return {
      stateProp: {},
      tableData: [],
      index: 0,
      itemIndex:'',
    };
  },
  computed: {

    filteredQuery() {
      return Object.entries(this.$route.query).reduce(
        (filtered, [param, value]) => {
          if (value !== "") {
            filtered[param] = value;
          }
          return filtered;
        },
        {}
      );
    },

    translatedTraitLabel() {
      // 中英文转换逻辑
      const translationMap = {
        // 中文 -> 英文 映射关系
        searchValue: "搜索值",
        params:"参数",
        createBy:"创造",
        updateBy:"更新",
        createTime:"创造时间",
        updateTime:"更新时间",
        bookName: "表名称",
        project: "表所属项目",
        colDescription: "该表包含的列",
        bookName: "表名称",
        project: "表所属项目",
        year: "表所属年份及季节",
        location: "试验地点",
        seq: "序号#",
        plotNumber: "区号#",
        plotNumberName: "区号文件名",
        pedId: "系谱内部码",
        pedid: "系谱内部码",
        pedigree: "系谱名称",
        pedigree2: "系谱其他命名",
        pedigreeSource1: "系谱来源1",
        pedigreeSource2: "系谱来源2",
        femalePedId: "母本系谱内部码",
        femalePlot: "母本区号",
        femalePedigree: "母本系谱名称",
        malePedId: "父本系谱内部码",
        malePlot: "父本区号",
        malePedigree: "父本名称",
        population: "所属种质类群1",
        repNumber: "重复号",
        density: "密度",
        rowLength: "行长",
        rowNumber: "行数",
        seedingMethod: "播种方式",
        quantity: "种子量",
        "planterSowNumber#": "机播编号",
        decisionNursery: "决定",
        inventoryState: "种质状态",
        harvestNumber: "收获数量",
        generations: "系谱世代",
        inventoryStatus: "种质状态（是否在用）",
        previewErrorMessage: "预览错误信息",
        sourceId: "系谱资源号码",
        leaf_length: "穗上叶长",
        leafWidth: "穗上叶宽(cm)",
        plantHeight: "株高(cm)",
        earHeight: "穗位(cm)",
        tasselLengthTop: "雄穗最上面节间长度(cm)",
        tasselBranchNumber1: "雄一级侧枝数目",
        tasselBranchNumber: "雄穗分枝数",
        leafNumberAboveEar: "穗上叶片数txt",
        seedlingPotential: "苗势",
        tasselLength2: "雄穗倒数第二侧枝长度(cm)",
        tasselPosture2: "雄穗倒数第二侧枝姿势",
        tasselAngle2: "雄穗主轴与倒数第二侧枝夹角",
        tasselLength3: "雄穗最低位侧枝以上主轴长度(cm)",
        tasselLength4: "雄穗最高位侧枝以上主轴长度(cm)",
        tasselDensity: "雄穗小穗密度",
        tasselWeight1: "雄穗鲜重",
        tasselWeight2: "雄穗干重",
        tasselFloretNumber: "穗小花数",
        pollenQuantity: "花粉量",
        rootDistribution: "根分布",
        rootLayer: "根层",
        rootThickness: "根粗细",
        rootAngle: "根夹角",
        femaleRootDistribution: "母根分布",
        maleRootDistribution: "父根分布",
        leafShape1: "第一叶顶端形状",
        leafPosture1: "顶叶叶姿",
        leafAngle: "上位穗上叶与茎秆夹角",
        leafPosture2: "上位穗上叶姿态",
        leafNumber1: "成株叶片数",
        stemDiameter: "茎粗(cm)",
        earBearingPosture: "果穗着生姿态",
        huskTier: "苞叶层数",
        huskThickness1: "苞叶总厚度(mm)",
        huskTier: "苞叶总数",
        huskThickness2: "苞叶厚度（mm,单层）",
        silkColor: "花丝花青甙显色",
        antherColor: "花药花青甙显色",
        anther_color: "花药花青甙显色",
        stemRootColor: "茎支持根花青甙显色",
        rachisColor: "穗轴颜色",
        sheathColor1: "第一叶鞘花青甙显色",
        glumeColor: "颖片基部花青甙显色",
        leafColor1: "幼苗叶色",
        grainColor2: "籽粒背面颜色",
        grainColor: "籽粒颜色",
        sheathColor2: "上位穗上叶鞘花青甙显色",
        leafColor2: "上位穗上叶叶色",
        fieldEvaluation: "田评",
        fieldEvaluation2: "田评2",
        laboratoryEvaluation: "室评",
        laboratoryEvaluation2: "室评2",
        benefitial: "沾光",
        emptyStalkNumber: "空秆数",
        selectedPlantNumber: "入选株数",
        plantNumber: "区株数",
        leafStayGreen: "保绿度",
        pollinationPlan1: "授粉计划1",
        pollinationPlan2: "授粉计划2",
        doubleEarNumber: "双穗数",
        decisionStrip: "翌年处理意见",
        decisionSource: "决策来源",
        siteDiscrepancy: "位点差",
        tests1: "测试种1",
        tests2: "测试种2",
        daysToTassel: "抽雄期",
        daysToSeedling: "出苗期",
        daysToMaturity: "成熟期",
        datePlanted: "播种期",
        growthPeriod: "生育期",
        daysToAnther: "散粉期",
        daysToSilk: "吐丝期",
        dateHarvested: "收获日期",
        daysToAnther2: "散粉期（补）",
        daysToSilk2: "吐丝期（补）",
        antherTasselInterval: "散粉吐丝间隔",
        grainLength: "粒长(mm)",
        grainLengthSd: "粒长标准差",
        grainWidth: "粒宽(mm)",
        grainWidthSd: "粒宽标准差",
        earLength: "穗长(cm)",
        earDiameter: "穗粗(cm)",
        earNumber: "穗数",
        kernelRowNumber: "穗行数(行)",
        kernelNumbersPerRow: "行粒数",
        grainShape: "粒形",
        grainType: "粒型",
        grainWeight: "百粒重(g)",
        yield: "小区产量(标准水分)",
        earShape: "穗形",
        earStalkLength: "穗柄长度(cm)",
        earDryWeight: "穗干重",
        kernelDryWeight: "穗粒干重",
        kernelWetWeight: "穗粒湿重",
        kernelNumbersPerEar: "穗粒数",
        earKernelWeight: "穗粒重",
        earWetWeight: "穗湿重",
        earWeight: "单穗重",
        kernelLengthWidthRatio: "籽粒长宽比",
        grainWaterContent: "籽粒含水量（%）",
        kernelPercentage: "出籽率",
        volumeWeight: "容重",
        fecundity: "结实性",
        ck1: "比对照1±%",
        ck2: "比对照2±%",
        ck3: "比对照3±%",
        ck4: "比对照4±%",
        ck5: "比对照5±%",
        ck6: "比对照6±%",
        biomass: "生物产量",
        grainDiameter: "粒直径(mm)",
        barrenEarTip: "秃尖长(cm)",
        sampleWeight: "样品重量",
        sampleWeightDate: "样品称重日期",
        grainRedMeanValue: "籽粒红色均值",
        grainBlueMeanValue: "籽粒蓝色均值",
        grainGreenMeanValue: "籽粒绿色均值",
        grainAreaRatio: "籽粒面积比",
        grainAreaSd: "籽粒面积标准差",
        grainAreaMeanValue: "籽粒面积均值",
        grainMeanRoundness: "籽粒圆度均值",
        grainMeanCircumferenceSd: "籽粒周长标准差",
        grainMeanCircumference: "籽粒周长均值",
        totalKernelArea: "籽粒总面积",
        ck1Yield: "对照1产量",
        ck2Yield: "对照2产量",
        ck3Yield: "对照3产量",
        cobDryWeight: "穗轴干重",
        cobWetWeight: "穗轴湿重",
        cobDiameter: "穗轴粗",
        rm: "籽粒成熟度",
        grainThickness: "粒厚",
        grainQuality: "粒品质",
        rank: "名次",
        seedcaseThickness: "皮的厚薄",
        scent: "气味",
        tenderness: "柔嫩度",
        cookingScore: "蒸煮总分",
        sweetness: "甜度",
        flavor: "风味",
        freshEarLevel: "鲜穗等级划分",
        freshEarYield: "鲜穗产量",
        earEvenness: "穗匀度",
        ustilagoMaydis: "瘤黑粉",
        maizeEarRot: "穗腐病",
        maizeSheathBlight: "纹枯病(级)",
        southernCornRust: "锈病(级)",
        leafSpotDisease: "叶斑病(级)",
        maizeBorer: "玉米螟",
        maizeStalkRot: "茎腐病(青枯病)",
        maizeRoughDwarfDisease: "粗缩病",
        southernCornRustTxt: "锈病txt",
        northernLeafBlight: "大斑病txt",
        maizeDwarfMosaicDisease: "矮花叶病",
        maizeAlbinism: "白化病",
        physodermaMaydis: "褐斑病",
        grayLeafSpot: "灰斑病",
        earKernelRot: "粒腐病",
        southernLeafBlight: "小斑病",
        graminearumStalkRot: "禾谷茎腐（%）",
        pythiumStalkRot: "腐霉茎腐（%）",
        FGraminearum: "禾谷穗腐（级）",
        FVerticillioides: "拟轮枝穗腐（级）",
        aphis: "蚜虫",
        borerResistance: "抗虫性",
        treatmentsApplied: "接种处理",
        resistanceCharacters1: "抗性性状1",
        resistanceCharacters2: "抗性性状2",
        resistanceCharacters3: "抗性性状3",
        comprehensiveResistance: "综合抗性",
        rootLodging: "根倒伏",
        lodgingResistance: "抗倒性",
        stemLodging: "茎倒伏",
        seedlingDeathPercent1: "死苗率1",
        deadSeedlingNumber1: "死苗数1",
        seedlingDeathPercent2: "死苗率2",
        deadSeedlingNumber2: "死苗数2",
        seedlingDeathPercent3: "死苗率3",
        deadSeedlingNumber3: "死苗数3",
        treatName: "鉴定药品",
        deformedSeedlingPercent: "畸形苗率%",
        deformedSeedlingNumber: "畸形苗数",

        // 添加更多映射关系...
      };

      // 根据traitLabel的值进行中英文转换
      return (prop) => translationMap[prop] || prop;
    },
    //   filteredProps() {
    //   // 进行过滤的逻辑
    //   return Object.keys(this.stateProp).filter(prop => {
    //     // 返回需要保留的属性
    //     return this.translatedTraitLabel(prop) !== prop;
    //   });
    // }
  },
  mounted() {
    const pedigree = this.$route.query.pedigree;
    const trait = this.$route.query.trait.join(",");
    const year = this.$route.query.year.join(",");
    const location = this.$route.query.location.join(",");
    const query = {
      pedigrees: pedigree,
      traits: trait,
      years: year,
      locations: location,
    };
    const propArray = trait.split(","); // 使用split方法将字符串拆分为数组
    console.log(propArray, "propArray");
    this.stateProp = propArray;
    // 获取表格数据
    searchByYelo(query).then((res) => {
      let chartData = res.data;
      chartData = chartData.map((item) => {
        for (let key in item) {
          if (item[key] === null) {
            item[key] = "-";
          }
        }
        return item;
      });
      this.tableData = chartData;

      this.tableData.forEach((item) => {
        Object.keys(item).forEach((key) => {
          this.stateProp[String(key)] = key;
        });
      });
      Vue.$nextTick(() => {
            this.$refs.multipleTable.doLayout();
          });
      // this.traitLabel = traits;
      console.log(this.tableData, "this.tableData");
      resolve();
    });
    // .catch((error) => {
    //   console.log(error);
    //   this.$message.warning("暂无数据");
    // });
  },
  created(){
    if (this.tableData.length > 0) {
    this.stateProp = Object.keys(this.tableData[0]);
  }
  }
};
</script>
<style scoped>
.search-tag {
  margin-left: 10px;
  margin-top: 10px;
}
.content {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 95%;
  height: 700px;
  overflow: auto;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
