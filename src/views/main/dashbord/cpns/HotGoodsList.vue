<script setup lang="ts">
import { ref } from 'vue'
import currency from 'currency.js'
// 商品列表
const goodsList = ref<GoodsInfoVO[]>([
  {
    id: '1',
    name: '商品1',
    description: '商品1描述',
    price: 100,
    costPrice: 50,
    categoryId: '1',
    images: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    video: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    postage: 0,
    province: '广东省',
    city: '广州市',
    district: '天河区',
    warrantyTime: 0,
    refundTime: 0,
    isShow: 1,
    isNew: 1,
    sales: 0,
    views: 0,
    createTime: '2021-08-01 00:00:00',
    updateTime: '2021-08-01 00:00:00',
  },
  {
    id: '1',
    name: '商品1',
    description: '商品1描述',
    price: 100,
    costPrice: 50,
    categoryId: '1',
    images: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    video: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    postage: 0,
    province: '广东省',
    city: '广州市',
    district: '天河区',
    warrantyTime: 0,
    refundTime: 0,
    isShow: 1,
    isNew: 1,
    sales: 0,
    views: 0,
    createTime: '2021-08-01 00:00:00',
    updateTime: '2021-08-01 00:00:00',
  },
  {
    id: '1',
    name: '商品1',
    description: '商品1描述',
    price: 100,
    costPrice: 50,
    categoryId: '1',
    images: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    video: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    postage: 0,
    province: '广东省',
    city: '广州市',
    district: '天河区',
    warrantyTime: 0,
    refundTime: 0,
    isShow: 1,
    isNew: 1,
    sales: 0,
    views: 0,
    createTime: '2021-08-01 00:00:00',
    updateTime: '2021-08-01 00:00:00',
  },
  {
    id: '1',
    name: '商品awdadwadadawdadawddawd1',
    description: '商品1描述',
    price: 100,
    costPrice: 50,
    categoryId: '1',
    images: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    video: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    postage: 0,
    province: '广东省',
    city: '广州市',
    district: '天河区',
    warrantyTime: 0,
    refundTime: 0,
    isShow: 1,
    isNew: 1,
    sales: 0,
    views: 0,
    createTime: '2021-08-01 00:00:00',
    updateTime: '2021-08-01 00:00:00',
  },
])

interface GoodsInfoVO {
  id: string
  name: string
  description?: string
  price: number
  costPrice: number
  categoryId: string
  images: string | string[]
  video: string
  postage: number
  province: string
  city: string
  district: string
  warrantyTime: number
  refundTime: number
  isShow: number
  isNew: number
  sales: number
  views: number
  createTime: string
  updateTime: string
}

const loading = ref(false)

const page = ref(1)
const size = ref(10)

function loadData() {}

onMounted(() => {
  loadData()
})

/**
 * 计算每一行的样式
 */
function tableRowClassName({ row, rowIndex }: { row: GoodsInfoVO; rowIndex: number }): string {
  if (rowIndex === 0) return 'text-[var(--el-color-primary)] font-700 dark:text-[var(--el-color-info)]'
  else if (rowIndex === 1) return 'text-[var(--el-color-primary)] font-700 dark:text-[var(--el-color-info)] opacity-80'
  else if (rowIndex === 2) return 'text-[var(--el-color-primary)] font-700 dark:text-[var(--el-color-info)] opacity-70'
  return 'group'
}

// 单例
const buttonRef = ref()
const tooltipRef = ref()
const tooltipTitle = ref()
const isShowToolTip = ref(false)
// 鼠标移入显示提示
function onTipOver(event: MouseEvent, text: string) {
  isShowToolTip.value = true
  buttonRef.value = event.currentTarget
  tooltipTitle.value = text
}
</script>

<template>
  <div class="hot-goods">
    <h3>
      热卖商品<small v-if="goodsList.length > 0">{{ goodsList.length }}件</small>
    </h3>
    <el-table
      v-if="goodsList.length > 0"
      :data="goodsList"
      border
      stripe
      empty-text="暂无数据"
      header-cell-class-name="h-3rem shadow shadow-inset md:shadow-none"
      :row-class-name="tableRowClassName"
      :max-height="500"
      width="fit-content"
      class="mt-4 table-default"
      header-aligin="center">
      <el-table-column type="index" header-align="center" width="100%" label="排名" align="center" />
      <el-table-column prop="name" label="商品" align="center">
        <template #default="{ row }">
          <div class="flex items-center p-1 py-4">
            <div class="mr-4 h-5rem w-5rem flex-shrink-0 overflow-hidden rounded-4px v-card">
              <el-image
                loading="lazy"
                :src="row.images"
                fit="cover"
                class="h-full w-full shadow transition-300 hover:scale-110"
                style="border-color: inherit" />
            </div>
            <span class="flex-1 cursor-pointer truncate" @mouseover="onTipOver($event, row.name)">{{ row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="price" label="销售价" width="160%" align="right">
        <template #default="{ row }"> ￥{{ currency(row.price) }} </template>
      </el-table-column>
      <el-table-column sortable prop="price" label="浏览量" align="right" width="160%" />
      <el-table-column sortable prop="sales" label="销售量（件）" width="160%" align="right" />
    </el-table>
    <el-tooltip
      ref="tooltipRef"
      :visible="isShowToolTip"
      :popper-options="{
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              adaptive: false,
              enabled: false,
            },
          },
        ],
      }"
      :virtual-ref="buttonRef"
      virtual-triggering
      popper-class="singleton-tooltip">
      <template #content>
        <span> {{ tooltipTitle }} </span>
      </template>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
