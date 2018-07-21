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
        <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      </Col>
    </Row>

    <hr>
    <Row :gutter="10">
      <Col :lg="24">
        <Poptip trigger="hover" title="Title" content="content contentcontentcontentcontentcontent">
          <Button>Hover</Button>
        </Poptip>

        <Poptip trigger="hover" title="Title" content="content contentcontentcontentcontentcontent">
          <Badge count="1">
            <Avatar
                src="https://i.loli.net/2018/07/21/5b529837f0442.jpeg"
                icon="person"
                size="large"/>
          </Badge>
        </Poptip>
      </Col>
    </Row>

    <Row>
      <Col :lg="24">
        <div>
          <Spin fix size="large">elo</Spin>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi atque consectetur eligendi enim eum
            fuga fugiat in libero, nam nihil optio quaerat quia quibusdam repellat rerum sequi sint soluta sunt
            veritatis. Ad alias aliquam assumenda beatae consequatur dicta ducimus est expedita explicabo illo
            laudantium, non sequi similique soluta, ullam? Accusantium alias aliquam commodi, delectus dolorem ipsam
            iusto magnam mollitia natus necessitatibus neque officia omnis quae quis repudiandae vero vitae voluptate
            voluptatibus. A culpa earum impedit numquam rerum temporibus tenetur! A consectetur dolorum eius eligendi
            explicabo illum impedit itaque molestias mollitia officia, quibusdam ratione repellat, rerum tempore tenetur
            vitae voluptatum.</p>
        </div>
      </Col>

      <Col :lg="24">
        <i-circle :percent="80">
          <span class="demo-Circle-inner" style="font-size:24px">80%</span>
        </i-circle>
      </Col>


    </Row>
    <hr>
    <Row>
      <Col style="background: #fff">
        <Steps :current="currentStep" direction="vertical">
          <Step title="已完成" content="这里是该步骤的描述信息"></Step>
          <Step title="进行中" content="这里是该步骤的描述信息"></Step>
          <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        <Button @click="next">next</Button>
      </Col>

      <Col>
        <Breadcrumb>
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Col>

      <Col>
        <Dropdown>
          <a href="javascript:void(0)">
            {{dropdownValue}}
            <Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>

    <Row>
      <Col :lg="24">
        <Table :height="300" stripe :columns="columns1" :data="data1"></Table>
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
        dropdownValue: '下拉菜单',
        currentStep: 0,
        value1: 1,
        showModal1: false,

        columns1: [
          {
            title: 'Name',
            key: 'name',
            width: 100,
            fixed: 'left'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          },
          {
            title: 'Date',
            key: 'date'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],

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
      next () {
        this.currentStep++;
      },
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
