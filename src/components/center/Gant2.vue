<template>
    <div class="w-full flex flex-col items-center justify-center">
      <div class="">
        <div class="toolbox">
          <button @click="updateFirstRow">Update first row</button>
          <button @click="changeZoomLevel">Change zoom level</button>
        </div>
        <div class="gstc-wrapper" ref="gstcElement"></div>
    </div>
    </div>
  </template>
  
  <script setup>
  import GSTC from "gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js";
  import { Plugin as TimelinePointer } from "gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js";
  import { Plugin as Selection } from "gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js";
  import { Plugin as ItemResizing } from "gantt-schedule-timeline-calendar/dist/plugins/item-resizing.esm.min.js";
  import { Plugin as ItemMovement } from "gantt-schedule-timeline-calendar/dist/plugins/item-movement.esm.min.js";
  import { Plugin as Bookmarks } from "gantt-schedule-timeline-calendar/dist/plugins/time-bookmarks.esm.min.js";
  import "gantt-schedule-timeline-calendar/dist/style.css";
  import { ref, onMounted, onBeforeUnmount } from "vue";
  // helper functions
  function generateRows() {
    /**
     * @type { import("gantt-schedule-timeline-calendar").Rows }
     */
    const rows = {};
    for (let i = 0; i < 10; i++) {
      const id = GSTC.api.GSTCID(i.toString());
      rows[id] = {
        id,
        label: `Row ${i}`,
      };
    }
    return rows;
  }
  function generateItems() {
    /**
     * @type { import("gantt-schedule-timeline-calendar").Items }
     */
    const items = {};
    let start = GSTC.api.date().startOf("day").subtract(6, "day");
    for (let i = 0; i < 5; i++) {
      const id = GSTC.api.GSTCID(i.toString());
      const rowId = GSTC.api.GSTCID(Math.floor(Math.random() * 10).toString());
      start = start.add(1, "day");
      items[id] = {
        id,
        label: `Item ${i}`,
        rowId,
        time: {
          start: start.valueOf(),
          end: start.add(Math.random() * 30, "day").endOf("day").valueOf(),
        },
      };
    }
    return items;
  }
  // main component

    let gstc, state;
    const gstcElement = ref(null);
    onMounted(() => {
      /**
       * @type { import("gantt-schedule-timeline-calendar").Config }
       */
      const config = {
        licenseKey:
        "====BEGIN LICENSE KEY====\nWBqPsF3t3s4wvMoaRgTTjBUHrjm5w3NaBhLBc80ghuXbXoA4h6ur3XVcmBZ1USZNily7X0SSAyA8u3Iqtkps1bnDNQzrCOCpN7HaRP1jsTXm6PuWdGKPOTcnrXYRL+0VoN69ROQZzVrPFJwE5Cz1w6Bj1iCt/YeoTI2t63uoDhthf5zEwibrBeYJ4gqjOYIG4CXpjIBArvoah5CVUXs1HO0efkL5ys43ExgfDITMWa/4lRjLtQ8yRVo9bKaFYxZcNHoybXCTc1Y/XM+mgxD0gUvDeo18fpDK6gszWdbLSZPSgbyayJigQ2sHh6v+gy+563ZZ69GlGRbpHgUXrH2BZw==||U2FsdGVkX18oKof2PprkuuDbf/hbzwUlN3QvlL5pCGFKdkhamBCynOPaYv0bmQGwp8n+XXDGUlnB2SFZtJpeH6HTBtvMZqZrUGSnmirG0Z8=\nfQRrTMC5/tZIxGvRqlnaB3NdY5aeiD0B1vBxuX++ImWvFYlVn8qOms0W92QxYLqhukmxmrej0UKnRxCKW+kjzL3SH0MDXD4bVeLyK/VX3UJEqsURA45ZEQk2P7bgl8NRCNtUG+af9Uo5YSP1aov5T3WDVmsV4A1lvSl+71y6AvlT7VRuDOWKt8D1pSy9zC7MaBWZRjkfm0XG/5TR9jBrowlweBS72LVZZ265M1bBDZi6Dv+f7XHOBLdALYIAZSbHbWBjnIAfRHAsua+JRvErFlkBLsnwDOQz/GlXJhi1aDyPRl06NIy0uD/UyyzgBU/98969M/9tUQC+meEnJVrPnw==\n====END LICENSE KEY====",
        plugins: [TimelinePointer(), Selection(), ItemResizing(), ItemMovement(), Bookmarks()],
        list: {
          columns: {
            data: {
              [GSTC.api.GSTCID("id")]: {
                id: GSTC.api.GSTCID("id"),
                width: 60,
                data: ({ row }) => GSTC.api.sourceID(row.id),
                header: {
                  content: "ID",
                },
              },
              [GSTC.api.GSTCID("label")]: {
                id: GSTC.api.GSTCID("label"),
                width: 200,
                data: "label",
                header: {
                  content: "Label",
                },
              },
            },
          },
          rows: generateRows(),
        },
        chart: {
          items: generateItems(),
        },
      };
      state = GSTC.api.stateFromConfig(config);
      globalThis.state = state;
      gstc = GSTC({
        element: gstcElement.value,
        state,
      });
      globalThis.gstc = gstc;
    });
    onBeforeUnmount(() => {
      if (gstc) gstc.destroy();
    });
    function updateFirstRow() {
      state.update(`config.list.rows.${GSTC.api.GSTCID("0")}`, (row) => {
        row.label = "Changed dynamically";
        return row;
      });
    }
    function changeZoomLevel() {
      state.update("config.chart.time.zoom", 21);
    }
      
  </script>
  <style scoped>
  .gstc-component {
    margin: 0;
    padding: 0;
  }
  .toolbox {
    padding: 10px;
    display: none;

  }
  </style>