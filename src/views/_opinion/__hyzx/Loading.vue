<template>
    <Row>
        <Col class="demo-spin-col" span="8">
            <Spin fix style="background-color: #F2F2F2;">
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        width: 100%;
        height: 30px;
        position: relative;
        border: 1px solid #F2F2F2;
    }
</style>