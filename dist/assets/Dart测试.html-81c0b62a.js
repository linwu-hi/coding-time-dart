import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-303546ec.js";const e={},p=t(`<h1 id="单元测试和集成测试" tabindex="-1"><a class="header-anchor" href="#单元测试和集成测试" aria-hidden="true">#</a> 单元测试和集成测试</h1><p>Dart的生态系统提供了一个完善的测试框架来进行代码的单元测试和集成测试。以下是一些基本的测试知识。</p><h2 id="dart单元测试" tabindex="-1"><a class="header-anchor" href="#dart单元测试" aria-hidden="true">#</a> Dart单元测试</h2><p>单元测试是在软件开发中进行的最小单元的测试。在Dart中，我们可以使用内置的<code>test</code>包来进行单元测试。</p><h3 id="安装测试包" tabindex="-1"><a class="header-anchor" href="#安装测试包" aria-hidden="true">#</a> 安装测试包</h3><p>首先，我们需要在pubspec.yaml中添加<code>test</code>的依赖：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">dev_dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span> any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行 <code>dart pub get</code> 命令来安装依赖包。</p><h3 id="创建测试" tabindex="-1"><a class="header-anchor" href="#创建测试" aria-hidden="true">#</a> 创建测试</h3><p>然后，我们可以创建一个新的Dart文件来写我们的测试，这个文件通常放在项目的<code>test</code>目录下，并且以<code>_test.dart</code>结尾。</p><p>例如，我们可以创建一个文件<code>test/big_numbers_test.dart</code>来测试我们之前写的大数相加的函数。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:test/test.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:my_app/big_numbers.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;addBigNumbers&#39;</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">addBigNumbers</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;123&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;456&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;579&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">addBigNumbers</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;999&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;1000&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行测试" tabindex="-1"><a class="header-anchor" href="#运行测试" aria-hidden="true">#</a> 运行测试</h3><p>然后，我们可以运行<code>dart test</code>命令来执行我们的测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dart <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dart集成测试" tabindex="-1"><a class="header-anchor" href="#dart集成测试" aria-hidden="true">#</a> Dart集成测试</h2><p>集成测试是对多个组件或整个系统进行的测试。在Dart中，我们可以使用<code>flutter_test</code>包进行集成测试。</p><h3 id="安装测试包-1" tabindex="-1"><a class="header-anchor" href="#安装测试包-1" aria-hidden="true">#</a> 安装测试包</h3><p>首先，我们需要在pubspec.yaml中添加<code>flutter_test</code>的依赖：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">dev_dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter_test</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行 <code>dart pub get</code> 命令来安装依赖包。</p><h3 id="创建测试-1" tabindex="-1"><a class="header-anchor" href="#创建测试-1" aria-hidden="true">#</a> 创建测试</h3><p>然后，我们可以创建一个新的Dart文件来写我们的测试，这个文件通常放在项目的<code>test</code>目录下。</p><p>例如，我们可以创建一个文件<code>test/app_test.dart</code>来测试我们的整个应用：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter_test/flutter_test.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:my_app/main.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">testWidgets</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Counter increments smoke test&#39;</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">WidgetTester</span> tester<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token comment">// Build our app and trigger a frame.</span>
    <span class="token keyword">await</span> tester<span class="token punctuation">.</span><span class="token function">pumpWidget</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Verify that our counter starts at 0.</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>find<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;0&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> findsOneWidget<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>find<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> findsNothing<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Tap the &#39;+&#39; icon and trigger a frame.</span>
    <span class="token keyword">await</span> tester<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>find<span class="token punctuation">.</span><span class="token function">byIcon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> tester<span class="token punctuation">.</span><span class="token function">pump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Verify that our counter has incremented.</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>find<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;0&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> findsNothing<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>find<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> findsOneWidget<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行测试-1" tabindex="-1"><a class="header-anchor" href="#运行测试-1" aria-hidden="true">#</a> 运行测试</h3><p>然后，我们可以运行<code>flutter test</code>命令来执行我们的测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(e,[["render",i],["__file","Dart测试.html.vue"]]);export{r as default};
