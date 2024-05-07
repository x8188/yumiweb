<template>
  <div class="content">
    <el-table
      ref="multipleTable"
      :data="tableData"
      height="690"
      style="width: 100%; margin: auto"
      tooltip-effect="dark"
      class="main trait-form-table"
      stripe
      border
    >
    <el-table-column
        label="序号"
        type="index"
        :align="'center'"
        width="80"
        fixed="left"
      >
      </el-table-column>
    <el-table-column

        prop="pedid"
        label="系谱内部码"
        :align="'center'"
        width="120"
        fixed="left"
      >
      </el-table-column>
      <el-table-column
        prop="pedigree"
        fixed="left"
        label="系谱"
        width="280"
        class="charts-detail"
        :align="'center'"
      >
      </el-table-column>

      <el-table-column
        prop="location"
        fixed="left"
        label="试验地点"
        width="120"
        class="charts-detail"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        prop="year"
        class="charts-detail"
        fixed="left"
        label="年份"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="colDescription"
        label="表包含的列"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="bookName"
        label="表名称"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="project"
        label="表所属项目"
        :align="'center'"
        width="120"
      >
      </el-table-column>

      <el-table-column
        :fixed="false"
        prop="pedigreesource1"
        label="来源1"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="pedigreesource2"
        label="来源2"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="plotNumber"
        label="区号"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column :fixed="false" prop="seq" label="序号" :align="'center'">
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="plotNumberName"
        label="区号文件名"
        :align="'center'"
        width="100"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="femalePedid"
        label="母本系谱内部码"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="femalePlot"
        label="母本区号"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="femalePedigree"
        label="母本系谱名"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="malePedid"
        label="父本系谱内部码"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="malePlot"
        label="父本区号"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="malePedigree"
        label="父本系谱名"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="repNumber"
        label="重复号"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="density"
        label="密度"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="rowLength"
        label="行长"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="seedingMethod"
        label="播种方式"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="quantity"
        label="种子量"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="planterSowNumber"
        label="机播编号"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="decisionNursery"
        label="决定"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="inventoryState"
        label="种质状态"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="harvestNumber"
        label="收获数量"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="generations"
        label="系谱世代"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="invertoryState"
        label="种质状态（是否在用）"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="previewErrorMessage"
        label="预览错误信息"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        :fixed="false"
        prop="sourceId"
        label="系谱资源号码"
        :align="'center'"
        width="120"
      >
      </el-table-column>

      <el-table-column
        prop="grainLength"
        label="粒长（mm）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainLengthSd"
        label="粒长标准差"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainWidth"
        label="粒宽（mm）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainWidthSd"
        label="粒宽标准差"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="earLength"
        label="穗长（cm）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="earDiameter"
        label="穗粗（cm）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="earNumber"
        label="穗数"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="kernelRowNumber"
        label="穗行数（行）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="kernelNumbersPerRow"
        label="行粒数"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="grainShape" label="粒形" :align="'center'" width="800">
      </el-table-column>
      <el-table-column prop="grainType" label="粒型" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="grainWeight"
        label="百粒重（g）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="earShape" label="穗形" :align="'center'" width="650">
      </el-table-column>
      <el-table-column
        prop="earStalkLength"
        label="穗柄长度（cm）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="earDryWeight" label="穗干重" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="kernelDryWeight"
        label="穗粒干重"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        prop="kernelWetWeight"
        label="穗粒湿重"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        prop="kernelNumbersPerEar"
        label="穗粒数"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="earKernelWeight" label="穗粒重" :align="'center'">
      </el-table-column>
      <el-table-column prop="earWetWeight" label="穗湿重" :align="'center'">
      </el-table-column>
      <el-table-column prop="earWeight" label="单穗重" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="kernelLengthWidthRatio"
        label="籽粒长宽比"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainWaterContent"
        label="籽粒含水量（%）"
        :align="'center'"
        width="140"
      >
      </el-table-column>
      <el-table-column prop="kernelPercentage" label="出籽率" :align="'center'">
      </el-table-column>
      <el-table-column prop="volumeWeight" label="容重" :align="'center'">
      </el-table-column>
      <el-table-column prop="fecundity" label="结实性" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck1" label="比对照1±%" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck2" label="比对照2±%" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck3" label="比对照3±%" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck4" label="比对照4±%" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck5" label="比对照5±%" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck6" label="比对照6±%" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="biomass" label="生物产量" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="grainDiameter"
        label="粒直径（mm）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="barrenEarTip"
        label="秃尖长（cm）"
        :align="'center'"
        width="120"

      >
      </el-table-column>
      <el-table-column prop="sampleWeight" label="样品重量" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="sampleWeightDate"
        label="样品称重日期"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainRedMeanValue"
        label="籽粒红色均值"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainBlueMeanValue"
        label="籽粒蓝色均值"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainGreenMeanValue"
        label="籽粒绿色均值"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainAreaRatio"
        label="籽粒面积比"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainAreaSd"
        label="籽粒面积标准差"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainAreaMeanValue"
        label="籽粒面积均值"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainMeanRoundness"
        label="籽粒圆度均值"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainMeanCircumferenceSd"
        label="籽粒周长标准差"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="grainMeanCircumference"
        label="籽粒周长均值"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="totalKernelArea"
        label="籽粒总面积"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="ck1Yield" label="对照1产量" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck2Yield" label="对照2产量" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="ck3Yield" label="对照3产量" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="cobDryWeight" label="穗轴干重" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="cobWetWeight" label="穗轴湿重" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="cobDiameter" label="穗轴粗" :align="'center'">
      </el-table-column>
      <el-table-column prop="rm" label="籽粒成熟度" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="grainThickness" label="粒厚" :align="'center'">
      </el-table-column>
      <el-table-column prop="grainQuality" label="粒品质" :align="'center'">
      </el-table-column>
      <el-table-column prop="rank" label="名次" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="seedcaseThickness"
        label="皮的厚薄"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="scent" label="气味" :align="'center'">
      </el-table-column>
      <el-table-column prop="tenderness" label="柔嫩度" :align="'center'">
      </el-table-column>
      <el-table-column prop="cookingScore" label="蒸煮总分" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="sweetness" label="甜度" :align="'center'">
      </el-table-column>
      <el-table-column prop="flavor" label="风味" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="freshEarLevel"
        label="鲜穗等级划分"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="freshEarYield" label="鲜穗产量" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="earEvenness" label="穗匀度" :align="'center'">
      </el-table-column>
      <el-table-column prop="plantHeight" label="株高" :align="'center'">
      </el-table-column>
      <el-table-column prop="earHeight" label="穗位" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="tasselLengthTop"
        label="雄穗最上面节间长度"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="tasselBranchNumber1"
        label="雄一级侧枝数目"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <!-- <el-table-column
        prop="tasselNumberAboveEar"
        label="穗上叶片数"
        :align="'center'"
        width="150"
      >
      </el-table-column> -->
      <el-table-column prop="seedlingPotential" label="苗势" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="tasselLength2"
        label="雄穗倒数第二侧枝长度"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="tasselPosture2"
        label="雄穗倒数第二侧枝姿势"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="tasselAngle2"
        label="雄穗主轴与倒数第二侧枝夹角"
        :align="'center'"
        width="190"
      >
      </el-table-column>
      <el-table-column
        prop="tasselLength3"
        label="雄穗最低位侧枝以上主轴长度"
        :align="'center'"
        width="190"
      >
      </el-table-column>
      <el-table-column
        prop="tasselLength4"
        label="雄穗最高位侧枝以上主轴长度"
        :align="'center'"
        width="190"
      >
      </el-table-column>
      <el-table-column
        prop="tasselDensity"
        label="雄穗小穗密度"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column prop="tasselWeight1" label="雄穗鲜重" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="tasselWeight2" label="雄穗干重" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="tasselFloretNumber"
        label="穗小花数"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="pollenQuantity" label="花粉量" :align="'center'">
      </el-table-column>
      <el-table-column prop="rootDistribution" label="根分布" :align="'center'">
      </el-table-column>
      <el-table-column prop="rootLayer" label="根层" :align="'center'">
      </el-table-column>
      <el-table-column prop="rootThickness" label="根粗细" :align="'center'">
      </el-table-column>
      <el-table-column prop="rootAngle" label="根夹角" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="femaleRootDistribution"
        label="母根分布"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="maleRootDistribution"
        label="父根分布"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="leafShape1"
        label="第一叶顶端形状"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column prop="leafPosture1" label="顶叶叶姿" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="leafAngle"
        label="上位穗上叶与茎杆夹角"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="leafPosture2"
        label="上位穗上叶姿态"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column prop="leafNumber1" label="成株叶片数" :align="'center'" width="140">
      </el-table-column>
      <el-table-column
        prop="earBearingPosture"
        label="果穗着生姿态"
        :align="'center'"
        width="150"
      >
      </el-table-column>
      <el-table-column prop="huskTier" label="苞叶层数" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="huskThickness1"
        label="苞叶总厚度"
        :align="'center'"
        width="150"
      >
      </el-table-column>
      <el-table-column prop="huskThickness2" label="苞叶厚度" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="silkColor"
        label="花丝花青甙显色"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="antherColor"
        label="花药花青甙显色"
        :align="'center'"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="stemRootColor"
        label="茎支持根花青甙显色"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column prop="rachisColor" label="穗轴颜色" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="sheathColor1"
        label="第一叶鞘青甙显色"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="glumeColor"
        label="颖片基部青甙显色"
        :align="'center'"
        width="160"
      >
      </el-table-column>
      <el-table-column prop="leafColor1" label="幼苗叶色" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="grainColor2"
        label="籽粒背面颜色"
        :align="'center'"
        width="150"
      >
      </el-table-column>
      <el-table-column prop="grainColor" label="籽粒颜色" :align="'center'" width="120">
      </el-table-column>
      <!-- <el-table-column
        prop="sheathColor"
        label="上位穗上叶鞘花青甙显色"
        :align="'center'"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="leafColor"
        label="上位穗上叶叶色"
        :align="'center'"
        width="160"
      >
      </el-table-column> -->
      <el-table-column
        prop="tasselBranchNumber"
        label="雄穗分枝数"
        width="100"
        :align="'center'"

      >
      </el-table-column>
      <el-table-column prop="leafLength" label="穗上叶长" :align="'center'">
      </el-table-column>
      <el-table-column prop="leafWidth" label="穗上叶宽" :align="'center'">
      </el-table-column>
      <el-table-column prop="stemDiameter" label="茎粗" :align="'center'">
      </el-table-column>
      <el-table-column prop="fieldEvaluation" label="田评" :align="'center'">
      </el-table-column>
      <el-table-column prop="fieldEvaluation2" label="田评2" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="laboratoryEvaluation"
        label="室评"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column
        prop="laboratoryEvaluation2"
        label="室评2"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="benefitial" label="沾光" :align="'center'">
      </el-table-column>
      <el-table-column prop="emptyStalkNumber" label="空杆数" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="selectedPlantNumber"
        label="入选株数"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column prop="plantNumber" label="区株数" :align="'center'">
      </el-table-column>
      <el-table-column prop="leafStayGreen" label="保绿度" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="pollinationPlan1"
        label="授粉计划1"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="pollinationPlan2"
        label="授粉计划2"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="doubleEarNumber" label="双穗数" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="decisionStrip"
        label="翌年处理意见"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="decisionSource" label="决策来源" :align="'center'" width="120">
      </el-table-column>
      <el-table-column prop="siteDiscrepancy" label="位点差" :align="'center'">
      </el-table-column>
      <el-table-column prop="tests1" label="测试种1" :align="'center'">
      </el-table-column>
      <el-table-column prop="tests2" label="测试种2" :align="'center'">
      </el-table-column>
      <el-table-column prop="daysToTassel" label="抽雄期" :align="'center'">
      </el-table-column>
      <el-table-column prop="daysToSeedling" label="出苗期" :align="'center'">
      </el-table-column>
      <el-table-column prop="daysToMaturity" label="成熟期" :align="'center'">
      </el-table-column>
      <el-table-column prop="datePlanted" label="播种期" :align="'center'">
      </el-table-column>
      <el-table-column prop="growthPeriod" label="生育期" :align="'center'">
      </el-table-column>
      <el-table-column prop="daysToAnther" label="散粉期" :align="'center'">
      </el-table-column>
      <el-table-column prop="daysToSilk" label="吐丝期" :align="'center'" width="200">
      </el-table-column>
      <el-table-column prop="dateHarvested" label="收获日期" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="daysToAnther2"
        label="散粉期（补）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="daysToSilk2"
        label="吐丝期（补）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="antherTasselInterval"
        label="散粉吐丝间隔"
        :align="'center'"
        width="150"
      >
      </el-table-column>
      <el-table-column prop="ustilagoMaydis" label="瘤黑粉" :align="'center'" width="200">
      </el-table-column>
      <el-table-column prop="maizeEarRot" label="穗腐病" :align="'center'" width="200">
      </el-table-column>
      <el-table-column
        prop="maizeSheathBlight"
        label="纹枯病（级）"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="southernCornRust"
        label="锈病（级）"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="leafSpotDisease"
        label="叶斑病（级）"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column prop="maizeBorer" label="玉米螟" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="maizeStalkRot"
        label="茎腐病（青枯病）"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="maizeRoughDwarfDisease"
        label="粗缩病"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="southernCornRustTxt"
        label="锈病txt"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="northernLeafBlight"
        label="大斑病"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="maizeDwarfMosaicDisease"
        label="矮花叶病"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column prop="maizeAlbinism" label="白化病" :align="'center'" width="200">
      </el-table-column>
      <el-table-column prop="physodermaMaydis" label="褐斑病" :align="'center'" width="200">
      </el-table-column>
      <el-table-column prop="grayLeafSpot" label="灰斑病" :align="'center'" width="200">
      </el-table-column>
      <el-table-column prop="earKernelRot" label="粒腐病" :align="'center'" width="200">
      </el-table-column>
      <el-table-column
        prop="southernLeafBlight"
        label="小斑病"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="graminearumStalkRot"
        label="禾谷茎腐（%）"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="pythiumStalkRot"
        label="腐霉茎腐（%）"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="fGraminearum"
        label="禾谷穗腐（%）"
        :align="'center'"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="fVerticillioides"
        label="拟轮枝穗腐（级）"
        :align="'center'"
        width="150"
      >
      </el-table-column>
      <el-table-column prop="aphis" label="蚜虫" :align="'center'">
      </el-table-column>
      <el-table-column prop="borerResistance" label="抗虫性" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="treatmentsApplied"
        label="接种处理"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="resistanceCharacters1"
        label="抗性性状1"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="resistanceCharacters2"
        label="抗性性状2"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="resistanceCharacters3"
        label="抗性性状3"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="comprehensiveResistance"
        label="综合抗性"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="rootLodging" label="根倒性" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="lodgingResistance"
        label="抗倒性"
        :align="'center'"
      >
      </el-table-column>
      <el-table-column prop="stemLodging" label="茎倒性" :align="'center'">
      </el-table-column>
      <el-table-column
        prop="seedlingDeathPercent1"
        label="死苗率1"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="deadSeedlingNumber1"
        label="死苗数1"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="seedlingDeathPercent2"
        label="死苗率2"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="deadSeedlingNumber2"
        label="死苗数2"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="seedlingDeathPercent3"
        label="死苗率3"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="deadSeedlingNumber3"
        label="死苗数3"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="treatName" label="鉴定药品" :align="'center'" width="120">
      </el-table-column>
      <el-table-column
        prop="deformedSeedlingPercent"
        label="畸形苗率%"
        :align="'center'"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="deformedSeedlingNumber"
        label="畸形苗数"
        :align="'center'"
        width="120"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { btnAll } from "@/api/jointCreation/searchLeftBottom/index";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    // 获取表格数据
    btnAll().then((res) => {
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
    });
  },
};
</script>

<style type="less" scoped>
/* /deep/ .el-scrollbar_Bar {
  z-index: 2;
} */
.content {
  width: 97%;
  height: 85vh;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 12px 0 rgba(214, 32, 32, 0.1);
}
:deep(.el-scrollbar__wrap) {
  z-index: 100; /* 设置横向拉动条的层叠顺序为较高的值 */
}
:deep(.content::-webkit-scrollbar) {
  z-index: 100000;
}
:deep(.el-table__fixed-right),
:deep(.el-table__fixed) {
  height: auto !important;
  bottom: 6px !important;
}
</style>>
