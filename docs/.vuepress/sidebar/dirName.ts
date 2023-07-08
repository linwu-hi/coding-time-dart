export const dirName ={
    '/': [
      '/preamble',
      {
        text:'基础',
        // collapsible:true,
        prefix:'base/',
        link:'base/搭建环境',
        children:[
          '搭建环境',
          '变量与数据类型',
          '运算符',
          '流程控制',
          '函数',
          '集合类型'
        ]
      },
      {
        text:'面向对象',
        // collapsible:true,
        prefix:'oop/',
        link:'oop/类和对象',
        children:[
          '类和对象',
          '类的继承',
          '多态',
          '更多特性'
        ]
      },
      {
        text:'进阶',
        // collapsible:true,
        prefix:'advance/',
        link:'advance/Dart模块化',
        children:[
          'Dart模块化',
          'Dart库的使用和创建',
          'Dart的命令行和Web编程',
          'Dart中使用JSON',
          'Dart的异步编程',
          '事件循环和协程机制',
          'Dart的Stream',
          'Dart的Isolate',
          'Dart中的泛型',
          '空安全',
          'Dart测试',
        ]
      },
      {
        text:'Flutter与Dart实战',
        // collapsible:true,
        prefix:'flutter/',
        link:'flutter/简介',
        children:[
          '简介',
          '配置',
          '编写第一个Flutter应用',
          'Widget',
          '状态管理',
          'Flutter路由管理',
          'Material和Cupertino组件',
          '网络请求',
          'TODO应用',
        ]
      }
    ],
  }