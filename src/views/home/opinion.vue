<template>
    <div class="app-container">
        <el-form ref="form" :model="form" label-width="80px">
          this is opinion page
          <router-link>
             <el-button type="primary" @click="showRouterItem()">测试按钮</el-button> 
          </router-link>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
