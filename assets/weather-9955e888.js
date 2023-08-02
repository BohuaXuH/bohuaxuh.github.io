import{u as a,c,w as t,_ as r,o as p,a as s,d as l}from"./app-35460d65.js";const y=s("div",{class:"prose m-auto"},[s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#主题更改"},"主题更改 ")]),s("li",null,[s("a",{href:"#具体实现"},"具体实现 ")]),s("li",null,[s("a",{href:"#一些功能组件"},"一些功能组件 ")])])])]),s("h3",{id:"主题更改",tabindex:"-1"},[l("主题更改 "),s("a",{class:"header-anchor",href:"#主题更改","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13c2f6c4b0b146cda24462d62cf20d1c~tplv-k3u1fbpfcp-watermark.image?",alt:"image-20220831134734107.png"})]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b461733d505c4076a9421d204bee1ca7~tplv-k3u1fbpfcp-watermark.image?",alt:"image-20220831135355145.png"})]),s("h3",{id:"具体实现",tabindex:"-1"},[l("具体实现 "),s("a",{class:"header-anchor",href:"#具体实现","aria-hidden":"true"},"#")]),s("p",null,"实现也是比较简单,因为在react中就没有直接写:root全局的配置，在App组件最外层也可以实现全局配置，"),s("p",null,"颜色可以自己按着配色搭配着来"),s("pre",null,[s("code",{class:"language-js"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/* Light Mode */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"App"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"color"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#B8A965"}},"mode"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#C98A7D"}},'"light"'),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"surface1"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"e6e6e6"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"surface2"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"f2f2f2"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"surface3"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"ffffff"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"element1"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#6394BF"}},"111111"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"element2"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#6394BF"}},"222222"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"element3"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#6394BF"}},"333333"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"elementInverse"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"eee"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"primary"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #01408"),s("span",{style:{color:"#B8A965"}},"e"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"secondary"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #3"),s("span",{style:{color:"#B8A965"}},"c5d5c"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"tertiary"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"fff7d6"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/* Dark Mode */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"App"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"color"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#B8A965"}},"mode"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#C98A7D"}},'"dark"'),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"surface1"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#6394BF"}},"262626"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"surface2"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#6394BF"}},"333333"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"surface3"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#6394BF"}},"404040"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"element1"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"eeeeee"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"element2"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"dddddd"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"element3"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"cccccc"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"elementInverse"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#6394BF"}},"111"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"primary"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #8"),s("span",{style:{color:"#B8A965"}},"fceff"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"secondary"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #72"),s("span",{style:{color:"#B8A965"}},"faca"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"--"),s("span",{style:{color:"#A1B567"}},"tertiary"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," #"),s("span",{style:{color:"#B8A965"}},"eee8a9"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"//引用写法： background-color: var(--element2);")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/* Light Mode */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"App"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"color"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#8C862B"}},"mode"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#B56959"}},'"light"'),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"surface1"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"e6e6e6"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"surface2"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"f2f2f2"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"surface3"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"ffffff"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"element1"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#296AA3"}},"111111"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"element2"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#296AA3"}},"222222"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"element3"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#296AA3"}},"333333"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"elementInverse"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"eee"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"primary"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #01408"),s("span",{style:{color:"#8C862B"}},"e"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"secondary"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #3"),s("span",{style:{color:"#8C862B"}},"c5d5c"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"tertiary"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"fff7d6"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/* Dark Mode */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"App"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"color"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#8C862B"}},"mode"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#B56959"}},'"dark"'),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"surface1"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#296AA3"}},"262626"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"surface2"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#296AA3"}},"333333"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"surface3"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#296AA3"}},"404040"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"element1"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"eeeeee"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"element2"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"dddddd"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"element3"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"cccccc"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"elementInverse"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#296AA3"}},"111"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"primary"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #8"),s("span",{style:{color:"#8C862B"}},"fceff"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"secondary"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #72"),s("span",{style:{color:"#8C862B"}},"faca"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"--"),s("span",{style:{color:"#6C7834"}},"tertiary"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," #"),s("span",{style:{color:"#8C862B"}},"eee8a9"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"//引用写法： background-color: var(--element2);")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,[l("参考网站："),s("a",{href:"https://ryanfeigenbaum.com/dark-mode/",target:"_blank",rel:"noopener"},"https://ryanfeigenbaum.com/dark-mode/")]),s("h3",{id:"一些功能组件",tabindex:"-1"},[l("一些功能组件 "),s("a",{class:"header-anchor",href:"#一些功能组件","aria-hidden":"true"},"#")]),s("p",null,"用来位置查询api和天气查询api可以自己区申请，结构也很简单，一个search组件，还有当天天气详情与未来七天天气详情。"),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99775fe1a2b542b784c22103c55a05fb~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c1bfda44b8443138fc122d9875c6338~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})]),s("p",null,"search是用了组件库（react-select-async-paginate）有一些简单的配置项"),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18927cebffbf461daf74e0066d739dda~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})]),s("p",null,"还是用了Accordion组件，接口少用的fetchd获取数据"),s("p",null,[s("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e4fa86bb7ba4de8be7716ee41a8cfe8~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})])],-1),d="weather_react",D="weather_react",m="2022-07-26T08:00:00.000Z",u="zh",h="talk",F="3min",g=[{property:"og:title",content:"weather_react"},{property:"og:description",content:"weather_react"},{name:"description",content:"weather_react"}],E={__name:"weather",setup(B,{expose:e}){const o={title:"weather_react",description:"weather_react",date:"2022-07-26T08:00:00.000Z",lang:"zh",type:"talk",duration:"3min",meta:[{property:"og:title",content:"weather_react"},{property:"og:description",content:"weather_react"},{name:"description",content:"weather_react"}]};return e({frontmatter:o}),a({title:"weather_react",meta:[{property:"og:title",content:"weather_react"},{property:"og:description",content:"weather_react"},{name:"description",content:"weather_react"}]}),(i,C)=>{const n=r;return p(),c(n,{frontmatter:o},{default:t(()=>[y]),_:1})}}};export{m as date,E as default,D as description,F as duration,u as lang,g as meta,d as title,h as type};
