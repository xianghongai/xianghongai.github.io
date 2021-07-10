(self.webpackChunkfeatures=self.webpackChunkfeatures||[]).push([[680],{7382:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-308c4358",path:"/create-folder-using-part-of-filename-and-move-file-into.html",title:"根据文件名自动创建目录存放文件",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="根据文件名自动创建目录存放文件" tabindex="-1"><a class="header-anchor" href="#根据文件名自动创建目录存放文件" aria-hidden="true">#</a> 根据文件名自动创建目录存放文件</h1>\n<p>以前给画家做助理，要维护老师几十年的电子作品数据。</p>\n<p>若干文件，但是，有一定规则，如有按年份命名，这样，根据 <code>&quot;tokens=1,* delims=-&quot;</code> 按长度按指定字符切分文件名，自动创建年份的目录，保存对应的所有文件。</p>\n',headers:[],filePathRelative:"create-folder-using-part-of-filename-and-move-file-into.md",git:{updatedTime:null,contributors:[]}}},3082:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="根据文件名自动创建目录存放文件" tabindex="-1"><a class="header-anchor" href="#根据文件名自动创建目录存放文件" aria-hidden="true">#</a> 根据文件名自动创建目录存放文件</h1><p>以前给画家做助理，要维护老师几十年的电子作品数据。</p><p>若干文件，但是，有一定规则，如有按年份命名，这样，根据 <code>&quot;tokens=1,* delims=-&quot;</code> 按长度按指定字符切分文件名，自动创建年份的目录，保存对应的所有文件。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  1998-001.jpg ~ 1998-xxx.jpg\n  1999-001.jpg ~ 1999-xxx.jpg\n  ...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码实现，按需设定切分规则。</p><div class="language-batch ext-batch line-numbers-mode"><pre class="language-batch"><code><span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>\n<span class="token operator">@</span><span class="token command"><span class="token keyword">REM</span> @Author: xianghongai@gmail.com</span>\n<span class="token command"><span class="token keyword">title</span>   根据文件名自动创建目录存放文件</span>\n<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> 根据文件名自动创建目录存放文件</span>\n<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> -------------------------------------</span>\n\n<span class="token label property">:GTBegin</span>\n<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> 默认处理目录下所有格式文件，确定继续？(y<span class="token parameter attr-name">/n</span></span><span class="token punctuation">)</span>\n<span class="token command"><span class="token keyword">set</span> <span class="token parameter attr-name">/p</span> <span class="token variable">GTConfirm</span><span class="token operator">=</span></span>\n<span class="token command"><span class="token keyword">if</span> <span class="token string">&quot;%GTConfirm%&quot;</span><span class="token operator">==</span><span class="token string">&quot;y&quot;</span></span> <span class="token command"><span class="token keyword">goto</span> GTYES</span>\n<span class="token command"><span class="token keyword">if</span> <span class="token string">&quot;%GTConfirm%&quot;</span><span class="token operator">==</span><span class="token string">&quot;Y&quot;</span></span> <span class="token command"><span class="token keyword">goto</span> GTYES</span>\n<span class="token command"><span class="token keyword">if</span> <span class="token string">&quot;%GTConfirm%&quot;</span><span class="token operator">==</span><span class="token string">&quot;n&quot;</span></span> <span class="token command"><span class="token keyword">goto</span> GTNO</span>\n<span class="token command"><span class="token keyword">if</span> <span class="token string">&quot;%GTConfirm%&quot;</span><span class="token operator">==</span><span class="token string">&quot;N&quot;</span></span> <span class="token command"><span class="token keyword">goto</span> GTNO</span>\n<span class="token command"><span class="token keyword">echo</span> 请输入正确的指令</span>\n<span class="token command"><span class="token keyword">pause</span> &gt;nul</span>\n<span class="token command"><span class="token keyword">goto</span> GTBegin</span>\n\n<span class="token label property">:GTYES</span>\n<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> -------------------------------------</span>\n<span class="token command"><span class="token keyword">set</span> <span class="token parameter attr-name">/p</span> <span class="token variable">FilePath</span><span class="token operator">=</span>需要处理的目录:</span>\n<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/d</span> <span class="token variable">%FilePath%</span></span>\n<span class="token command"><span class="token keyword">for</span> <span class="token parameter attr-name">/f</span> <span class="token string">&quot;tokens=1,* delims=-&quot;</span> <span class="token variable">%%J</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token punctuation">&#39;</span>dir <span class="token parameter attr-name">/b</span> *.*<span class="token punctuation">&#39;</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token punctuation">(</span>\n    <span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;%%J\\&quot;</span></span> <span class="token command"><span class="token keyword">md</span> <span class="token string">&quot;%%J&quot;</span></span>\n    <span class="token command"><span class="token keyword">move</span> /<span class="token parameter attr-name">-y</span> <span class="token string">&quot;%%J-%%K&quot;</span> <span class="token string">&quot;%%J&quot;</span></span>\n    <span class="token punctuation">)</span>\n<span class="token command"><span class="token keyword">echo</span>. :</span><span class="token punctuation">)</span> 搞定\n<span class="token command"><span class="token keyword">pause</span> &gt;nul</span>\n<span class="token command"><span class="token keyword">exit</span></span>\n\n<span class="token label property">:GTNO</span>\n<span class="token command"><span class="token keyword">exit</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><hr><p>更新日志：</p><ul><li>2017-05-19</li></ul>',9),p={render:function(s,n){return e}}}}]);