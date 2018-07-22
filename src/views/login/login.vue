<style lang="less">
  @import 'login.less';
</style>

<template>

  <div class="login" @keydown.enter="handleSubmit">
    <div id="particles-js"></div>

    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="loginName">
              <Input size="large"
                     v-model="form.loginName"
                     placeholder="请输入用户名">
              <span slot="prepend">
                  <Icon :size="16" type="person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input size="large"
                     type="password"
                     v-model="form.password"
                     placeholder="请输入密码">
              <span slot="prepend">
                  <Icon :size="14" type="locked"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button size="large"
                      @click="handleSubmit"
                      type="primary"
                      :loading="showBtnLoading"
                      long>登录
              </Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import 'particles';
  import particlesSet from '@/views/login/particles.json';

  export default {
    mounted () {
      particlesJS('particles-js', particlesSet);
    },
    data () {
      return {
        showBtnLoading: false,
        form: {
          loginName: 'admin',
          password: '1qaz2wsx',
          clientName: 'backend',
          clientSecret: 'hzg-dev'
        },
        rules: {
          loginName: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      handleSubmit: _.debounce(function () {
        const self = this;
        self.$refs.loginForm.validate((valid) => {
          if (valid) {
            self.showBtnLoading = true;
            this.$store.commit('setAvator', 'http://image.xiaomaiketang.com/xm/avatar1520488901594');
            let param = this.form;
            AXIOS.post('/security/token', param).then((res) => {
              self.showBtnLoading = false

              let token = res.token || ''
              if(token){
                self.$Message.success('登录成功！')

                USER.setToken(token)
                USER.setLoginName(self.form.loginName)
                USER.setPassword(this.form.password)

                if (this.form.loginName === 'admin') {
                  Cookies.set('access', 0);
                } else {
                  Cookies.set('access', 1);
                }
                self.$router.push({
                  name: 'home_index'
                })
              }
            }, (err) => {
              self.showBtnLoading = false
            })

          }
        });
      }, 1000, true)
    }
  };
</script>
