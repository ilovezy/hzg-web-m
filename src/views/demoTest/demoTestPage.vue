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
        <Button type="warning" @click="openModal">
          hello world
        </Button>
        <Button type="success" @click="confirm">
          confirm modal
        </Button>

        <Modal
            v-model="showModal1"
            title="Common Modal dialog box title"
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
        <Carousel v-model="value1"
                  loop
                  :height="100"
                  autoplay
                  radius-dot
                  :autoplay-speed="10000">
          <CarouselItem class="fuck1">
            <div class="demo-carousel">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur cumque error fuga inventore
              ipsa nihil odio perspiciatis soluta. Quae!
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur cumque error fuga inventore
              ipsa nihil odio perspiciatis soluta. Quae!
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur cumque error fuga inventore
              ipsa nihil odio perspiciatis soluta. Quae!
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur cumque error fuga inventore
              ipsa nihil odio perspiciatis soluta. Quae!
            </div>
          </CarouselItem>
        </Carousel>
      </Col>
    </Row>

    <hr>
    <Row :gutter="10">
      <Col :lg="24" offset="8">
        <Poptip trigger="hover" title="Title" content="content contentcontentcontentcontentcontent">
          <Button>Hover</Button>
        </Poptip>

        <Poptip trigger="hover" title="Title" content="content contentcontentcontentcontentcontent">
          <Avatar
              src="https://i.loli.net/2018/07/21/5b529837f0442.jpeg"
              icon="person"
              size="large"/>
        </Poptip>

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
        value1: 1,
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

    created () {
      this.$Message.success('成功切换到这里来了亲');
    },

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
