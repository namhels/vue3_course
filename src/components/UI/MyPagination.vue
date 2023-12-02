<template>
  <div class="page__wrapper">
    <div
      :v-model="modelValue"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{ 'page--current': page === pageNumber }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  props: {
    modelValue: {
      type: Number
    },
    totalPages: {
      type: Number
    }
  },
  methods: {
    changePage(pageNumber) {
      this.props.modelValue = pageNumber;
      // this.$emit('update:modelValue', e.target.value);
    }
  }
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 22px;
}

.page {
  color: palegreen;
  border: 2px solid palegreen;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.page--current {
  color: palevioletred;
  border: 2px solid palevioletred;
}
</style>
