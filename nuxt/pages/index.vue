<template>
  <div v-if="page && page?.content">
    <cms-dynamic-zone :dynamicZone="page?.content" />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  async setup (_props, { slots, emit }) {

    const {data:page} = await useAsyncData('page', async () => {
      const { findPage } = useCMS();
      const page = await findPage({ filters: { handle: "home" } }) || null;
      return page
    })

    return {
      page
    }
  }
})

</script>
