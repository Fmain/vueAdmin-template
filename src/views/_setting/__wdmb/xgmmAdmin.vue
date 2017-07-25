<template>
  <div class="container">
    <div class="box">
      <Form :model="formItem" :label-width="80">
        <Form-item label="用户名：">
          <Input v-model="formItem.username" placeholder="请输入" disabled></Input>
        </Form-item>
        <Form-item label="姓名：">
          <Input v-model="formItem.name" placeholder="请输入" :disabled="disabled"></Input>
        </Form-item>
        <Form-item label="联系方式：">
          <Input v-model="formItem.conect" placeholder="请输入" :disabled="disabled"></Input>
        </Form-item>
        <Form-item label="单位名称：">
          <Input v-model="formItem.unit" placeholder="请输入" :disabled="disabled"></Input>
        </Form-item>
        <Form-item label="部门：">
          <Input v-model="formItem.department" placeholder="请输入" :disabled="disabled"></Input>
        </Form-item>
        <Form-item label="职位：">
          <Input v-model="formItem.position" placeholder="请输入" :disabled="disabled"></Input>
        </Form-item>
        <Form-item label="邮箱：">
          <Input v-model="formItem.mail" placeholder="请输入" :disabled="disabled"></Input>
        </Form-item>
        <Form-item label="备注：">
          <Input v-model="formItem.note" placeholder="请输入" :disabled="disabled"></Input>
        </Form-item>
        <Button type="primary" @click="disabled = !disabled" style="margin-left:80px;width:80px;">
          <span v-if="disabled">更新资料</span>
          <span v-else>取消</span></Button>
        <Button type="primary" @click="handleSubmit('formItem')" style="margin-left:50px;">提交</Button> 
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: true,
      formItem: {
        username: '',
        name: '',
        conect: '',
        unit: '',
        department: '',
        position: '',
        mail: '',
        note: '',
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    }
  }
}
</script>
<style>
.box {
  margin-top: 80px;
  width: 320px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
}
</style>
