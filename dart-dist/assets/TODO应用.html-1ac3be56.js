import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as a,e as t,d as i}from"./app-32bab067.js";const l={},u=i(`<h1 id="flutter实战之todo应用" tabindex="-1"><a class="header-anchor" href="#flutter实战之todo应用" aria-hidden="true">#</a> Flutter实战之TODO应用</h1><p>在本篇文章中，我们将构建一个TODO应用，使用最新的Dart语法和Flutter框架。这个TODO应用将具备添加、编辑、删除任务，以及任务的状态管理等功能。让我们一步一步地构建这个TODO应用。</p><h2 id="步骤-1-创建flutter项目" tabindex="-1"><a class="header-anchor" href="#步骤-1-创建flutter项目" aria-hidden="true">#</a> 步骤 1：创建Flutter项目</h2><p>首先，我们需要创建一个Flutter项目。打开终端并执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter create todo_app
<span class="token builtin class-name">cd</span> todo_app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这将创建一个名为<code>todo_app</code>的Flutter项目，并进入项目目录。</p><h2 id="步骤-2-创建模型类" tabindex="-1"><a class="header-anchor" href="#步骤-2-创建模型类" aria-hidden="true">#</a> 步骤 2：创建模型类</h2><p>我们将创建一个模型类<code>Todo</code>来表示任务，包含任务的标题、描述和完成状态。在<code>lib/models/todo.dart</code>中创建一个新的Dart文件，并添加以下代码：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> title<span class="token punctuation">;</span>
  <span class="token class-name">String</span> description<span class="token punctuation">;</span>
  bool isCompleted<span class="token punctuation">;</span>

  <span class="token class-name">Todo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>description<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isCompleted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤-3-创建任务列表页面" tabindex="-1"><a class="header-anchor" href="#步骤-3-创建任务列表页面" aria-hidden="true">#</a> 步骤 3：创建任务列表页面</h2><p>我们将创建一个任务列表页面，显示所有的任务，并提供添加、编辑、删除任务的功能。在<code>lib/screens/todo_list_screen.dart</code>中创建一个新的Dart文件，并添加以下代码：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:todo_app/models/todo.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:todo_app/screens/todo_edit_screen.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TodoListScreen</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  _TodoListScreenState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_TodoListScreenState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _TodoListScreenState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TodoListScreen</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Todo</span><span class="token punctuation">&gt;</span></span> _todos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;TODO List&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
        itemCount<span class="token punctuation">:</span> _todos<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
        itemBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">final</span> todo <span class="token operator">=</span> _todos<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
            title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">,</span>
            subtitle<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">,</span>
            trailing<span class="token punctuation">:</span> <span class="token class-name">Checkbox</span><span class="token punctuation">(</span>
              value<span class="token punctuation">:</span> todo<span class="token punctuation">.</span>isCompleted<span class="token punctuation">,</span>
              onChanged<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  todo<span class="token punctuation">.</span>isCompleted <span class="token operator">=</span> value<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">_navigateToEditScreen</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      floatingActionButton<span class="token punctuation">:</span> <span class="token class-name">FloatingActionButton</span><span class="token punctuation">(</span>
        onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">_navigateToEditScreen</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">_navigateToEditScreen</span><span class="token punctuation">(</span><span class="token class-name">Todo</span><span class="token operator">?</span> todo<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> editedTodo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      context<span class="token punctuation">,</span>
      <span class="token class-name">MaterialPageRoute</span><span class="token punctuation">(</span>
        builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">TodoEditScreen</span><span class="token punctuation">(</span>todo<span class="token punctuation">:</span> todo<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>editedTodo <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>todo <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          _todos<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>editedTodo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">final</span> index <span class="token operator">=</span> _todos<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span>
          _todos<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> editedTodo<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们创建了一个<code>TodoListScreen</code>类作为任务列表页面，它是一个有状态的小部件。在<code>build</code>方法中，我们使用<code>Scaffold</code>和<code>ListView.builder</code>来显示所有的任务，并为每个任务提供了标题、描述和完成状态的展示。</p><p>我们还实现了\`_navigateToEdit</p><p>Screen\`方法，用于导航到任务编辑页面。当用户点击某个任务时，会跳转到任务编辑页面并将对应的任务传递过去。</p><h2 id="步骤-4-创建任务编辑页面" tabindex="-1"><a class="header-anchor" href="#步骤-4-创建任务编辑页面" aria-hidden="true">#</a> 步骤 4：创建任务编辑页面</h2><p>我们将创建一个任务编辑页面，用于添加新任务或编辑现有任务的标题、描述和完成状态。在<code>lib/screens/todo_edit_screen.dart</code>中创建一个新的Dart文件，并添加以下代码：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:todo_app/models/todo.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TodoEditScreen</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Todo</span><span class="token operator">?</span> todo<span class="token punctuation">;</span>

  <span class="token class-name">TodoEditScreen</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>todo<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  _TodoEditScreenState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_TodoEditScreenState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _TodoEditScreenState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TodoEditScreen</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  late <span class="token class-name">TextEditingController</span> _titleController<span class="token punctuation">;</span>
  late <span class="token class-name">TextEditingController</span> _descriptionController<span class="token punctuation">;</span>
  bool _isCompleted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _titleController <span class="token operator">=</span> <span class="token class-name">TextEditingController</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>todo<span class="token operator">?</span><span class="token punctuation">.</span>title <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _descriptionController <span class="token operator">=</span>
        <span class="token class-name">TextEditingController</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>todo<span class="token operator">?</span><span class="token punctuation">.</span>description <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _isCompleted <span class="token operator">=</span> widget<span class="token punctuation">.</span>todo<span class="token operator">?</span><span class="token punctuation">.</span>isCompleted <span class="token operator">?</span><span class="token operator">?</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _titleController<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _descriptionController<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>todo <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string-literal"><span class="token string">&#39;Add Todo&#39;</span></span> <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Edit Todo&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
        padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token class-name">TextField</span><span class="token punctuation">(</span>
              controller<span class="token punctuation">:</span> _titleController<span class="token punctuation">,</span>
              decoration<span class="token punctuation">:</span> <span class="token class-name">InputDecoration</span><span class="token punctuation">(</span>
                labelText<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Title&#39;</span></span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">TextField</span><span class="token punctuation">(</span>
              controller<span class="token punctuation">:</span> _descriptionController<span class="token punctuation">,</span>
              decoration<span class="token punctuation">:</span> <span class="token class-name">InputDecoration</span><span class="token punctuation">(</span>
                labelText<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Description&#39;</span></span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">CheckboxListTile</span><span class="token punctuation">(</span>
              title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Completed&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              value<span class="token punctuation">:</span> _isCompleted<span class="token punctuation">,</span>
              onChanged<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  _isCompleted <span class="token operator">=</span> value<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">RaisedButton</span><span class="token punctuation">(</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">_saveTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Save&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">_saveTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> newTodo <span class="token operator">=</span> <span class="token class-name">Todo</span><span class="token punctuation">(</span>
      title<span class="token punctuation">:</span> _titleController<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
      description<span class="token punctuation">:</span> _descriptionController<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
      isCompleted<span class="token punctuation">:</span> _isCompleted<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> newTodo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们创建了一个<code>TodoEditScreen</code>类作为任务编辑页面，它也是一个有状态的小部件。在<code>initState</code>方法中，我们初始化了文本编辑器的控制器，并根据传入的任务初始化了相应的值。</p><p>在<code>build</code>方法中，我们使用<code>Scaffold</code>和<code>Column</code>来显示标题、描述和完成状态的输入字段。用户可以在这个页面上输入任务的详细信息，并使用保存按钮将其保存。</p><h2 id="步骤-5-运行应用" tabindex="-1"><a class="header-anchor" href="#步骤-5-运行应用" aria-hidden="true">#</a> 步骤 5：运行应用</h2><p>现在，我们已经完成了强大的TODO应用的代码编写。在终端中，运行以下命令来启动应用程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Flutter将在模拟器或设备上运行应用程序，并显示任务列表界面。您可以点击浮动按钮添加新的</p><p>任务，点击任务列表项编辑任务的标题、描述和完成状态。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,26),d={href:"https://dart.dev/guides",target:"_blank",rel:"noopener noreferrer"},k={href:"https://flutter.dev/docs",target:"_blank",rel:"noopener noreferrer"},r={href:"https://flutter.dev/docs/cookbook",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("Dart官方文档"),t(s)])]),n("li",null,[n("a",k,[a("Flutter官方文档"),t(s)])]),n("li",null,[n("a",r,[a("Flutter实战教程"),t(s)])])])])}const f=p(l,[["render",v],["__file","TODO应用.html.vue"]]);export{f as default};
