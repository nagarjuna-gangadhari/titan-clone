<template>
  <v-grid theme="compact" :source="rows" :columns="columns" filter="true"/>
</template>

<script>
import VGrid from "@revolist/vue3-datagrid";
export default {
  name: "CourseTableVue",
  data() {
    return {
      columns: [
        {
          name: "Birth",
          prop: "birthdate",
          columnType: "date",
          size: 150,
        },
        {
          prop: "name",
          name: "First",
          sortable: true,
          order: 'asc'
        },
        {
          prop: "details",
          name: "Second",
        },
      ],
      rows: [
        {
          birthdate: "2022-08-24",
          name: "1",
          details: "Item 1",
        },
        {
          birthdate: "2022-08-24",
          name: "2",
          details: "Item 2",
        },
      ],
    };
  },
  components: {
    VGrid,
  },
};
</script>