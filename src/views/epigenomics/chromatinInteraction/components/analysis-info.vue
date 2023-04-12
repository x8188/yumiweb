<template>
    <div class="" v-show="showInfo">
        <el-card class="card-container">
            <el-row style="margin-bottom: 40px;margin-top: 10px;">
                <el-button @click="backFilter" type="primary" icon="el-icon-d-arrow-left">返回</el-button>
            </el-row>
            <el-table
                border
                stripe
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="xotId"
                    label="Germplasm Id"
                >
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="Type"
                >
                </el-table-column>
                <el-table-column
                    prop="value"
                    label="Value"
                >
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    props: {
        showInfo: {
            type: Boolean,
            default: false
        },
        infoItem: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            tableData: [{
                xotId: 511319,
                type: 'Quantitative',
                value: 6.004286
            },{
                xotId: 511319,
                type: 'Quantitative',
                value: 6.004286
            },{
                xotId: 511319,
                type: 'Quantitative',
                value: 6.004286
            },
        ]
        }
    },
    updated() {
        this.showItem()
    },
    methods: {
        backFilter() {
            this.$emit('update:showInfo', false)
        },
        showItem() {
            // console.log("!!!", this.infoItem)
        }
    }
    }
</script>

<style scoped>
.card-container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    min-width: 900px;
    max-width: 1600px;
    width: 90%;
    margin-top: 30px;
}
</style>