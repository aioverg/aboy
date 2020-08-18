#### Loader基础

**概念：**Vue Loader是一个webpack的loader，运行以一种名为单文件组件（SFCs）的格式撰写vue组件。

**单文件组件（SFCs）规范：**.vue文件是一个自定义的文件类型，用类HTML语法描述一个Vue组件。每个.vue文件包含三种类型的顶级语言块```<template>、<script>、<style>```，还允许添加可先的自定义块，如：

```html
<template>
    <div></div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    div { }
</style>

<other>

</other>
```

**使用Vue Loader**

1. 若使用Vue CLI进行项目开发则不需要额外设置Vue Loader，Vue CLI已经自动包含并配置了Vue Loader。
2. 若Vue CLI没有满足项目需求，则可选择手动设置Vue Loader，具体步骤看官网。