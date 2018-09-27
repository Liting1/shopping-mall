<template>
<div id="index">
  <div>
    <v-header></v-header>
  </div>
  <div class="content">
    <div>
<<<<<<< HEAD
      <v-banner></v-banner>
    </div>
    <div class="pc" v-if="show">
      <div style="margin-bottom: 2.96296296%;">
        <v-classify :show="false" :items="items"></v-classify>
      </div>
      <div>
        <v-recommended></v-recommended>
      </div>
    </div>
    <div class="m" v-else>
      <v-mClassify style="margin-bottom: 12.1875%;"></v-mClassify>
      <v-mClassify2></v-mClassify2>
    </div>
    <div>
      <v-cp-one></v-cp-one>
    </div>
    <div class="games" style="margin-bottom: 45px">
      <v-game></v-game>
=======
      <v-banner :banData="banner"></v-banner>
    </div>
    <div class="pc" v-if="show">
      <div style="margin-bottom: 2.96296296%;">
        <v-classify :show="false" :items="classify"></v-classify>
      </div>
      <div>
        <v-recommended :items="recommend"></v-recommended>
      </div>
    </div>
    <div class="m" v-else>
      <v-mClassify style="margin-bottom: 12.1875%;" :items="mclassify"></v-mClassify>
      <v-mClassify2 :items="ads"></v-mClassify2>
    </div>
    <div>
      <v-cp-one :items="cp"></v-cp-one>
    </div>
    <div class="games" style="margin-bottom: 45px">
      <v-game :items="hot"></v-game>
>>>>>>> ...
    </div>
    <div>
      <v-service></v-service>
    </div>
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
import mClassify from '@/components/classify/m_classify'
import mClassify2 from '@/components/classify/m_classify2'
import recommended from '@/components/recommended'
import cpOne from '@/components/cp/cp-one'
import game from '@/components/game'
import service from '@/components/service'
import bottom from '@/components/bottom'
import footer from '@/components/v-footer/m-footer'
import { mapState } from 'vuex'
export default {
  data () {
    return {
<<<<<<< HEAD
      items: [{
        img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017FourNav-Media-01?context=bWFzdGVyfGltYWdlc3wyOTMzNXxpbWFnZS9wbmd8aW1hZ2VzL2g3Yi9oMDgvOTkwNDY1NjkwODMxOC5wbmd8YWFiOTRlNzVlYTc3MWU5NDIyMmYzYzhmMzQ4MThiYzA5OTgwNGJiMmFjNDNiZDQ5M2I5N2EzZWQ3MDJjMTlkMg',
        desc: 'Surface Go 焕新登场，赋予便携新能量，更多选择，尽在 Surface 家族',
        price: '',
        buy: '查看详情 >'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017FourNav-Media-02.jpg?context=bWFzdGVyfGltYWdlc3wyNjU1N3xpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDQwLzk5MDUwOTY2MjIxMTAuanBnfDNhZDRjOGU3NWFlZjM1MmQwMjYzZDhlNTc3NmRjMGFlZmE0NmU1M2ExYWExNGNmODM2ZjhlNTIwNzk1Y2YwZWI',
        desc: 'Xbox One S 1TB 动作冒险套装直降优惠，￥1,899 起',
        price: '',
        buy: '立即购买 >'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017FourNav-Media-03?context=bWFzdGVyfGltYWdlc3wzNzUzfGltYWdlL3BuZ3xpbWFnZXMvaGEyL2gzMy85OTA0NjU2OTczODU0LnBuZ3w0ZGZiYmJiNTBiMWM4ZmE4OGNmMzU1NTM0MGY4ZTkwMTMwZTgxMTM2YzAxZGJmNDU3YzlkYjllZTE0ZDdlY2Zh',
        desc: '兼容 PC 及 Mac，独享更多高效新功能，订阅期内享持续更新',
        price: '',
        buy: '立即购买 >'
      }]
=======
      banner: [
        {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Banner-Media-02?context=bWFzdGVyfGltYWdlc3wxMzYwMDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDA3L2g3OS85OTE2NTI2ODg2OTQyLmpwZ3xjOGFkYjVkNjA1Yzg1MWFlNzExMjM3ZTc5M2UwYTk2MWZkNjM5ZGU0N2JlY2EyZTkwNGM5YzJlYjkwYjc4N2Q0',
          path: 'goods/1'
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Banner-Media-03?context=bWFzdGVyfGltYWdlc3wxMDU5NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDljL2hhNS85OTIwMzQ5NTAzNTE4LmpwZ3xkYzBiZmU5YmMyZmE4NzExNjU0NTYwYzRmZmU3MzI0NDdjYjMxNzRlOTk5NjBkYTJhMDUwZjk3N2I2Y2JiNjM2',
          path: 'goods/2'
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Banner-Media-04?context=bWFzdGVyfGltYWdlc3wxMTYzMTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g1ZC85OTE2NTI2OTUyNDc4LmpwZ3wwYjg3MzkxNDZhN2IwMjkyZjRkOTM2Yjk5MGExMTEzYmNlNjQ5OTg4YmM0MjA3ZjAzZGNmMDFkOWE5YmM2M2Yw',
          path: 'goods/3'
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/Acc-XboxCat-4-Media?context=bWFzdGVyfGltYWdlc3wzMTk2NDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2g2YS85OTE3NTA0MzIzNjE0LmpwZ3wzZDQwNmJmMjY3MmVjZmYxMGUwNjdjMjVlY2I2OTM3YjU2NTM4ZThlYjQ3NzE4MTA2MmQ3NmIyNWVhY2RkYWRl',
          path: 'goods/4'
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
          img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017FourNav-Media-01?context=bWFzdGVyfGltYWdlc3wyOTMzNXxpbWFnZS9wbmd8aW1hZ2VzL2g3Yi9oMDgvOTkwNDY1NjkwODMxOC5wbmd8YWFiOTRlNzVlYTc3MWU5NDIyMmYzYzhmMzQ4MThiYzA5OTgwNGJiMmFjNDNiZDQ5M2I5N2EzZWQ3MDJjMTlkMg',
          desc: 'Surface Go 焕新登场，赋予便携新能量，更多选择，尽在 Surface 家族',
          price: '',
          buy: '查看详情 >',
          path: ''
        }, {
          img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017FourNav-Media-02.jpg?context=bWFzdGVyfGltYWdlc3wyNjU1N3xpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDQwLzk5MDUwOTY2MjIxMTAuanBnfDNhZDRjOGU3NWFlZjM1MmQwMjYzZDhlNTc3NmRjMGFlZmE0NmU1M2ExYWExNGNmODM2ZjhlNTIwNzk1Y2YwZWI',
          desc: 'Xbox One S 1TB 动作冒险套装直降优惠，￥1,899 起',
          price: '',
          buy: '立即购买 >',
          path: ''
        }, {
          img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017FourNav-Media-03?context=bWFzdGVyfGltYWdlc3wzNzUzfGltYWdlL3BuZ3xpbWFnZXMvaGEyL2gzMy85OTA0NjU2OTczODU0LnBuZ3w0ZGZiYmJiNTBiMWM4ZmE4OGNmMzU1NTM0MGY4ZTkwMTMwZTgxMTM2YzAxZGJmNDU3YzlkYjllZTE0ZDdlY2Zh',
          desc: '兼容 PC 及 Mac，独享更多高效新功能，订阅期内享持续更新',
          price: '',
          buy: '立即购买 >',
          path: ''
        }]
      },
      recommend: [
        {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Reference-00?context=bWFzdGVyfGltYWdlc3w0NDA5N3xpbWFnZS9wbmd8aW1hZ2VzL2g3OS9oYjgvOTkwNDY1NzM2NzA3MC5wbmd8YzViZTE5ZjQwMWI2OTFjMTg3OWVhYzA4NmZkOTQ0NTY3NWUyZTBmM2RjNmYyMzRlMjQ1OWZjNWRkZjNhYjlkMg',
          name: '全新 Surface Go',
          desc: '赋予便携新能量',
          price: '￥2,988',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Reference-01?context=bWFzdGVyfGltYWdlc3wxMTY0MjV8aW1hZ2UvcG5nfGltYWdlcy9oNTkvaDhkLzk5MjAzNTA4Nzk3NzQucG5nfDIxMzRjNzhjOTM5YmM1OTczOWFmNjc2ZjZiZjFlYmQ2OGRkOWRjMjBkOTJkMzdlYjU3NmFkZWY2NjI3ZDBjNTI',
          name: 'Surface Book 2',
          desc: '性能巨匠，超越你对笔记本的想象',
          price: '￥9,488',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Reference-02?context=bWFzdGVyfGltYWdlc3wxMDI1NTJ8aW1hZ2UvcG5nfGltYWdlcy9oYzkvaDgzLzk5MDQ2NTc0MzI2MDYucG5nfGJhMzA0Y2M0Y2ZhYWQwYWUwNDY4OTNiNWE4ODJkMTkwNmM3NmIxYWQ0NTI1YTMzZjRhZTVmNjkwMjE1NjcyNzM',
          name: 'Surface Pro',
          desc: '全新 i5/128GB 含特制版键盘盖机型',
          price: '￥7,288',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Reference-03?context=bWFzdGVyfGltYWdlc3w3Njk1MHxpbWFnZS9wbmd8aW1hZ2VzL2g1ZS9oM2YvOTkwNDY1NzQ2NTM3NC5wbmd8MDc0ZDU0ZGY3ZmY4Y2MxODc2OTVmOTEzM2MwZTBkZTFmOTBhNjU0ZWRmYzg3MjMxNTkzYmU2YzdlMjk0M2NmOQ',
          name: 'Surface Studio',
          desc: '为灵感而生，让创作自如',
          price: '￥25,988',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017Reference-04?context=bWFzdGVyfGltYWdlc3w3MzgwM3xpbWFnZS9wbmd8aW1hZ2VzL2hjZS9oYjUvOTkwNDY1NzQ5ODE0Mi5wbmd8MDMyMWI1NmNmYTE0ODM5OWJjZWY1ZTMyMTMyNjgzMzc5NDdhNzhiY2I2YTJmYmRiOTRjMTRiMDczZTBjZDc0Nw',
          name: 'Microsoft HoloLens',
          desc: '混合现实：世界就是你的画布',
          price: '￥23,488',
          path: ''
        }
      ],
      mclassify: [
        {
          name: 'Surface',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-01?context=bWFzdGVyfGltYWdlc3w5NzQzfGltYWdlL3BuZ3xpbWFnZXMvaDk3L2hlYy85OTA0NjU1MzM1NDU0LnBuZ3xiODZjMmM2MTVlMjZlYmU2MGMwMDI3YzYzYTMzN2M1ZmUzYzJlMDM3ODM1MWU0ZmE3MDY1OGIyM2U5YzQwM2Ji',
          path: ''
        }, {
          name: 'HoloLens',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-02?context=bWFzdGVyfGltYWdlc3wyNjAyfGltYWdlL3BuZ3xpbWFnZXMvaDk1L2gwOC85OTA0NjU1MzY4MjIyLnBuZ3xkY2NhNTUyNDAzN2YyOTdhNGNkODRhNDU2ZDJiZTk5MzcxMzA0OGRjN2JjYzhmMmE0MzEyZDMyODM5MjdmM2Fi',
          path: ''
        }, {
          name: 'Xbox',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-03?context=bWFzdGVyfGltYWdlc3wyODE4fGltYWdlL3BuZ3xpbWFnZXMvaDA4L2g5NS85OTA0NjU1NDAwOTkwLnBuZ3wzZTkzYjUxNjg1MjUyMGRkMzVjYTFlYmU0YzZjMDE2OGQ2YWRmYjRlZGM2MDFiYWM1YWRkNWU2M2JiZjhmMWI4',
          path: ''
        }, {
          name: 'Office',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-04?context=bWFzdGVyfGltYWdlc3w0Mjg4fGltYWdlL3BuZ3xpbWFnZXMvaDdiL2g3My85OTA0NjU1NDMzNzU4LnBuZ3w2ZmViZGZiNGJjZDRmMzEwYTJiZjJlZDNmODUyOTFjMzdiNzE3ZDlmZGNjMzk0YTAwMDUzOTU0MzE5ZjA4YjQy',
          path: ''
        }, {
          name: 'Windows',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-05?context=bWFzdGVyfGltYWdlc3wxNzIwfGltYWdlL3BuZ3xpbWFnZXMvaGIxL2g4MS85OTA0NjU1NDY2NTI2LnBuZ3wwMTUyNTg4MjUzZDM4NjNjMmRjYTI5OTJjMzY1M2ZkNWY3MzFmMzEyYzFkY2ZkZDY4YTlmN2EzMzNlYjUxY2Uy',
          path: ''
        }, {
          name: '游戏',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-06?context=bWFzdGVyfGltYWdlc3wyNjMwfGltYWdlL3BuZ3xpbWFnZXMvaDc2L2g0MS85OTA0NjU1NDk5Mjk0LnBuZ3xmNWYxMDg3ZDQwOGIwZmNjZDFiMzM3NTVkNDkwNDgxYThiZDBkNTRkNTE4OWYzYjQxZDJmMGQyMTgwZWQ4MjFm',
          path: ''
        }, {
          name: '电脑与平板',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-07?context=bWFzdGVyfGltYWdlc3wzNDY3fGltYWdlL3BuZ3xpbWFnZXMvaDc1L2hhYS85OTA0NjU1NTMyMDYyLnBuZ3w4MzU4NDFlZWE0NzRlNWIxMTU0NTc4MDdkYzdhMzMwZjY0YmZhNGU5ZGQ2MWU2YWNlZDJjNjBhY2MxNjVkNjUx',
          path: ''
        }, {
          name: '配件',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-08?context=bWFzdGVyfGltYWdlc3wzNDM2fGltYWdlL3BuZ3xpbWFnZXMvaDdkL2hmOC85OTA0NjU1NTY0ODMwLnBuZ3w1ZDUzOWE4Y2JhMDg4ZTE1Mjc3NDM3MTAxZDY4ZWM0NjQ0MzlkNTA3ZjMzMGE0ZjBjNjAzYzA5OTJkZTE5YmJm',
          path: ''
        }, {
          name: '以旧换新',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-09?context=bWFzdGVyfGltYWdlc3w1MzF8aW1hZ2UvcG5nfGltYWdlcy9oYTUvaDM3Lzk5MDQ2NTU1OTc1OTgucG5nfDRiNjcxZGMyYWY2YTQyYjVkNzU2NWU1MDcyYjQ4YzJmMjEzMzY0ZWJjMjk1NmQ2N2E0Y2M3Y2Y0MjBkMDZmYjU',
          path: ''
        }, {
          name: '教育优惠',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-10?context=bWFzdGVyfGltYWdlc3w1OTJ8aW1hZ2UvcG5nfGltYWdlcy9oNTkvaDMxLzk5MDQ2NTU2MzAzNjYucG5nfDM0OWY0OTZjODBjMWM4YzUxOTBiYmVlYjNkMDg5NjNmZDlmYWI4Y2NjOGUyNDdkODU5MjI0Y2ExOTI4ZDA5Mzg',
          path: ''
        }, {
          name: '优惠专区',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-11?context=bWFzdGVyfGltYWdlc3w1NzR8aW1hZ2UvcG5nfGltYWdlcy9oZDMvaGMzLzk5MDQ2NTU2NjMxMzQucG5nfGVkY2M3ZGUxNWMwZjkyYTM1M2NkMGJkM2JjMjU0ZWYxYzc0ZjA0MzI3YTc4MTc1MjlkOGVmMGZlNTBiNTgzOTU',
          path: ''
        }, {
          name: '商务专区',
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-12?context=bWFzdGVyfGltYWdlc3w1NjB8aW1hZ2UvcG5nfGltYWdlcy9oYzUvaDY2Lzk5MDQ2NTU2OTU5MDIucG5nfDM0MTEzODY0OGE1YWQ1ZTg1OTNhZDViMmVkN2VkNTRhYzJjOWRiZWQzZDY1NTUyNjc2NmVjNmM3Zjc0OTUyZmQ',
          path: ''
        }
      ],
      ads: [
        {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-01?context=bWFzdGVyfGltYWdlc3w2MjUwfGltYWdlL3BuZ3xpbWFnZXMvaGFiL2hkZS85NzE4MTAyNzIwNTQyLnBuZ3wyZmQyNzQ2MDQxMDQ3NDc3M2FjZmYwOTQ3NWYyNzRlNjZhYTk1NThlOWM0ODE5YTdjOTIwOTk5MjkxOTBkNDlh',
          name: 'Surface Pro',
          desc: '随心所欲<br>百变菁英',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-02?context=bWFzdGVyfGltYWdlc3w2OTM2fGltYWdlL3BuZ3xpbWFnZXMvaDgxL2gxNi85NzE4MTAyNzUzMzEwLnBuZ3w1OWMyZDY4NjcyZTcyMmZkNDQyNzdmMmUyNTUzNGFiYjYxZTUxMzg1ZmQ2YWE1MGRmMzhhNzJjOTFmOWE4MDRl',
          name: 'Surface Laptop',
          desc: '独具匠心<br>彰显自我',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-03?context=bWFzdGVyfGltYWdlc3w1NDc3fGltYWdlL3BuZ3xpbWFnZXMvaDU2L2hhYS85NzE4MTAyNzg2MDc4LnBuZ3w2NjE5MDcwZTljNTFjYTNhNzllMTliMjQwZDI0MTQ1ODE4ZGUyNWMzMGYyNzdkZWNhMDc3NzUzZjJlZDE1YzE5',
          name: 'Surface Studio',
          desc: '为灵感而生<br>让创作自如',
          path: ''
        }, {
          imgUrl: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-04?context=bWFzdGVyfGltYWdlc3w0NTcyfGltYWdlL3BuZ3xpbWFnZXMvaDYxL2hhNS85NzE4MTAyODE4ODQ2LnBuZ3w1Y2I3YmY3NGIzNzQyZGUzOWUwZWNlZmVkMTgwYWRhNmIzOTU5MDA0M2IyMjlkNTRjOTk0M2I5NjQzOTdlMDQ5',
          name: 'Hololens',
          desc: '让科学幻想<br>变成科学现实',
          path: ''
        }
      ],
      cp: {
        surface: {
          title: 'Surface',
          cp: [{
            title: '卓越生产力，非凡创造力<br>Surface 全明星系列震撼登陆',
            desc: '查看更多',
            price: '',
            bgimg: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017SurfaceGuide-Media?context=bWFzdGVyfGltYWdlc3wxNjc3MjJ8aW1hZ2UvcG5nfGltYWdlcy9oNDMvaDVhLzk5MDQ2NTcwMDY2MjIucG5nfDI3NTU1YmE4MjZmMWVlNzI1ODI1MzVjMDkwNDYyYzU1NzRlNDQ4MWI0MmU4MTI5MWU5NWYxZWQwMTE1NjJjNDI',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductSurface-01?context=bWFzdGVyfGltYWdlc3wxMTcxMDF8aW1hZ2UvcG5nfGltYWdlcy9oZjgvaDQ5Lzk5MDQ2NTc3Mjc1MTgucG5nfDEyNmU0ZWVkYjRmMDE3NmIwNGUzZGI1ZWNlNmU5ODRkODkwMzc2ZDIzM2U3NzdkZGU1YzYyOWYxMzZhNzRlOGY',
            title: '全新 Surface Go',
            desc: '更小、更轻，适用于日常工作及娱乐',
            price: '¥ 2,988',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductSurface-02?context=bWFzdGVyfGltYWdlc3wxOTIzNTR8aW1hZ2UvcG5nfGltYWdlcy9oZGYvaDdiLzk5MDQ2NTc3NjAyODYucG5nfDgxNDM1OWI4YTliYzlmNWE4YTY3ZmVkY2EyYTUxZmFmMzdmMjU4NTQ3YTdmYmZkNjE4NzRhMzQwYzhhMTAzYTc',
            title: 'Surface Laptop',
            desc: '外观时尚，性能出众',
            price: '¥ 5,588',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductSurface-03?context=bWFzdGVyfGltYWdlc3wxMDQyNDR8aW1hZ2UvcG5nfGltYWdlcy9oZjQvaDhlLzk5MDQ2NTc3OTMwNTQucG5nfDk3MTg5OWIxOGQzZGJiMjE2NGQ2OTI0MzI2NmRmYjk4MTYyNGZhZTIxMWE0YTRhMmZjN2EyZmRjOTZmZGVkYzI',
            title: 'Surface Studio',
            desc: '你的创意工作室',
            price: '¥ 25,988',
            path: ''
          }]
        },
        office: {
          title: 'Office',
          cp: [{
            title: '专注高效办公20年<br>选择Office，<br>成就更高生产力',
            desc: '查看更多',
            price: '',
            bgimg: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017OfficeGuide-Media?context=bWFzdGVyfGltYWdlc3wxMzQ1NTh8aW1hZ2UvcG5nfGltYWdlcy9oNjEvaDI4Lzk5MjAzNTA1MTkzMjYucG5nfGJlZDUxN2I5ZGZlOGZkZjhmODJjMjU4MTkzNDBmNWJjYTQyMTI0OTk5MjUzMjQ5N2U0NmYzYzhlMTJmOTI3ZDg',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductOffice-02?context=bWFzdGVyfGltYWdlc3wyNzYwMHxpbWFnZS9wbmd8aW1hZ2VzL2gyMy9oMmYvOTkwNDY1NzYyOTIxNC5wbmd8YmFjYzcyMWE5ZDgwOWM4NzRjMDY2MmU5N2UzNWE5ZWQxZTVkZmU3YThjNDRlODVkYzE3OTFiYWVhYjMxMGZjMg',
            title: 'Office 365 个人版',
            desc: '可在多个设备上安装，享持续更新',
            price: '¥ 398',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductOffice-02?context=bWFzdGVyfGltYWdlc3wyOTU0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmZi9oZGMvOTkyMDM1MTE0MTkxOC5wbmd8YzFiZmYzNGZjMjAxNWJkMDdlYzhlMGE3MjVjYzNlNTRhOWM4MTE5NzYyNWUyZmRiODFjZmNhYmVjM2IxZThjNg',
            title: 'Office 365 家庭版',
            desc: '外观时尚，性能出众',
            price: '¥ 498',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductOffice-03?context=bWFzdGVyfGltYWdlc3wyNjc4N3xpbWFnZS9wbmd8aW1hZ2VzL2g0YS9oNWEvOTkwNDY1NzY5NDc1MC5wbmd8YmI4NGZjODE5MjQxNWM4MWJkYzA1MTBmNmM5OGMzZTI4NzNkYTQ5YTFiNzA2Mjg3MmJiNWJhODA0NDMzNTE3YQ',
            title: 'Office家庭和学生版2016 for Mac',
            desc: '你的创意工作室',
            price: '¥ 748',
            path: ''
          }]
        },
        xbox: {
          title: 'Xbox',
          cp: [{
            title: '更纤薄、更时尚、更高清<br>打造畅快游戏体验',
            desc: '查看更',
            price: '',
            bgimg: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017XboxGuide-Media?context=bWFzdGVyfGltYWdlc3wyMjE5MTJ8aW1hZ2UvcG5nfGltYWdlcy9oNTgvaDdjLzk5MDQ2NTcwNzIxNTgucG5nfDI1YTY4OGFjNWNjODZjOTVmNmJlYWM0ZTg0ZDNmODA2ZmQzNTE0ZjdhOTQwZmRhMjgwMDlhYTEzZTJhZmI0OTM',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductXbox-01?context=bWFzdGVyfGltYWdlc3wxNDE2NjN8aW1hZ2UvcG5nfGltYWdlcy9oYzQvaGMwLzk5MDQ2NTc4MjU4MjIucG5nfDY4ZGQ2NWU0YzYxYTc4YzFiNjFhZjg5YWQzYzFmNjJlMDY2NDNhZjU5YTJhMmQzMDA4ZGE2ZDU1OTYwODQ4Zjg',
            title: 'Xbox One S 1TB 家庭娱乐游戏机',
            desc: '4K UHD高清，HDR高动态范围效果',
            price: '¥ 1,899',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductXbox-02?context=bWFzdGVyfGltYWdlc3w1MDUyN3xpbWFnZS9wbmd8aW1hZ2VzL2gxMi9oMmEvOTkyMDM1MTMzODUyNi5wbmd8MTA0MzEwOWJkMTA2Y2M4MjRkMzE4NzBkMjFhYWExZjgzNDVjZGViZGEzZTQ4NjdjMDY1ZmE4ZGZiM2MxMDZlMg',
            title: 'Xbox One X 1TB 家庭娱乐游戏机',
            desc: '真 4K 沉浸式体验，感受真实的力量',
            price: '¥ 3,899',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductXbox-03?context=bWFzdGVyfGltYWdlc3wxNDUyMTF8aW1hZ2UvcG5nfGltYWdlcy9oZDgvaDE1Lzk5MDQ2NTc4OTEzNTgucG5nfDYyMjdlOTM4OGJiZDM2YWVjM2YzNmFmODU3ODk0NWUzYjBhZTQ2MzU4MjZkYTczZDZjOGY5Mzk5ZDU2NjQ5Yjk',
            title: 'Xbox 无线控制器',
            desc: '流线设计，难忘触感，游戏更酣畅',
            price: '¥ 369',
            path: ''
          }]
        },
        computer: {
          title: '电脑与配件',
          cp: [{
            title: '精选品牌<br>Windows 10电脑与配件',
            desc: '查看更多',
            price: '',
            bgimg: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ComputerGuide-Media?context=bWFzdGVyfGltYWdlc3wxNzA3NjR8aW1hZ2UvcG5nfGltYWdlcy9oNWYvaGQzLzk5MDQ2NTcxMDQ5MjYucG5nfDM0MDU3NTE2MjZlMmE4OTk1N2Y2NDNlMWFiNDVjYzY0Y2M3ZmE4ODgxMzU0ODg5YzZjZmE5Y2U1YjViOGZmMjI',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductComputer-01?context=bWFzdGVyfGltYWdlc3w3NjI5MnxpbWFnZS9wbmd8aW1hZ2VzL2g5NS9oZmEvOTkwNDY1NzUzMDkxMC5wbmd8MzNkNzMzYjU3Y2Y5NzY1ZTI4YmEwYTI2NzVhNjQ3MTUyNzY4YzIzNTdkYmRiYThlZDFkMTg0ODRiY2QxN2YzZg',
            title: '微软精准鼠标',
            desc: '体工学设计，自定义侧键，支持 USB 和蓝牙连接，最多同时连接 3 台电脑',
            price: '¥ 2,988',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductComputer-02?context=bWFzdGVyfGltYWdlc3wxNDYxOTl8aW1hZ2UvcG5nfGltYWdlcy9oYmQvaDM5Lzk5MDQ2NTc1NjM2NzgucG5nfDgzZmNiYTQzYzRiMWQ0ZjQxNGFkNGIxNjQxYmVlMDc1NWVhOGNlYzVjYTA5YjFiYTdmMzNmMTY0ZDBkMTNlYzc',
            title: 'Logah Hello Kitty 二合一平板',
            desc: 'Hello Kitty主题及开机画面，10.1英寸IPS屏，Windows 10，皮套式键盘',
            price: '¥ 1,288',
            path: ''
          }, {
            img: 'https://imgazure.microsoftstore.com.cn/medias/HomePage2017ProductComputer-03?context=bWFzdGVyfGltYWdlc3w4Mjk5MHxpbWFnZS9wbmd8aW1hZ2VzL2gxNS9oZDEvOTkwNDY1NzU5NjQ0Ni5wbmd8MmM1Mjc3YjI3ZjFkYmJlMTY5YzQ0NmE4ZWUwZjRiZTcxYWUwNThiNWNlYjFlYmMwMWY2ZjgxYTExODM3YTZlMQ',
            title: 'Porsche Design BOOK ONE',
            desc: '13.3 英寸 IPS 触控屏，第七代酷睿处理器，Windows 10 专业版，内含手写笔',
            price: '¥ 12,888',
            path: ''
          }]
        }
      },
      hot: [
        {
          img: 'http://store-images.s-microsoft.com/image/apps.31326.13510798885735219.3dfb176a-2479-4b17-ab6e-418794f3932d.a8aae002-3be2-4cd4-9ca3-b3e2e7e14882',
          desc: 'Minecraft for Windows 10',
          width: '100%',
          path: ''
        }, {
          img: 'http://store-images.s-microsoft.com/image/apps.21021.13954787087416189.65ab3adc-81a4-4030-aa3c-ced31da4491a.73b0760d-45f7-46fc-8ce2-ab5ee02520f8',
          desc: '帝国时代：决定版',
          width: '80%',
          path: ''
        }, {
          img: 'http://store-images.s-microsoft.com/image/apps.4458.13510798887550312.1152921504704380324.3a10922a-e559-46bf-8fb4-a273279585b6',
          desc: 'Forza Horizon 3 标准版',
          width: '70%',
          path: ''
        }, {
          img: 'http://store-images.microsoft.com/image/apps.39696.13510798882964918.84c62c00-331b-45af-af2b-3a3e606cf731.573cd12b-dd2a-4227-b689-ef1931cac634',
          desc: 'Plague Inc.',
          width: '60%',
          path: ''
        }, {
          img: 'http://store-images.s-microsoft.com/image/apps.26032.13510798887557860.1152921504704287565.54fc5f07-e35a-4eb6-b4c7-15a6884d6f22',
          desc: 'Forza Horizon 3 豪华版',
          width: '50%',
          path: ''
        }, {
          img: 'http://store-images.s-microsoft.com/image/apps.46738.13711224919405392.9feef292-1f71-4dcb-9f1b-9f75dfb6ff78.d126a3dd-d7f8-4e50-9549-9c0b189e4ec2',
          desc: '三国群英传-逐鹿中原',
          width: '40%',
          path: ''
        }, {
          img: 'http://store-images.s-microsoft.com/image/apps.1703.13510798887557960.1152921504704415655.59ac322d-aa29-4bf1-9dab-954155c8e2c2',
          desc: 'Forza Horizon 3 终极版',
          width: '30%',
          path: ''
        }, {
          img: 'http://store-images.s-microsoft.com/image/apps.35072.13670972585585116.70570f0d-17aa-4f97-b692-5412fa183673.25a97451-9369-4f6b-b66b-3427913235eb',
          desc: 'Cuphead',
          width: '20%',
          path: ''
        }
      ]
>>>>>>> ...
    }
  },
  components: {
    'v-header': header,
    'v-banner': banner,
    'v-classify': classify,
    'v-recommended': recommended,
    'v-cp-one': cpOne,
    'v-game': game,
    'v-service': service,
    'v-mClassify': mClassify,
    'v-mClassify2': mClassify2,
    'v-bottom': bottom,
    'v-footer': footer
  },
  computed: {
    ...mapState([
      'bd'
    ]),
    show () {
      if (this.bd > 766) {
        return true
      } else {
        return false
      }
    }
<<<<<<< HEAD
  },
  created () {
    this.$axios.get('/api/web/index.php?m=default&c=index&a=index').then((res) => {
      console.log(res)
    })
=======
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
@media only screen and (max-width: 766px)
  .games
    display: none
</style>
