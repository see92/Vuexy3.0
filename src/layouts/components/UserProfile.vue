<script setup>
const logout = () => {
  console.log("out");
};
</script>

<template>
  <!-- <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  > -->
  <div class="userData">
    <p class="mb-0 userName">{{ "Ping32" }}</p>
    <small class="userRole">{{ "超级管理员" }}</small>
  </div>
  <VAvatar class="cursor-pointer" color="primary" variant="tonal">
    <!-- <VImg :src="avatar1" /> -->
    <VIcon size="20" icon="tabler-user-cog" />
    <!-- SECTION Menu -->
    <VMenu activator="parent" width="230" location="bottom end" offset="14px">
      <VList>
        <!-- 👉 Settings -->
        <VListItem link>
          <template #prepend>
            <VIcon class="me-2" icon="tabler-settings" size="22" />
          </template>
          <VListItemTitle>用户设置</VListItemTitle>
        </VListItem>

        <!-- 👉 FAQ -->
        <VListItem link>
          <template #prepend>
            <VIcon class="me-2" icon="tabler-help" size="22" />
          </template>
          <VListItemTitle>FAQ</VListItemTitle>
        </VListItem>

        <!-- Divider -->
        <VDivider class="my-2" />

        <!-- 👉 Logout -->
        <VListItem @click="logout">
          <template #prepend>
            <VIcon class="me-2" icon="tabler-logout" size="22" />
          </template>
          <VListItemTitle>退出登录</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
  <!-- </VBadge> -->
</template>

<style scoped>
.userData {
  margin-inline-end: 0.5rem;
  text-align: end;
}

.userName {
  font-weight: 600;
}

.userRole {
  color: #b9b9c3;
  font-size: 12px;
}
</style>
