<style lang="less">
    @import "./demoTestPage.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <Row :gutter="10">
            <Col :md="24" :lg="24">
            <h1>fuck uuuuu</h1>
             <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quibusdam iusto tempora error nam illo recusandae ipsam qui harum accusantium tempore iste quidem dolor saepe accusamus necessitatibus sed assumenda non quaerat fugiat expedita neque, alias cupiditate! Aliquam quia omnis voluptatibus sint eius magni cum dolores aperiam sequi, cupiditate modi minima molestias totam blanditiis, aliquid quisquam, velit voluptatum, eum nihil illo consequatur. Accusamus error nihil voluptatibus aspernatur similique aut nostrum magni tenetur ipsum mollitia ex obcaecati facilis, delectus deleniti vitae iure asperiores dolor sunt placeat omnis saepe assumenda ipsa, voluptate temporibus. Voluptate assumenda beatae sit neque, explicabo quidem expedita excepturi magnam!</p> 
            </Col>
        </Row>
    </div>
</template>

<script>

export default {
    name: 'demoTestPage',
    components: {
     
    },
    data () {
        return {
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
    computed: {
       
    },
    methods: {
       
    }
};
</script>
