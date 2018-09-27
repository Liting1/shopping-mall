<template>
<div class="desc">
  <div class="container">
    <div class="desc-img">
      <img width="100%" src="https://imgazure.microsoftstore.com.cn/_ui/images/category/surface/ad_surfacepro5_1180.png">
    </div>
    <div class="desc-content">
      <div class="desc-content-inst">
        <h3>注释说明：</h3>
        <p v-for="(item, index) in inst" :key="item.id">[{{index + 1}}] 视频播放时间最长可达 {{item}} 小时。电池续航时间会因设置、使用及其他因素有显著差异。</p>
      </div>
      <div class="desc-content-box">
        <h1>微软Surface</h1>
        <ul>
          <li v-for="item in surface" :key="item.id" :class="{'li': item.bool}"><a href="#" v-if="item.bool">{{item.link}}</a>{{item.txt}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
<<<<<<< HEAD
  data () {
    return {
      inst: [9, 13.5, 14.5, 17],
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
=======
  props: ['surface'],
  data () {
    return {
      inst: [9, 13.5, 14.5, 17]
>>>>>>> ...
    }
  }
}
</script>

<style scoped lang='stylus'>
.desc
  .desc-img
    margin-bottom: 6%
  .desc-content
    .desc-content-inst
      h3
        font-size: 16px
        line-height: 24px
        color: #333
        font-weight: bold
      p
        font-size: 12px
        color: #666666
        line-height: 24px
    .desc-content-box
      margin-top: 70px
      margin-bottom: 70px
      h1
        font-size: 20px
        line-height: 30px
        font-weight: normal
        color: #1a1a1a
      ul
        li
          font-size: 16px
          line-height: 24px
          color: #1a1a1a
          margin-bottom: 20px
          a:hover
            text-decoration: underline
        .li:before
          content: ' • '
</style>
