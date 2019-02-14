import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage } from '@/common/utils'
import { clearStorage } from "@/common/utils"
import { setStorage } from "@/common/utils";


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: getStorage("user") || null,
        fastStepOneID: getStorage("fastStepOneID") || null,
        professionStepOneID: getStorage("professionStepOneID") || null,
        reportID: getStorage("reportID") || null,
        reportType: getStorage("reportType") || null,
        formID:getStorage("formID") || null,
        // professionStepTwoID:getStorage("professionStepTwoID") || null
    },
    mutations: {
        // 登陆成功
        loginSuc(state, data) {
            state.user = data
            setStorage("user", { token: data.token, phone: data.phone });
        },
        // 退出登录
        loginOut(state) {
            clearStorage("user");
            clearStorage("fastStepOneID");
            clearStorage("professionStepOneID")
            clearStorage("professionStepTwoID")
            clearStorage("reportID")
            clearStorage("reportType")
            clearStorage("formID")
            state.user = null;

        },
        //获取快速估值stepOne的表单ID
        getFastOneID(state, data) {
            setStorage("fastStepOneID", data)
            state.fastStepOneID = data
        },
        //获取专业估值stepOne的表单ID
        getProOneID(state, data) {
            setStorage("professionStepOneID", data)
            state.professionStepOneID = data
        },
        //获取专业估值stepTwo的表单ID
        // getProTwoID(state,data){
        //     setStorage("professionStepTwoID",data)
        //     state.professionStepTwoID = data
        // },
        //删除快速估值stepOne的表单ID
        deleteFastOneID(state) {
            clearStorage("fastStepOneID");
            state.fastStepOneID = null;
        },
        //删除专业估值stepOne的表单ID
        deleteProOneID(state) {
            clearStorage("professionStepOneID")
            state.professionStepOneID = null;
        },
        //删除专业估值stepTwo的表单ID
        // deleteProTwoID(state){
        //     clearStorage("professionStepTwoID")
        //     state.professionStepTwoID = null;
        // },
        //获取reportID
        getReportID(state, data) {
            state.reportID = data;
            setStorage("reportID", data)
        },
        //获取reportType
        getReportType(state, data) {
            state.reportType = data;
            setStorage("reportType", data)
        },
        //获取公司信息的formID
        getCompanyFormID(state,data){
            state.formID = data
            setStorage("formID", data)
        }
    }

})

export default store;