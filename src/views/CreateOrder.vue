<script setup lang="ts">
import SharedButton from '@/components/SharedButton.vue';

</script>

<template>
  <div class="px-4 py-6">
      <h2 class="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <form>
        <div class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label class="sm:basis-40">First Name</label>
          <input
            class="input grow"
            type="text"
            name="customer"
            defaultValue="username"
            required
          />
        </div>

        <div class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label class="sm:basis-40">Phone number</label>
          <div class="grow">
            <input class="input w-full" type="tel" name="phone" required />
              <p class="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
          </div>
        </div>

        <div class="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label class="sm:basis-40">Address</label>
          <div class="grow">
            <input
              class="input w-full"
              type="text"
              name="address"
              defaultValue="address"
              required
            />
              <p class="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
          </div>

            <span class="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
              <SharedButton
                type="small"
              >
                Get position
              </SharedButton>
            </span>
        </div>

        <div class="mb-12 flex items-center gap-5">
          <input
            class="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label htmlFor="priority" class="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
          />

          <SharedButton type="primary">
              Order now from $8
          </SharedButton>
        </div>
      </Form>
    </div>
</template>
