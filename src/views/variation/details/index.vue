<template>
    <div class="page">
        <div class="content_page">
            <div class="left">
                <div class="navigation_bar">
                    <h2>Catalog</h2>
                    <el-tabs tab-position="left" style="height: 220px;" @tab-click="handleClick">
                        <el-tab-pane v-for="(title, index) in variantinfo" :key="index">
                            <span slot="label" class="fontClass">{{ Object.keys(title)[0] }}</span>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <div class="right">
                <div class="info_box">
                    <el-card class="box-card" >
                        <div slot="header" class="clearfix">
                            <h3>Summary</h3>
                        </div>
                        <el-table :data="SummaryInfo" style="width: 100%" :show-header="false" border>
                            <el-table-column label="key" width="250" prop="key"/>
                            <el-table-column label="value" prop="key"/>
                        </el-table>
                    </el-card>
                    <el-card class="box-card" >
                        <div slot="header" class="clearfix">
                            <h3>Information</h3>
                        </div>
                        <el-table :data="InformationInfo" style="width: 100%" :show-header="false" border>
                            <el-table-column label="key" width="250" prop="key">
                               
                            </el-table-column>

                            <el-table-column label="value" prop="key">
                                
                            </el-table-column>
                        </el-table>
                    </el-card>
                    <el-card class="box-card" >
                        <div slot="header" class="clearfix">
                            <h3>Annotation</h3>
                        </div>
                        <el-table :data="AnnotationInfo" style="width: 100%"  border>
                            <el-table-column label="Exon" prop="Exon"/>
                            <el-table-column label="Gene" prop="Gene"/>
                            <el-table-column label="Pick" prop="Pick"/>
                            <el-table-column label="Allele" prop="Allele"/>
                            <el-table-column label="Codons" prop="Codons"/>
                            <el-table-column label="Impact" prop="Impact"/>
                            <el-table-column label="Intron" prop="Intron"/>
                            <el-table-column label="Strand" prop="Strand"/>
                            <el-table-column label="Symbol" prop="Symbol"/>
                            <el-table-column label="BioType" prop="BioType"/>
                            <el-table-column label="Feature" prop="Feature"/>
                            <el-table-column label="Distance" prop="Distance"/>
                            <el-table-column label="Amino_acids" prop="Amino_acids"/>
                            <el-table-column label="Consequence" prop="Consequence"/>
                            <el-table-column label="CDS_position" prop="CDS_position"/>
                            <el-table-column label="Feature_type" prop="Feature_type"/>
                            <el-table-column label="cDNA_position" prop="cDNA_position"/>
                            <el-table-column label="Protein_position" prop="Protein_position"/>
                        </el-table>
                    </el-card>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'details',
    data() {
        return {
            name: 'details',
            tableData: [],
            variantinfo: [],
            SummaryInfo:[],
            InformationInfo:[],
            AnnotationInfo:[],
            titles: ['Summary', 'Infomation', 'Annotation', 'Pupulation Diversity'],
            show_key: [],
            show_value: []
        }
    },
    methods: {
        handleClick(tab) {
            document.getElementById(this.titles[tab.index]).scrollIntoView({ behavior: 'smooth' })
        },
        handleAccpet() {
            console.log(this.$route.query.data);
            this.variantinfo = this.$route.query.data
            console.log(this.variantinfo[2])
            this.tableData = Object.values(this.variantinfo)
            console.log(this.tableData)
            this.editMsg()
        },
        editMsg(){
            //处理Summary
            const SummaryObj = this.variantinfo[0];
            const SummaryObj_value = Object.values(SummaryObj);
            console.log(SummaryObj_value)
            const sum_info =  SummaryObj_value[0]
            Object.keys(sum_info).forEach(item=>{
                let obj = {}
                obj.key = item
                obj.value = sum_info[item]
                this.SummaryInfo.push(obj)
            })
            console.log(this.SummaryInfo)
            //处理information
            const InformationyObj = this.variantinfo[0];
            const Information_value = Object.values(InformationyObj);
            const inf_info =  Information_value[0]
            Object.keys(inf_info).forEach(item=>{
                let obj = {}
                obj.key = item
                obj.value = inf_info[item]
                this.InformationInfo.push(obj)
            })
            //处理Annotation
            const AnnotationObj = this.variantinfo[2]
            const Annotation_value = Object.values(AnnotationObj)
            console.log(Annotation_value[0])
            this.AnnotationInfo = Annotation_value[0]
            console.log(this.AnnotationInfo)
        }
    },
    mounted() {
        this.$nextTick(this.handleAccpet())
    }
}
</script>
  
<style>
.page {
    background-color: rgb(245, 246, 245);
    padding: 2% 5% 0 5%;
}

.content_page {
    display: flex;
    justify-content: space-between;
}

.left {
    width: 28%;
}

.right {
    width: 70%;
    background-color: white;
}

.navigation_bar {
    text-align: left;
    background-color: white;
    width: 100%;
    padding-top: 1%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.el-tabs {
    display: flex;
    /* 序列横向撑满 */
    flex-direction: column;

}

.fontClass {
    display: flex;
    /* 让字体向左靠齐 */
    font-size: 17px;
}

h3 {
    font-size: 30px;
    padding-left: 1%;
    border-left: 5px solid rgb(64, 158, 255);
}

h2 {

    margin-left: 5%;
    padding-left: 2%;
    border-left: 5px solid rgb(64, 158, 255);
}

.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    margin-bottom: 3%;
    font-size: 20px;
}
</style>