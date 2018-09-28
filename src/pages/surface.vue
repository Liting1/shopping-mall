<template>
<div class="surface">
  <div>
    <v-header></v-header>
  </div>
  <div>
    <v-banner :banData="banner"></v-banner>
  </div>
  <div>
    <v-classify :show="true" :items="classify"></v-classify>
  </div>
  <div style="margin-top: 20px">
    <v-compare :data="comp"></v-compare>
  </div>
  <div style="margin-bottom: 5.08474576%">
    <v-goods :goods="goods"></v-goods>
  </div>
  <div>
    <v-desc :surface="surface"></v-desc>
  </div>
  <div>
    <v-bottom></v-bottom>
  </div>
  <div>
    <v-footer></v-footer>
  </div>
</div>
</template>

<script>
import header from '@/components/v-header'
import banner from '@/components/banner'
import classify from '@/components/classify'
import compare from '@/components/compare'
import bottom from '@/components/bottom'
import footer from '@/components/v-footer/m-footer'
import goods from '@/components/goods'
import desc from '@/components/desc'

export default {
  data () {
    return {
      items: [{
        img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2017FourNav-Media-01?context=bWFzdGVyfGltYWdlc3w0NTgwOXxpbWFnZS9wbmd8aW1hZ2VzL2g3Ny9oNWYvOTkwNjMxMzEzNDExMC5wbmd8ZmQ1YWQxMGZjZTUxZTNkZGFhM2Y2NmY5YjkzNjQ5ODBlZGIwMjQ5Nzc2MGU0ZGZiZWM1ZDMzMzM1OTA4OTljOA',
        desc: '全新 Surface Go<br>焕新登场，招行信用卡尊享12期免息',
        price: '2,988',
        buy: '点击预定 >'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2017FourNav-Media-02?context=bWFzdGVyfGltYWdlc3w1MzY0N3xpbWFnZS9qcGVnfGltYWdlcy9oODkvaDcyLzk5MDYzMTMxNjY4NzguanBnfDU0M2Y5YWNkY2QxYmFkYjEzZjdiOTk4MzQ2ZDUxMDc1OTE0YjMzOTNhNTZmNDdjY2MwY2ExNWMwM2ZiNTcyY2Q',
        desc: 'Surface Laptop<br>酷睿 m3 亮铂金机型全新登陆',
        price: '5,588',
        buy: '点击购买 >'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2017FourNav-Media-03?context=bWFzdGVyfGltYWdlc3wzNjU0MnxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaDgyLzk5MDYzMTMxOTk2NDYuanBnfDQ1YTg2ODlkOWY5N2RhNDJjZjVkMjQ4ZmZhYjE4YzA2ZTA0ZjU1MTNmOTM1ZjI4YmM4NWRmNjNlZjg3ZjQ1Zjc',
        desc: 'Surface Book 2<br>性能巨匠，13.5 及 15 英寸可选',
        price: '9,488',
        buy: '点击购买 >'
      }],
      banner: [
        {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018-AMBC-12-Media?context=bWFzdGVyfGltYWdlc3wzNjg5MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDgzL2gyNS85OTIwMzUxNjY2MjA2LmpwZ3wyOTRhZTMyMDY1YWMxOThmMWI5YTk4NjgwNjgxZjBlYTUxYWJmMWQ5ZjZkOGIxZTFjNDlhOWFlOTYwODRlNTZk',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018-AMBC-011-Media?context=bWFzdGVyfGltYWdlc3wxNDM5OTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGU1L2gzYS85OTIwMzUxNjk4OTc0LmpwZ3xiZjQ1NGVhM2FlOTg5MzBiZTJlZTYxNjU5OTA3MDc0N2QyOTRiYjgwZmUwYTI0ODg5ZWExYmI1MGJkYTk1MjQ2',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018-AMBC-03-Media?context=bWFzdGVyfGltYWdlc3wxNDE3NjF8aW1hZ2UvanBlZ3xpbWFnZXMvaGUzL2hhMy85OTIwMzUxNzMxNzQyLmpwZ3wxZDdmYWMzOGUzZGJlNDNlNGVhYzQ2MjVhZWNjYjVjYjQ2YjNlYTkwMGFmMGFhN2VmNmIwYTQxNzA0OTlkOTkw',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018-AMBC-04-Media?context=bWFzdGVyfGltYWdlc3wxMzYwMDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ4L2g1MS85OTIwMzUxNzY0NTEwLmpwZ3w1YTU1ZDE4MTBjMmFlY2U1OWExODlhY2ZhMGJlNDM3NGIyY2MwMmEyMzkyNTZjM2VmODU0NmEyN2ZjNzYwNGE1',
          path: ''
        }
      ],
      classify: {
        product: {
          title: 'Surface 产品',
          list: [{
            name: 'Surface Go',
            path: ''
          }, {
            name: 'Surface Pro',
            path: ''
          }, {
            name: 'Surface Laptop',
            path: ''
          }, {
            name: 'Surface Studio',
            path: ''
          }, {
            name: 'Surface Book2',
            path: ''
          }, {
            name: 'Surface 配件',
            path: ''
          }, {
            name: '微软认证翻新',
            path: ''
          }]
        },
        hot: [{
          img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2017FourNav-Media-01?context=bWFzdGVyfGltYWdlc3w0NTgwOXxpbWFnZS9wbmd8aW1hZ2VzL2g3MS9oZTkvOTkyMDM1MjUxODE3NC5wbmd8NDQ5MDFlZWFmODMxYTIzNzFhNDE4NTFmZTY5ZDZiNTc5ODQ2ODQ2ZDE5MGE5NGNiNjM4YTgzNmI1NWU1NDlmOA',
          desc: '全新 Surface Go<br>焕新登场，招行信用卡尊享12期免息',
          price: '2,988',
          buy: '点击预定 >',
          path: ''
        }, {
          img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2017FourNav-Media-02?context=bWFzdGVyfGltYWdlc3wzMDUyM3xpbWFnZS9qcGVnfGltYWdlcy9oNmYvaDUxLzk5MjAzNTI1NTA5NDIuanBnfGI2MTBkY2YyYzI2YjE0MzU3NjQ1MTgxMjBlZmRhYjYxMmNiM2QzNTg4MzhlZDFlODZiZGI2NzEwMGQ1NjA0OWU',
          desc: 'Surface Laptop<br>酷睿 m3 亮铂金机型全新登陆',
          price: '5,588',
          buy: '点击购买 >',
          path: ''
        }, {
          img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2017FourNav-Media-03?context=bWFzdGVyfGltYWdlc3w5NzEzOXxpbWFnZS9wbmd8aW1hZ2VzL2hiYy9oYTMvOTkyMDM1MjU4MzcxMC5wbmd8OTg0NWFmMDI3ODFhNjNiNjM5YzU1ZGZmNzVhNjAzMThhMTcyOWM2NzUzY2UwZTNhZTAwZWM3MTk5MWQwYmFkMQ',
          desc: 'Surface Book 2<br>性能巨匠，13.5 及 15 英寸可选',
          price: '9,488',
          buy: '点击购买 >',
          path: ''
        }]
      },
      comp: {
        cp: [{
          img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018Media-CompareProduct-01?context=bWFzdGVyfHJvb3R8NTIxNjN8aW1hZ2UvcG5nfGg1NS9oNzAvOTkyMDM1MjYxNjQ3OC5wbmd8NWQyZWM3NjE1NjVmYzc2NGM3MjFkMjQxYzQzOWEwYmExMmRiYTVhZDgwZDVmM2Y5NTEzZWZkNGRkZTk3MGMzOA',
          name: 'Surface Go',
          price: '¥ 2,988 起'
        }, {
          img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018Media-CompareProduct-03?context=bWFzdGVyfHJvb3R8MTcyMzg0fGltYWdlL3BuZ3xoMTIvaDZmLzk5MjAzNTI2ODIwMTQucG5nfGJhYWQ3MTYwZTdhNTY5ZWZhZDgxOTgwNjE4MmI2ODg5NGFhN2Q1OGJhNjdhZjM1MTdkNjc0NzU4MjkzMDI5ZTU',
          name: '全新Surface Pro',
          price: '¥ 4,488 起'
        }, {
          img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018Media-CompareProduct-03?context=bWFzdGVyfHJvb3R8MTcyMzg0fGltYWdlL3BuZ3xoMTIvaDZmLzk5MjAzNTI2ODIwMTQucG5nfGJhYWQ3MTYwZTdhNTY5ZWZhZDgxOTgwNjE4MmI2ODg5NGFhN2Q1OGJhNjdhZjM1MTdkNjc0NzU4MjkzMDI5ZTU',
          name: 'Surface Laptop',
          price: '¥ 5,588 起'
        }, {
          img: 'https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2018Media-CompareProduct-04?context=bWFzdGVyfHJvb3R8MjA5MDkzfGltYWdlL3BuZ3xoNzYvaDA2Lzk5MjAzNTI3MTQ3ODIucG5nfDI3ZjIxZDYzNWU4MjcyZGYwODFmZjZkMmE1Njc2ZjcyODY4YmIxMDY5NzFiOTQ3MWYyYTJmOGU2MDcwYWQ3NjQ',
          name: 'Surface Book 2',
          price: '¥ 9,488 起'
        }],
        cpdata: {
          one: {
            title: '产品综述',
            desc: [
              '赋予便携新能量<br>笔记本电脑的性能，平板电脑的便携性，满足日常工作及娱乐多种需求。<br>· 学生<br>· 日常使用者',
              '更轻薄，更灵活<br>轻薄，便携，全新 Surface Pro 带给你一触难忘的笔记本电脑体验。<br>· 快节奏的专业人士<br>· 设计师，插画师<br>· 摄影师<br>· 忙碌的艺术家<br>· 学生',
              '外观时尚，性能出众<br>融合高像素、高性能、轻薄设计于一身，Surface Laptop 重新定义笔记本电脑。· 学生<br>· 快节奏的专业人士<br>· 日常使用者',
              '性能巨匠<br>四种模式满足更多工作及创意场景，设计精湛，只为满足您对性能的不懈追求。<br>· 视频/影片编辑<br>· 摄影师<br>· 设计师，插画师<br>· 应用/游戏开发人员<br>· 建筑师，工程师'
            ]
          },
          two: {
            title: '续航',
            desc: [
              '最长可达 9 小时<sup>1</sup>',
              '最长可达 13.5 小时<sup>2</sup>',
              '最长可达 14.5 小时<sup>3</sup>',
              '最长可达 17 小时<sup>4</sup>'
            ]
          },
          three: {
            title: '屏幕',
            desc: [
              '10英寸 PixelSense 显示屏',
              '12.3英寸 PixelSense 显示屏',
              '13.5英寸 PixelSense 显示屏',
              '13.5英寸 PixelSense 显示屏'
            ]
          },
          four: {
            title: '分辨率',
            desc: [
              '分辨率：1800 x 1200',
              '分辨率：2736 x 1824',
              '分辨率：2256 x 1504',
              '分辨率：3000 x 2000（13.5英寸）'
            ]
          },
          five: {
            title: '重量',
            desc: [
              '0.552kg 起',
              '0.768kg起',
              '1.252kg 起',
              '1.534kg 起（含键盘）'
            ]
          },
          six: {
            title: '显卡',
            desc: [
              '英特尔 HD 显卡 615',
              'm3：Intel HD 显卡 615',
              'm3：英特尔 HD 显卡 615',
              '13.5英寸（i5）：英特尔 HD 显卡 620 集成 GPU'
            ]
          },
          seven: {
            title: 'CPU',
            desc: [
              '英特尔奔腾金牌处理器 4415Y',
              '第 7 代英特尔酷睿 m3、 i5 或 i7 处理器',
              '第 7 代英特尔酷睿 m3、i5 或 i7 处理器',
              '第 7 代英特尔酷睿 i5-7300U 双核处理器，或第 8 代英特尔酷睿 i7-8650U 四核处理器<br>可流畅运行专业级软件'
            ]
          },
          eight: {
            title: '接口',
            desc: [
              '· 1个 USB-C<br>· microSDXC 读卡器<br>· 耳机插孔<br>· Surface Connect 充电和拓展坞连接端口<br>· 键盘盖端口<br>',
              '· USB 3.0<br>· Micro SD 读卡器<br>· 耳机插孔<br>· Mini DisplayPort<br>· Surface Connect 充电和拓展坞连接端口<br>· 键盘盖端口<br>',
              '· USB 3.0<br>· 耳机插孔<br>· Mini DisplayPort<br>· Surface Connect 充电和拓展坞连接端口<br>',
              '· 2个 USB 3.1 Gen1<br>· 1个 USB-C<br>· 耳机插孔<br>· 全尺寸 SD 读卡器<br>· 2个 Surface Connect 充电和拓展坞链接端口<br>'
            ]
          }
        }
      },
      goods: [{
        img: '',
        title: 'Surface 配件',
        desc: '查看全部'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 特制版专业键盘盖',
        desc: '将 Surface Go 特制版专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。Alcantara 特制版可选灰色、深酒红、灰钴蓝，另有普通版典雅黑可选。',
        price: '¥ 788'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2388-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w0ODM3MXxpbWFnZS9wbmd8aW1hZ2VzL2g5Ny9oNjUvOTg5NzQwMTg0Mzc0Mi5wbmd8YmY2NGQ0Nzg3ZDg2N2I3NTE2Y2ZlM2QzMjFiYTJhNTI5NGRhOWVhZWMxOTVkYzU5MzE2Mjg5NjJkM2JmOGRkNw',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 988'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2393-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wzMTQwMHxpbWFnZS9wbmd8aW1hZ2VzL2g2My9oZjAvOTg5NzM5NTE5MTgzOC5wbmd8NzIzMmRiMDA5N2RiZjY0ZTRkMDUyMzI0OWUxZjMxODExZGRiODcwMTVmYWU3NGY0ZjY2ZGRlZDE0Yjk3MzZjYw',
        title: '微软 Surface 便携鼠标',
        desc: '全新 Surface 便携鼠标，轻巧，便携，无线蓝牙连接，经重新设计的滚轮为您带来顺畅的滚动体验。亮铂金、深酒红、灰钴蓝三种颜色可供选择。',
        price: '¥ 288'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC1976-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w2NTM3fGltYWdlL3BuZ3xpbWFnZXMvaDVlL2gxMi85NzI5ODc0MDAxOTUwLnBuZ3wzMTEyOGM2N2FjZjk3NmMxN2MxNGJiODM4MzUzNDJiNTBhMDQ0ZTI2MWM4MGMxODg2ZDFhNmQ4MGVjN2Y0ZTFl',
        title: '微软 Surface 触控笔（新）',
        desc: '微软Surface触控笔（新），全新升级 4,096 级压力感应，反应更灵敏，新增倾斜功能，带来自然的书写绘画体验。兼容 Surface Studio、Surface Laptop、Surface Go 等多款 Surface 产品。',
        price: '¥ 788'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 728'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 788'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 788'
      }],
      surface: [{
        txt: '为您带来更高生产力的设备——Surface，将重新定义您的工作与娱乐方式。微软Surface以其富有创意的科技，期待着以一种全新的方式改变您的生活，带来新的乐趣，助您成就更多。',
        bool: false
      }, {
        txt: '全新的 10 英寸 Surface Go 针对日常工作和娱乐而设计，为你提供了笔记本电脑的卓越性能、平板电脑的出色便携性、长时间电池续航、令人惊叹的触摸屏以及你熟悉的 Windows 和 Office 体验。无论是电子邮件、浏览网页，还是观看喜爱的电视节目来进行放松，Surface Go 始终伴你左右。Surface Go 内置高清摄像头及多种接口，其中包括强大的 USB-C 端口。更小、更轻的 Surface Go，你的全能搭档。',
        bool: true,
        link: 'Surface Go：'
      }, {
        txt: '全新 Surface Pro 是一款优秀的笔记本电脑，兼顾工作室和平板电脑的通用性。它拥有惊艳的高对比度、低炫光显示屏，长达 13.5 小时的电池续航时间，大内存，高速处理器，并且预装 Windows 10 操作系统，更有着时尚、纤薄、便携的外观。选择 Surface Pro，它能够与新 Surface 触控笔、Surface Dial 和 Office 默契协作，还提供完整的 Windows 体验，包括 3D 制作工具。',
        bool: true,
        link: 'Surface Pro：'
      }, {
        txt: '一款与众不同的笔记本电脑，Surface Laptop 拥有优质的电源、出色的便携性以及精致的外观。它薄至14.47mm，轻至1.25kg，采用丰富的同色系色彩组合设计，更有典雅的 Alcantara 布艺键盘增光添彩。第 7 代英特尔酷睿处理器让它出色胜任多任务处理工作，13.5 英寸 PixelSense 显示屏为您呈现逼真的色彩。除支持 Surface 触控笔、屏幕触控、Surface Dial 和 Windows Ink 外，Surface Laptop 还采用了 Microsoft 创新技术，包括 Windows Hello、Microsoft Office 和 Cortana 等。',
        bool: true,
        link: 'Surface Laptop：'
      }, {
        txt: '全新的一部性能强劲的笔记本、功能强大的平板电脑和便携的工作室，满足您的工作和创作需求。Surface Book 2 配备英特尔双核/高速四核处理器，运行速度更快。全新 Surface Book 2 续航时间长达17小时，性能较原来的 Surface Book 大幅提升。可高速运行专业级桌面软件，如 SOLIDWORKS、Autodesk Revit 和 Adobe Premiere Pro。NVIDIA GeForce 独立 GPU 带来艳丽细腻的画质，让渲染更加迅速，畅爽应对高强度的游戏需求。强劲显卡性能令全新 Surface Book 2 在 Surface 产品家族中备受瞩目。',
        bool: true,
        link: 'Surface Book 2：'
      }, {
        txt: '获得一台优美、强大、拥有先进技术的一体机。Surface Studio 配备 28 英寸 PixelSense 触控显示屏，192 dpi 分辨率，以及几乎可以将屏幕至于任何角度的铰接系统，这是一台助力创想全过程的设计设备。Surface Studio 配备第 6 代英特尔酷睿 i5/i7 处理器，1TB/2TB 高速混合硬盘，4个 USB 3.0 端口（包括一个高功率端口），双麦克风，带杜比音效的 2.1 扬声器以及 Surface 触控笔、键盘和鼠标，您可以随心、超越。',
        bool: true,
        link: 'Surface Studio：'
      }, {
        txt: '作为您喜爱的 Surface 设备的好搭档，Surface Dial 是一款创新的独立滚轮，让您可以轻松、流畅地滚动和控制各种功能。从访问您收藏的快捷方式和音量控制，到使用您强大的绘图和图像编辑工具，Surface Dial 均能够帮助您找到比以往更多的途径展现更多创造力。',
        bool: true,
        link: 'Surface Dial：'
      }, {
        txt: 'Surface Book增强版为运行各种专业级应用软件而设计，如SOLIDWORKS 3D CAD、AutoCAD Revit 和 Adobe Premiere Pro——您可以随时随地运行。Surface Book 增强版预装全新 Windows 10 专业版操作系统，让您轻松享受持续更新的安全性。此外，Surface Book 增强版具有 13.5 英寸 PixelSense 显示屏，屏幕分辨率高达 3000 x 2000，屏幕宽高比 3:2。增强版同 Surface Book 一样，屏幕可灵敏触控，支持使用 Surface 触控笔，并且带有键盘，您可以以您喜欢的方式使用它。Surface Book 增强版支持视频播放最长可达16小时，助您轻松完成更多。',
        bool: true,
        link: 'Surface Book增强版：'
      }, {
        txt: 'Surface Book 重新定义了笔记本电脑，性能强大且功能多样。Surface Book搭载第6代英特尔酷睿i5、i7处理器和高内存配置，可选独立显卡，将带给您流畅的笔记本电脑体验。Surface Book可提供长达 12 小时的电池续航时间，源源不断为您带来创作灵感。可运行您需要的多种专业级软件，性能强劲。Surface触控笔的手写体验也非常流畅，如同使用圆珠笔在纸上书写。无论您喜爱编辑照片、信手涂画，或是有设计、速写、制造方面的苛刻任务，Surface Book将助您突破局限。',
        bool: true,
        link: 'Surface Book：'
      }, {
        txt: '可以替代笔记本电脑的平板电脑。Surface Pro 4性能卓越且功能多元化，可满足专业人士、创意工作者等的使用需求。Surface Pro 4可以执行艰巨的任务，且更加轻巧便携。只需使用多重定位Kickstand支架和专业键盘盖，即可将 Surface Pro 4 由平板电脑转换为笔记本电脑。您还可使用Surface触控笔随时写下笔记和创意。Surface Pro 4搭载的第6代英特尔酷睿m3/i5/i7处理器不仅性能更加强大，而且更加安静，运行时产生的热量更少，并且比以往更加高效。正是这种出色的性能以及长达9小时的较强电池续航能力，让Surface Pro 4真正成为您的移动工作站',
        bool: true,
        link: 'Surface Pro 4：'
      }, {
        txt: '探索我们整个 Surface 系列的设备和配件，包括人体工学键盘和 Surface 鼠标——发现 Surface 如何帮助您以全新的方式工作、休闲、设计和创作。如有产品相关问题，请联系我们的客服人员，我们将帮助您选择适合您的设备。',
        bool: false
      }, {
        txt: 'Surface Pro 4与Surface Book 系列产品现已加入微软教育优惠。更多Surface优惠可前往微软官方商城优惠信息页面进行查看。加入微软官方商城邮件订阅计划，还有机会收到微软官方商城优惠代码。',
        bool: false
      }]
    }
  },
  components: {
    'v-header': header,
    'v-banner': banner,
    'v-classify': classify,
    'v-compare': compare,
    'v-bottom': bottom,
    'v-footer': footer,
    'v-goods': goods,
    'v-desc': desc
  }
}
</script>

<style>
</style>
