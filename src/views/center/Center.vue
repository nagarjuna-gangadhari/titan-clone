<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';

DataTable.use(DataTablesLib);

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
</script>

<template>
	<div class="w-full flex items-center justify-center">
		<div class="w-9/12 mt-20 text-xs">
			<DataTable
			:columns="columns"
			:options="options"
			ajax="/data.json"
			class="display"
			width="100%"
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
</style>
