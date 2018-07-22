<style lang="less">
  @import "./demoTestPage.less";
  @import "../../styles/common.less";

  .ivu-row {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .ivu-carousel-item {
    background: #70c6fb;
    color: #fff;
    font-size: 20px;
    padding: 15px;
  }

  .fuck1 {
    &.ivu-carousel-item {
      background: red;
    }
  }
</style>

<template>
  <div class="demo-test-page">

    <Row :gutter="10">
      <Col :lg="24">
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'basicDataPage',
    components: {},
    data () {
      return {
      };
    },

    computed: {

    },

    created () {
      this.getList()
      this.$Message.success('基本数据第一次测试');
    },

    methods: {
      getList(){
        // AXIOS.post('http://www.wwtliu.com/sxtstu/blueberrypai/getChengpinDetails.php', {}).then((res) => {
        //   debugger
        // })
        AXIOS.get('/auth/sysRole/index', {
          page: 0,
          size: 5,
          name: '',
          crTimeStart: '',
          crTimeEnd: ''
        }).then((res) => {
          debugger
        })
      }
    }
  };
</script>
