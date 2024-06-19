<template>
  <div class="allNatr">
    <div class="top-chart">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="pedigree"
          label="系谱"
          width="280"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column prop="year" label="年份" :align="'center'">
        </el-table-column>

        <el-table-column prop="pedigreeSource1" label="来源1" :align="'center'">
        </el-table-column>
        <el-table-column prop="pedigreeSource2" label="来源2" :align="'center'">
        </el-table-column>
        <el-table-column
          prop="location"
          label="试验地点"
          width="120"
          class="charts-detail"
          :align="'center'"
        >
        </el-table-column>
        <el-table-column
          v-for="prop in stateProp"
          :key="prop"
          :prop="prop"
          :label="translatedTraitLabel(prop)"
          :align="'center'"
          width="140"
        >
        </el-table-column>
      </el-table>
    </div>

    <div class="chart-select">
      <el-select
        v-model="selectedOption"
        @change="updateOptionChange"
        placeholder="请选择"
      >
        <el-option v-for="option in stateProp" :key="option" :value="option">
          {{ option }}
        </el-option>
      </el-select>
    </div>
    <div id="main" ref="chart" class="bottom-chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

import ecStat from "echarts-stat";
import {
  searchByNatr,
  searchChartByNatr,
} from "@/api/jointCreation/searchLeftTop";
import { updateData } from "@/api/system/dict/data";
export default {
  data() {
    return {
      stateProp: [],
      tableData: [],
      chartNatrData: [],
      selectedOption: "",
    };
  },
  computed: {
    translatedTraitLabel() {
      // 中英文转换逻辑
      const translationMap = {
        // 中文 -> 英文 映射关系
        light: "纹枯病(级)",
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
        resistanceCharsearchValue: "搜索值",
        params: "参数",
        createBy: "创造",
        updateBy: "更新",
        createTime: "创造时间",
        updateTime: "更新时间",
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
        plant_height: "株高(cm)",
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
        anther_tassel_interval: "散粉吐丝间隔",
        grainLength: "粒长(mm)",
        grainLengthSd: "粒长标准差",
        grainWidth: "粒宽(mm)",
        grainWidthSd: "粒宽标准差",
        grain_width_sd: "粒宽标准差",
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
        maizeSheathBacters3: "抗性性状3",
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
        col_description: "该表包含的列",
        book_name: "表名称",
        project: "表所属项目",
        year: "表所属年份及季节",
        location: "试验地点",
        seq: "序号#",
        "plot_number#": "区号#",
        plot_number_name: "区号文件名",
        pedId: "系谱内部码#",
        pedigree: "系谱名称",
        pedigree2: "系谱其他命名",
        pedigreeSource1: "系谱来源1",
        pedigreeSource2: "系谱来源2",
        female_pedId: "母本系谱内部码",
        female_plot: "母本区号",
        female_pedigree: "母本系谱名称",
        male_pedId: "父本系谱内部码",
        male_plot: "父本区号",
        male_pedigree: "父本名称",
        population: "所属种质类群1",
        rep_number: "重复号",
        density: "密度",
        row_length: "行长",
        row_number: "行数",
        seeding_method: "播种方式",
        quantity: "种子量",
        "planter_sow_number#": "机播编号",
        decision_nursery: "决定",
        inventory_state: "种质状态",
        harvest_number: "收获数量",
        generations: "系谱世代",
        inventory_status: "种质状态（是否在用）",
        preview_error_message: "预览错误信息",
        source_id: "系谱资源号码",
        leaf_length: "穗上叶长",
        leaf_width: "穗上叶宽",
        plant_height: "株高",
        ear_height: "穗位",
        tassel_length_top: "雄穗最上面节间长度",
        tassel_branch_number1: "雄一级侧枝数目",
        tassel_branch_number: "雄穗分枝数",
        leaf_number_above_ear: "穗上叶片数txt",
        seedling_potential: "苗势",
        tassel_length_2: "雄穗倒数第二侧枝长度",
        tassel_posture_2: "雄穗倒数第二侧枝姿势",
        tassel_angle_2: "雄穗主轴与倒数第二侧枝夹角",
        tassel_length_3: "雄穗最低位侧枝以上主轴长度",
        tassel_length_4: "雄穗最高位侧枝以上主轴长度",
        tassel_density: "雄穗小穗密度",
        tassel_weight1: "雄穗鲜重",
        tassel_weight2: "雄穗干重",
        tassel_floret_number: "穗小花数",
        pollen_quantity: "花粉量",
        root_distribution: "根分布",
        root_layer: "根层",
        root_thickness: "根粗细",
        root_angle: "根夹角",
        female_root_distribution: "母根分布",
        male_root_distribution: "父根分布",
        leaf_shape_1: "第一叶顶端形状",
        leaf_posture1: "顶叶叶姿",
        leaf_angle: "上位穗上叶与茎秆夹角",
        leaf_posture2: "上位穗上叶姿态",
        leaf_number1: "成株叶片数",
        stem_diameter: "茎粗",
        ear_bearing_posture: "果穗着生姿态",
        husk_tier: "苞叶层数",
        husk_thickness1: "苞叶总厚度(mm)",
        husk_tier: "苞叶总数",
        husk_thickness2: "苞叶厚度（mm,单层）",
        silk_color: "花丝花青甙显色",
        anther_color: "花药花青甙显色",
        stem_root_color: "茎支持根花青甙显色",
        rachis_color: "穗轴颜色",
        sheath_color1: "第一叶鞘花青甙显色",
        glume_color: "颖片基部花青甙显色",
        leaf_color1: "幼苗叶色",
        grain_color2: "籽粒背面颜色",
        grain_color: "籽粒颜色",
        sheath_color2: "上位穗上叶鞘花青甙显色",
        leaf_color2: "上位穗上叶叶色",
        field_evaluation: "田评",
        field_evaluation2: "田评2",
        laboratory_evaluation: "室评",
        laboratory_evaluation2: "室评2",
        benefitial: "沾光",
        empty_stalk_number: "空秆数",
        selected_plant_number: "入选株数",
        plant_number: "区株数",
        "leaf_stay-green": "保绿度",
        pollination_plan1: "授粉计划1",
        pollination_plan2: "授粉计划2",
        double_ear_number: "双穗数",
        decision_strip: "翌年处理意见",
        decision_source: "决策来源",
        site_discrepancy: "位点差",
        tests1: "测试种1",
        tests2: "测试种2",
        days_to_tassel: "抽雄期",
        days_to_seedling: "出苗期",
        days_to_maturity: "成熟期",
        date_planted: "播种期",
        growth_period: "生育期",
        days_to_anther: "散粉期",
        days_to_silk: "吐丝期",
        date_harvested: "收获日期",
        days_to_anther2: "散粉期（补）",
        days_to_silk2: "吐丝期（补）",
        "anther-tassel_interval": "散粉吐丝间隔",
        grain_length: "粒长(mm)",
        grain_length_sd: "粒长标准差",
        grain_width: "粒宽(mm)",
        grain_width_sd: "粒宽标准差",
        ear_length: "穗长",
        ear_diameter: "穗粗",
        ear_number: "穗数",
        kernel_row_number: "穗行数(行)",
        kernel_numbers_per_row: "行粒数",
        grain_shape: "粒形",
        grain_type: "粒型",
        grain_weight: "百粒重(g)",
        yield: "小区产量(标准水分)",
        ear_shape: "穗形",
        ear_stalk_length: "穗柄长度",
        ear_dry_weight: "穗干重",
        kernel_dry_weight: "穗粒干重",
        kernel_wet_weight: "穗粒湿重",
        kernel_numbers_per_ear: "穗粒数",
        ear_kernel_weight: "穗粒重",
        ear_wet_weight: "穗湿重",
        ear_weight: "单穗重",
        kernel_length_width_ratio: "籽粒长宽比",
        grain_water_content: "籽粒含水量（%）",
        kernel_percentage: "出籽率",
        volume_weight: "容重",
        fecundity: "结实性",
        CK1: "比对照1±%",
        CK2: "比对照2±%",
        CK3: "比对照3±%",
        CK4: "比对照4±%",
        CK5: "比对照5±%",
        CK6: "比对照6±%",
        biomass: "生物产量",
        grain_diameter: "粒直径(mm)",
        barren_ear_tip: "秃尖长",
        sample_weight: "样品重量",
        sample_weight_date: "样品称重日期",
        grain_red_mean_value: "籽粒红色均值",
        grain_blue_mean_value: "籽粒蓝色均值",
        grain_green_mean_value: "籽粒绿色均值",
        grain_area_ratio: "籽粒面积比",
        grain_area_sd: "籽粒面积标准差",
        grain_area_mean_value: "籽粒面积均值",
        grain_mean_roundness: "籽粒圆度均值",
        grain_mean_circumference_sd: "籽粒周长标准差",
        grain_mean_circumference: "籽粒周长均值",
        total_kernel_area: "籽粒总面积",
        CK1_yield: "对照1产量",
        CK2_yield: "对照2产量",
        CK3_yield: "对照3产量",
        cob_dry_weight: "穗轴干重",
        cob_wet_weight: "穗轴湿重",
        cob_diameter: "穗轴粗",
        RM: "籽粒成熟度",
        grain_thickness: "粒厚",
        grain_quality: "粒品质",
        rank: "名次",
        seedcase_thickness: "皮的厚薄",
        scent: "气味",
        tenderness: "柔嫩度",
        cooking_score: "蒸煮总分",
        sweetness: "甜度",
        flavor: "风味",
        fresh_ear_level: "鲜穗等级划分",
        fresh_ear_yield: "鲜穗产量",
        ear_evenness: "穗匀度",
        ustilago_maydis: "瘤黑粉",
        maize_ear_rot: "穗腐病",
        maize_sheath_blight: "纹枯病(级)",
        southern_corn_rust: "锈病(级)",
        leaf_spot_disease: "叶斑病(级)",
        maize_borer: "玉米螟",
        maize_stalk_rot: "茎腐病(青枯病)",
        maize_rough_dwarf_disease: "粗缩病",
        southern_corn_rust_txt: "锈病txt",
        northern_leaf_blight: "大斑病txt",
        maize_dwarf_mosaic_disease: "矮花叶病",
        maize_albinism: "白化病",
        physoderma_maydis: "褐斑病",
        gray_leaf_spot: "灰斑病",
        ear_kernel_rot: "粒腐病",
        southern_leaf_blight: "小斑病",
        graminearum_stalk_rot: "禾谷茎腐（%）",
        pythium_stalk_rot: "腐霉茎腐（%）",
        F_graminearum: "禾谷穗腐（级）",
        F_verticillioides: "拟轮枝穗腐（级）",
        aphis: "蚜虫",
        borer_resistance: "抗虫性",
        treatments_applied: "接种处理",
        resistance_characters1: "抗性性状1",
        resistance_characters2: "抗性性状2",
        resistance_characters3: "抗性性状3",
        comprehensive_resistance: "综合抗性",
        root_lodging: "根倒伏",
        lodging_resistance: "抗倒性",
        stem_lodging: "茎倒伏",
        seedling_death_percent1: "死苗率1",
        dead_seedling_number1: "死苗数1",
        seedling_death_percent2: "死苗率2",
        dead_seedling_number2: "死苗数2",
        seedling_death_percent3: "死苗率3",
        dead_seedling_number3: "死苗数3",
        treat_name: "鉴定药品",
        deformed_seedling_percent: "畸形苗率%",
        deformed_seedling_number: "畸形苗数",

        // 添加更多映射关系...
      };

      // 根据traitlabel的值进行中英文转换
      return (prop) => translationMap[prop] || prop;
    },
  },
  mounted() {
    this.getNatrData().then((trait) => {
      this.trait = trait;
      this.renderNatrCharts();
    });
  },
  methods: {
    async updateData(query, querys) {
      try {
        // 获取表格数据，散点图数据
        const [tableDataRes, chartDataRes] = await Promise.all([
          searchByNatr(query),
          searchChartByNatr(querys),
        ]);

        let tableData = tableDataRes.data;
        tableData = tableData.map((item) => {
          const newItem = { ...item };
          for (let key in newItem) {
            if (newItem[key] === "null") {
              newItem[key] = "-";
            }
          }
          return newItem;
        });
        const chartData = chartDataRes.data;
        this.tableData = tableData;
        this.chartNatrData = chartData.map((item) => {
          if (isNaN(parseFloat(item.trait))) {
            this.$message.warning("字符型无散点图数据");
            return null;
          } else {
            return {
              location: item.location,
              trait: item.trait,
              year: item.year,
            };
          }
        });
        return this.$route.query.trait.join(","); // 返回当前的trait参数
      } catch (error) {
        console.log(error);
        this.$message.warning("暂无散点图数据");
      }
    },

    async getNatrData() {
      const pedigree = this.$route.query.pedigree;
      const trait = this.$route.query.trait.join(",");

      const query = {
        pedigree: encodeURIComponent(pedigree),
        traits: trait,
      };
      const querys = {
        pedigree: encodeURIComponent(pedigree),
        traits: trait,
      };
      const propArray = trait.split(","); // 使用split方法将字符串拆分为数组
      this.stateProp = propArray;
      this.selectedOption = this.stateProp[0]; // 默认选择第一个选项

      const currentTrait = await this.updateData(query, querys);
      return currentTrait;
    },

    async updateOptionChange(value) {
      console.log(value, "adad");
      const query = {
        pedigree: this.$route.query.pedigree,
        traits: this.trait,
      };
      const querys = {
        pedigree: this.$route.query.pedigree,
        traits: value, // 使用新选择的 value 作为 traits 查询参数
      };

      await this.updateData(query, querys);
      this.renderNatrCharts();
      this.selectedOption = value; // 更新 selectedOption 的值
    },
    // 渲染散点图
    renderNatrCharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      if (this.chartNatrData.length === 0) {
        console.log("该性状不存在");
        this.$message.warning("该性状不存在");
        return; // 终止执行
      }
      const yearData = this.chartNatrData.map((data) => data.year + "");
      // 获取不同年份、地点下的trait值
      const wrappedData = [];
      this.chartNatrData.forEach((data) => {
        const yearIndex = data.year - 2021;
        if (!wrappedData[yearIndex]) {
          wrappedData[yearIndex] = [];
        }
        wrappedData[yearIndex].push([data.location, data.trait, data.year]);

      });

      option = {
        legend: {
          data: yearData,
        },
        xAxis: {
          type: "category",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: yearData.map((year, index) => {
          return {
            SymbolSize: 20,
            data: wrappedData[index],
            type: "scatter",
            name: year,
          };
        }),
        markLine: {
          symbol: "none",
          data: [
            {
              yAxis: 10,
              lineStyle: {
                color: "#ff0000",
                type: "solid",
              },
            },
          ],
        },
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.allNatr {
  width: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
.top-chart {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.chart-data {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 20px;
}
.chart-select {
  width: 100vw;
  height: 5vh;
  float: right;
  margin-left: 51.5vw;
}
.bottom-chart {
  width: 60%;
  /* margin-top: 50px; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
#main {
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  width: 80%;
  height: 500px;
}
</style>
