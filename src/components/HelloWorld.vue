<template>
  <div>
    <input type="text" v-model="searchText" placeholder="Search..." />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return item.name.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
  },
};
</script>
