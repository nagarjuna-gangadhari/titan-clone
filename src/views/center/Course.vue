<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import axios from 'axios'

var jk_data = ref([]);

async function get_courses(){
	await axios.get('/api/v1/course/')
	.then(function (response) {
		// handle success
		console.log(response);
		jk_data.value = response.data
	})
	.catch(function (error) {
		// handle error
		console.log(error);
		return {}
	})
}

get_courses()





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
			<div class="hidden">
				<button class="p-2 bg-red-400 m-2" @click="update">UPDATE</button><br />
				<button class="p-2 bg-red-400 m-2" @click="reload">RELOAD</button><br />
			</div>
			<input type="text" class="column_filter" id="col0_filter">

			
			<DataTable
			:options="options"
			:data="jk_data"
			
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
table.dataTable tbody td {
	padding: 1px;
}
</style>
