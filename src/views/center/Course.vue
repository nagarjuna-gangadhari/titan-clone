<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import $ from "jquery";


DataTable.use(DataTablesLib);
let dt;
const table = ref();

const headers = [
  { text: 'Name', value: 'name' },
  { text: 'Position', value: 'position' },
  { text: 'Office', value: 'office' },
  { text: 'Extn', value: 'extn' },
  { text: 'Start Date', value: 'start_date' },
  { text: 'Salary', value: 'salary' },


];

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
];

const options = {
  dom: 'Bftip',
  select: true,
};

// Get a DataTables API reference
onMounted(function () {
	dt = table.value.dt();

    $('#DataTables_Table_0 thead th').each(function () {
        var title = $(this).text();
        $(this).html('<input class="border h-6 w-28" type="text" placeholder="Search ' + title + '" />');
    });

});

function update() {
  dt.rows({ selected: true }).every(function () {
    let row = this.data();
	console.log(row)
  });
}

function reload(){
	dt.data.reload()
}




</script>

<template>
	<div class="w-full flex items-center justify-center">
		<div class="w-9/12 mt-20 text-xs">
			<button class="p-2 bg-red-400 m-2" @click="update">UPDATE</button><br />
			<button class="p-2 bg-red-400 m-2" @click="reload">RELOAD</button><br />
			<DataTable
			:columns="columns"
			:options="options"
			ajax="/data.json"
			class="display"
			width="100%"
            ref="table"
			
			>
			
			<thead>
				<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Extn.</th>
				<th>Start date</th>
				<th>Salary</th>
				<th>Action</th>
				</tr>
			</thead>
			
			</DataTable>
		</div>
	</div>
</template>

<style>
@import 'datatables.net-dt';
@import 'datatables.net-buttons-dt';
@import 'datatables.net-select-dt';
</style>
