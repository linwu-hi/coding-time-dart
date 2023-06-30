import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-303546ec.js";const t={},p=e(`<h1 id="dart模块化详解" tabindex="-1"><a class="header-anchor" href="#dart模块化详解" aria-hidden="true">#</a> Dart模块化详解</h1><p>在大型软件项目中，模块化是必不可少的，它可以帮助我们更好地组织和管理代码，提高代码的可读性和可维护性。在Dart中，模块化是通过库（libraries）来实现的。</p><h2 id="库的定义与使用" tabindex="-1"><a class="header-anchor" href="#库的定义与使用" aria-hidden="true">#</a> 库的定义与使用</h2><blockquote><p>这里简单做个介绍，下一章节会重点分析</p></blockquote><p>Dart库是一种代码模块，它可以包含变量、函数、类和其他代码。一个库在其它库中通过<code>import</code>关键字导入后，库中的代码就可以被使用。</p><p>Dart语言自带了一些核心库，如 <code>dart:core</code>, <code>dart:io</code>, <code>dart:html</code>等。例如：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你也可以导入自定义的库或者第三方库。如果库在包（package）中，可以通过以下方式导入：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:my_package/my_library.dart&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建自定义库" tabindex="-1"><a class="header-anchor" href="#创建自定义库" aria-hidden="true">#</a> 创建自定义库</h2><p>你可以创建自己的Dart库，一个库就是一个Dart源文件。该文件可以包含一些函数和类的定义。例如，你可以创建一个文件<code>my_library.dart</code>：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 定义一个函数</span>
<span class="token keyword">void</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello, Dart!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello from MyClass!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在其他Dart文件中导入并使用这个库：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;my_library.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> myObject <span class="token operator">=</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  myObject<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入库的一部分" tabindex="-1"><a class="header-anchor" href="#导入库的一部分" aria-hidden="true">#</a> 导入库的一部分</h2><p>有时，我们可能只需要使用库中的某一部分代码。这时，我们可以使用<code>show</code>关键字来只导入需要的部分：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;my_library.dart&#39;</span></span> <span class="token keyword">show</span> <span class="token class-name">MyClass</span><span class="token punctuation">;</span> <span class="token comment">// 只导入MyClass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>反之，如果你只想排除库中的某些部分，可以使用<code>hide</code>关键字：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;my_library.dart&#39;</span></span> <span class="token keyword">hide</span> myFunction<span class="token punctuation">;</span> <span class="token comment">// 导入my_library，但不包括myFunction</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="延迟加载-lazy-loading" tabindex="-1"><a class="header-anchor" href="#延迟加载-lazy-loading" aria-hidden="true">#</a> 延迟加载（Lazy Loading）</h2><p>Dart也支持延迟加载，也被称为懒加载，可以在需要时再加载和初始化模块。延迟加载可以提高应用的启动速度。你可以使用<code>deferred as</code>关键字来标记延迟加载的库：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:somepackage/somelibrary.dart&#39;</span></span> <span class="token keyword">deferred</span> <span class="token operator">as</span> someLibrary<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  someLibrary<span class="token punctuation">.</span><span class="token function">loadLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    someLibrary<span class="token punctuation">.</span><span class="token function">someFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，<code>someLibrary</code>将在<code>loadLibrary()</code>函数调用后才会被加载。在库加载完成后，<code>someFunction()</code>才会被调用。</p>`,23),c=[p];function i(o,l){return a(),s("div",null,c)}const u=n(t,[["render",i],["__file","Dart模块化.html.vue"]]);export{u as default};
