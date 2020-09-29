<template>
  <div class="AppItemLeft">
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.AppItemLeft {
  width: 100%;
  height: 300px;
  background-color: lightgray;
  left: 0;
  top: 0;
  display: flex;
  /* box-shadow:0px 10px 8px -14px #1f1f1f; */
}
</style>
