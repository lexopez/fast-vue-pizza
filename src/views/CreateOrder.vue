<script setup>
import SharedButton from '@/components/SharedButton.vue';
import { createOrder } from '@/services/apiRestaurant';
import { useCartStore } from '@/stores/cartStore';
import { useUserStore } from '@/stores/userStore';
import { isValidPhone } from '@/utils/helpers';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

  const router = useRouter()

  const cartStore = useCartStore()
  const userStore = useUserStore()

  const firstname = computed({
    get: () => userStore.username,
    set: (val) => userStore.username = val
  })
  const phone = ref(null)
  const address = computed({
    get: () => userStore.address,
    set: (val) => userStore.address = val
  })
  const priority = ref(false)
  const handleSubmit = async () =>{
    if (!isValidPhone(phone.value) && !phone.value && !firstname.value && !address.value) return;
    const order = {
      customer: firstname.value,
      phone: phone.value,
      address: address.value,
      priority: priority.value,
      position: userStore.position.latitude && userStore.position.longitude ? `${userStore.position.latitude},${userStore.position.longitude}` : '',
      cart: cartStore.cart,
    }

    const newOrder = await createOrder(order)
    // console.log(newOrder)
    cartStore.clearCart()
    router.push(`/order/${newOrder.id}`)
  }

</script>

<template>
  <div class="px-4 py-6">{{ isValidPhone(phone) }} {{ phone ? isValidPhone(phone) : false }}
      <h2 class="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label class="sm:basis-40">First Name</label>
          <input
            class="input grow"
            type="text"
            v-model="firstname"
            name="customer"
            defaultValue="username"
            required
          />
        </div>

        <div class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label class="sm:basis-40">Phone number</label>
          <div class="grow">
            <input class="input w-full" v-model="phone" type="tel" name="phone" required />
              <p v-if="phone ? !isValidPhone(phone) ? true : false : false" class="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                Invalid phone number
              </p>
          </div>
        </div>

        <div class="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label class="sm:basis-40">Address</label>
          <div class="grow">
            <input
              class="input w-full"
              type="text"
              v-model="address"
              name="address"
              defaultValue="address"
              required
            />
              <p v-if="userStore.status === 'error'" class="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {{userStore.error}}
              </p>
          </div>

            <span v-if="!userStore.position?.latitude && !userStore.position.longitude" class="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
              <button class="px-4 py-2 md:px-5 md:py-2.5 text-xs inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
                @click.prevent="userStore.fetchAddress"
              >
                Get position
              </button>
            </span>
        </div>

        <div class="mb-12 flex items-center gap-5">
          <input
            class="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            v-model="priority"
            name="priority"
            id="priority"
          />
          <label htmlFor="priority" class="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>

          <SharedButton type="primary">
              Order now from $8
          </SharedButton>
        </div>
      </Form>
    </div>
</template>
