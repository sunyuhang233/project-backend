<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
interface OrdersTotalVO {
  /**
   * 订单数
   */
  nums?: number
  /**
   * 订单状态
   */
  status?: number
}
interface OrdersTotal extends OrdersTotalVO {
  title?: string
  color?: string
  class?: string
  icon?: string
}

enum OrdersStatus {
  /** 待付款 */
  UN_PAID = 0,
  /** 已付款 */
  PAID = 1,
  /** 已发货 */
  DELIVERED = 2,
  /** 已收货 */
  RECEIVED = 3,
  /** 已评价 */
  COMMENTED = 4,
  /** 已取消 */
  CANCELED = 5,
  /** 已超时取消 */
  DELAY_CANCELED = 6,
  /** 发起退款 */
  REFUND = 7,
  /** 退款成功并取消 */
  REFUND_SUCCESS = 8,
}

// 订单列表
const orderTotalList = ref<OrdersTotal[]>([
  {
    nums: 0,
    status: OrdersStatus.UN_PAID,
    ...getTitle(OrdersStatus.UN_PAID),
  },
  {
    nums: 0,
    status: OrdersStatus.PAID,
    ...getTitle(OrdersStatus.PAID),
  },
  {
    nums: 0,
    status: OrdersStatus.DELIVERED,
    ...getTitle(OrdersStatus.DELIVERED),
  },
  {
    nums: 0,
    status: OrdersStatus.RECEIVED,
    ...getTitle(OrdersStatus.RECEIVED),
  },
  {
    nums: 0,
    status: OrdersStatus.COMMENTED,
    ...getTitle(OrdersStatus.COMMENTED),
  },
  {
    nums: 0,
    status: OrdersStatus.CANCELED,
    ...getTitle(OrdersStatus.CANCELED),
  },
  {
    nums: 0,
    status: OrdersStatus.DELAY_CANCELED,
    ...getTitle(OrdersStatus.DELAY_CANCELED),
  },
  {
    nums: 0,
    status: OrdersStatus.REFUND,
    ...getTitle(OrdersStatus.REFUND),
  },
  {
    nums: 0,
    status: OrdersStatus.REFUND_SUCCESS,
    ...getTitle(OrdersStatus.REFUND_SUCCESS),
  },
])

// 加载数据
async function loadData() {}
onMounted(() => {
  loadData()
})

// 获取订单状态 根据订单状态返回对应的标题
function getTitle(status?: OrdersStatus) {
  switch (status) {
    case OrdersStatus.UN_PAID:
      return {
        title: '待付款',
        color: '',
      }
    case OrdersStatus.PAID:
      return {
        title: '待发货',
        color: '#fff',
        class: 'relative text-#fff group bg-[var(--el-color-primary)] shadow ',
        icon: 'animate-[1s_shopcart-rote] p-1.4em i-solar:cart-large-2-bold-duotone left-1 bottom-0  z-0 opacity-40 -rotate-20',
      }
    case OrdersStatus.DELIVERED:
      return {
        title: '已发货',
        class: 'group',
        icon: 'opacity-0 scale-50 transition-all -translate-x-20px group-hover:(opacity-30 translate-x-0 scale-100  -rotate-20)   p-1.4em i-solar:scooter-bold-duotone left-1 bottom-1 z-0  ',
      }
    case OrdersStatus.RECEIVED:
      return {
        title: '已收货',
        color: '',
      }
    case OrdersStatus.COMMENTED:
      return {
        title: '已评价',
        color: '#fff',
        class: 'relative text-#fff shadow group bg-[var(--el-color-success)] ',
        icon: 'animate-[1s_shopcart-rote] p-1.4em i-solar:bag-check-bold left-1 bottom-0  z-0 opacity-40 -rotate-20',
      }
    case OrdersStatus.CANCELED:
      return {
        title: '已取消',
        class: 'group',
        icon: 'opacity-0 scale-50 transition-all -translate-x-20px group-hover:(opacity-20 translate-x-0 scale-100  -rotate-20) p-1.4em i-solar:cart-cross-bold-duotone left-1 bottom-1 z-0  ',
      }
    case OrdersStatus.DELAY_CANCELED:
      return {
        title: '超时取消',
        color: '',
        class: 'group',
        icon: 'opacity-0 scale-50 transition-all -translate-x-20px group-hover:(opacity-20 translate-x-0 scale-100  -rotate-20) p-1.4em i-solar:bag-cross-bold-duotone left-1 bottom-1 z-0  ',
      }
    case OrdersStatus.REFUND:
      return {
        title: '待退售后',
        color: '#fff',
        class: 'text-#fff bg-[var(--el-color-error)] opacity-90',
        icon: 'animate-zoom-in-left p-1.4em i-solar:bill-check-bold-duotone left-1 bottom-1  z-0 opacity-40 -rotate-20',
      }
    case OrdersStatus.REFUND_SUCCESS:
      return {
        title: '已退款',
        color: '',
        class: 'group',
        icon: 'opacity-0 scale-50 transition-all -translate-x-20px group-hover:(opacity-20 translate-x-0 -rotate-20 scale-100)   p-1.4em i-solar:banknote-2-broken left-1 bottom-1  z-0  ',
      }
    default:
      return {
        title: '待定',
        color: '',
      }
  }
}

const router = useRouter()

// 跳转到订单详情
function gotoDetailOrder(p: OrdersTotal) {
  router.push('/main/order?status=' + p.status)
}
</script>

<template>
  <div>
    <el-scrollbar>
      <div class="flex select-none justify-between py-2px" min-h-5rem>
        <!-- List -->
        <div
          v-for="p in orderTotalList"
          :key="p.status"
          class="relative mx-1 w-8rem flex-row-c-c flex-shrink-0 flex-col cursor-pointer overflow-hidden rounded-10px transition-200 lg:(mx-2 flex-1 p-2) hover-(shadow)"
          :class="p.class"
          @click="gotoDetailOrder(p)">
          <span class="dark:text-light" :style="{ color: p.color }" my-4 text-1.4rem font-500>{{ p.nums }}</span>
          <small truncate pb-2 text-0.8rem font-600> {{ p.title }}</small>
          <i v-if="p.icon" absolute :class="p.icon" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss"></style>
