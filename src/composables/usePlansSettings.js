import { BASIC_PLAN, DEMO_PLAN, DISCOUNT_PLAN } from '@/common/price-configs/index.js'
import { computed, ref } from 'vue'
const plans = [BASIC_PLAN, DEMO_PLAN, DISCOUNT_PLAN];
const planIndex = ref(Number(localStorage.getItem('planIdx') || 0));
const priceSettings = computed(() => plans[planIndex.value])

export function usePlansSettings() {


  const setPlan = () => {
    planIndex.value += 1;
    localStorage.setItem('planIdx', planIndex.value)
  }
  return { priceSettings, setPlan, planIndex }
}
