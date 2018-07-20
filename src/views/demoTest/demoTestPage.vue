<style lang="less">
  @import "./demoTestPage.less";
  @import "../../styles/common.less";

  .ivu-row {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

<template>
  <div class="demo-test-page">
    <Row :gutter="10">
      <Col :lg="24">
        <Button type="warning" @click="openModal">
          hello world
        </Button>
        <Button type="success" @click="confirm">
          confirm modal
        </Button>

        <Modal
            v-model="showModal1"
            title="Common Modal dialog box title"

            :mask-closable="false"
            :closable="false"
            @on-ok="ok"
            @on-cancel="cancel">
          <h1>hello fuck</h1>
          <p>Content of dialog Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam dicta, est
            iure provident repellat reprehenderit unde vel veritatis. Veritatis?</p>

        </Modal>
      </Col>
    </Row>

    <hr>
    <Row :gutter="10">
      <Col :lg="24">
      </Col>
    </Row>

  </div>
</template>

<script>
  export default {
    name: 'demoTestPage',
    components: {},
    data () {
      return {
        showModal1: false,

        toDoList: [
          {
            title: '去iView官网学习完整的iView组件'
          },
          {
            title: '去iView官网学习完整的iView组件'
          },
          {
            title: '去iView官网学习完整的iView组件'
          },
          {
            title: '去iView官网学习完整的iView组件'
          },
          {
            title: '去iView官网学习完整的iView组件'
          }
        ],

      };
    },
    computed: {},
    methods: {
      openModal () {
        this.showModal1 = true;
      },
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      },

      confirm () {
        this.$Modal.confirm({
          title: 'Title',
          content: '<p>Content of dialog</p><p>Content of dialog</p>',
          onOk: () => {
            this.$Message.info('Clicked ok');
          },
          onCancel: () => {
            this.$Message.info('Clicked cancel');
          }
        });
      },
    }
  };
</script>
