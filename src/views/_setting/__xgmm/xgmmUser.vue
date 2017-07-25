<template>
  <div class="container">
    <div class="box">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <Form-item label="用户名" prop="username">
        <Input v-model="formCustom.username" placeholder="请输入用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item label="原密码" prop="oldpsd">
        <Input type="password" v-model="formCustom.oldpsd" placeholder="请输入原密码">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item label="密码" prop="passwd">
        <Input type="password" v-model="formCustom.passwd" placeholder="请输入新密码"><Icon type="ios-locked-outline" slot="prepend"></Icon></Input>
      </Form-item>
      <Form-item label="确认密码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck" placeholder="请再次输入新密码"><Icon type="ios-locked-outline" slot="prepend"></Icon></Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
        <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
      </Form-item>
    </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('新密码不能为空'));
      } else {
        if (this.formCustom.passwdCheck !== '') {
          this.$refs.formCustom.validateField('passwdCheck');
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      formCustom: {
        username: '',
        oldpsd: '',
        passwd: '',
        passwdCheck: ''
      },
      ruleCustom: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        oldpsd: [
          { required: true, message: '原密码不能为空', trigger: 'blur' }
        ],
        passwd: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ],
        passwdCheck: [
          { required: true, validator: validatePassCheck, trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      },
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
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
<style>
.box {
  width: 320px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
}
</style>
