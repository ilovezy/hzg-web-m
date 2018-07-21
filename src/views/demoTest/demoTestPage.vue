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
        <Tooltip
            placement="right"
            content="Here is the prompt text">
          <Button type="warning" @click="openModal">
            hello world
          </Button>
        </Tooltip>

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
        <Dropdown @on-click="dropDownChange">
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
        <h1>pageNo: {{pageNo}}</h1>
        <Table size="small" :loading="loadingTable" :height="300" stripe :columns="columns1" :data="data1">
          <Page slot="footer"
                style="float: right; margin-right: 15px"
                :total="31"
                @on-change="changePage"
                show-total></Page>
        </Table>
      </Col>

      <Col :lg="24">
        <Select multiple v-model="model1" style="width:200px">
          <Option v-for="item in cityList"
                  :value="item.value"
                  :key="item.value">{{ item.label }}
          </Option>
        </Select>
      </Col>

      <Col :lg="24">
        <AutoComplete
            v-model="value1"
            :data="autocompleteArr"
            @on-search="handleSearch1"
            placeholder="input here"
            style="width:200px"></AutoComplete>

      </Col>
      <Col :lg="24">
        <Radio v-model="single">Radio</Radio>

        <RadioGroup v-model="phone" vertical type="button">
          <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
          </Radio>
          <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
          </Radio>
          <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
          </Radio>
        </RadioGroup>
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
        phone: '',
        single: false,
        value1: '',
        autocompleteArr: ['xfasf', 'bb', '好', '和房东方奇偶啊'],
        loadingTable: true,
        pageNo: 0,
        dropdownValue: '下拉菜单',
        currentStep: 0,
        showModal1: false,
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: '',
        columns1: [
          {
            title: 'Name',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'success'
                  },
                  on: {
                    click: () => {
                      this.$Message.success(JSON.stringify(params))
                    }
                  }
                }, params.row.name)
              ])
            }
          },
          // {
          //   title: 'Name',
          //   key: 'name',
          //   width: 200,
          //   fixed: 'left'
          // },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address',
            ellipsis: true
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
        // data1: [],

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
      setTimeout(() => {
        this.loadingTable = false;
      }, 3000);
      this.$Message.success('成功切换到这里来了亲');
    },

    methods: {
      dropDownChange (a, b) {
        debugger;
      },

      handleSearch1 (value) {
        // this.data1 = !value ? [] : [
        //   value,
        //   value + value,
        //   value + value + value
        // ];
      },
      changePage (pageNo) {
        this.pageNo = pageNo;
      },
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
