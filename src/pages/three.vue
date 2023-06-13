<template>
    <VCard class="email-compose-dialog">
    <VCardItem class="py-3 px-5">
      <div class="d-flex align-center">
        <span class="font-weight-medium">发送邮件</span>
        <VSpacer />
        <!-- <VIcon
          size="20"
          icon="tabler-minus"
          class="me-4"
          @click="$emit('close')"
        />
        <VIcon
          size="20"
          icon="tabler-x"
          @click="
            $emit('close');
            resetValues();
          "
        /> -->
      </div>
    </VCardItem>

    <div class="pe-5">
      <!-- <AppTextField v-model="to" density="compact" class="elevation-0">
        <template #prepend-inner>
          <div class="text-sm text-disabled">To:</div>
        </template>
        <template #append>
          <span class="cursor-pointer text-primary">Cc | Bcc</span>
        </template>
      </AppTextField> -->
      <AppSelect v-model="selectedOptions" :items="states" multiple persistent-hint :menu-props="{maxHeight:'400'}">
        <template #prepend-inner>
          <div class="text-sm text-disabled" style="width: 70px;">
            发送至：
          </div>
        </template>
      </AppSelect>
    </div>

    <VDivider />

    <AppTextField v-model="recipient" density="compact">
      <template #prepend-inner>
        <div class="text-sm text-disabled" style="width: 70px;">接收者:</div>
      </template>
    </AppTextField>

    <VDivider />

    <appTextField v-model="theme" density="compact">
      <template #prepend-inner>
        <div class="text-sm text-disabled" style="width: 70px;">主题：</div>
      </template>
    </appTextField>

    <!-- <VTextarea v-model="message" placeholder="Message" /> -->
    <VDivider />
    <div class="d-flex">
      <div class="width:100px">
    <appTextField v-model="file" density="compact" style="width: 100px;">
      <template #prepend-inner style="width: 100px;">
        <div class="text-sm text-disabled" >附件：</div>
      </template>
    </appTextField>
  </div>
    <VBtn></VBtn>
  </div>
<!-- 
    <div class="d-flex align-center px-5 py-4">
      <VBtnGroup color="primary" divided density="comfortable">
        <VBtn>Send</VBtn>
        <VBtn icon @click="() => (isMenuOpen = !isMenuOpen)">
          <VIcon icon="tabler-send " size="18" />
          <VMenu activator="parent">
            <VList :items="['Schedule Mail', 'Save Draft']" />
          </VMenu>
        </VBtn>
      </VBtnGroup>
      <VIcon icon="tabler-link" class="ms-4 cursor-pointer" />

      <VSpacer />
      <VBtn icon variant="text" color="default" density="comfortable">
        <VIcon icon="tabler-dots-vertical" size="20" />
      </VBtn>

      <VBtn
        icon
        variant="text"
        color="default"
        density="comfortable"
        @click="
          $emit('close');
          resetValues();
        "
      >
        <VIcon icon="tabler-trash" size="20" />
      </VBtn>
    </div> -->
  </VCard>
</template>

<script setup>
  const selectedOptions = ref(['联系客户1']);
  const states = [
  '联系客户1',
  '联系客户2',
  '联系客户3',
  '联系客户4',
  '联系客户5',
]
</script>

<style lang="scss">
@use "@core/scss/base/mixins";

.v-card.email-compose-dialog {
  z-index: 910 !important;

  @include mixins.elevation(18);

  .v-field--prepended {
    padding-inline-start: 20px;
  }

  .v-field__prepend-inner {
    align-items: center;
    padding: 0;
  }

  .v-card-item {
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  }

  .v-textarea .v-field {
    --v-field-padding-start: 20px;
  }

  .v-field__outline {
    display: none;
  }

  .v-input {
    .v-field__prepend-inner {
      display: flex;
      align-items: center;
      padding-block-start: 0;
    }
  }

  .app-text-field {
    .v-field__input {
      padding-block-start: 6px;
    }

    .v-field--focused {
      box-shadow: none !important;
    }
  }
}
</style>
