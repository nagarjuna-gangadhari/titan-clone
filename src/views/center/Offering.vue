<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import axios from 'axios'

var jk_data = ref([]);
const columns = ['subject', 'grade', 'board', 'language_id', 'status', 'availabilityType'];

async function get_courses(){
	await axios.get('/api/v1/course/')
	.then(function (response) {
		// handle success
		console.log(response);

		let data=[];

		for (let i = 0; i < response.data.length; i++){
			const m = response.data[i]
			let k = []
			for (let l = 0; l < columns.length; l++){
				k.push(m[columns[l]])
			}
			k.push(`<a href="course/${m['id']}" >Edit</a>`)
			data.push(k)
		}

		console.log(data)


		jk_data.value = data
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


<style>
[type='search'] {
    -webkit-appearance: textfield;
    outline-offset: 0px;
    width: 30rem;
    height: 2rem;
    border-radius: 4rem;
}
  
</style>


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
					<th v-for="column in columns">{{ column }}</th>
					<th>Edit</th>
					
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
