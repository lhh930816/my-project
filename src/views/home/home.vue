<template>
	<div>
		<h2>DataGrid Selection</h2>
		<div style="margin-bottom:10px">
			<ComboBox placeholder="Select a Selection Mode"
					:data="selectionOptions" 
					v-model="selectionMode" 
					:editable="false"
					:panelStyle="{height:'auto'}"
					@valueChange="selection=null">
			</ComboBox>
		</div>
		<DataGrid style="height:250px"
				:data="data"
				:selectionMode="selectionMode"
				@selectionChange="selection=$event">
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
		<p v-if="selection">You selected: {{selectionInfo}}</p>
	</div>
</template>
 
<script>
export default {
  data() {
    return {
      data: [],
      selectionOptions: [
        { value: null, text: "None" },
        { value: "single", text: "Single Selection" },
        { value: "multiple", text: "Multiple Selection" },
        { value: "cell", text: "Cell Selection" },
        { value: "multicell", text: "Multiple Cells" }
      ],
      selectionMode: null,
      selection: null
    };
  },
  computed: {
    selectionInfo() {
      if (!this.selection) {
        return null;
      }
      if (this.selectionMode == "single") {
        return this.selection.itemid;
      } else if (this.selectionMode == "multiple") {
        return this.selection.map(function(row){return row.itemid}).join(",");
      } else if (this.selectionMode == "cell") {
        return this.selection.row[this.selection.column.field];
      } else {
        return this.selection.map(function(c){return c.row[c.column.field]}).join(",");
      }
    }
  },
  created() {
    this.data = [
      {
        code: "FI-SW-01",
        name: "Koi",
        unitcost: 10.0,
        status: "P",
        listprice: 36.5,
        attr: "Large",
        itemid: "EST-1"
      },
      {
        code: "K9-DL-01",
        name: "Dalmation",
        unitcost: 12.0,
        status: "P",
        listprice: 18.5,
        attr: "Spotted Adult Female",
        itemid: "EST-10"
      },
      {
        code: "RP-SN-01",
        name: "Rattlesnake",
        unitcost: 12.0,
        status: "P",
        listprice: 38.5,
        attr: "Venomless",
        itemid: "EST-11"
      },
      {
        code: "RP-SN-01",
        name: "Rattlesnake",
        unitcost: 12.0,
        status: "P",
        listprice: 26.5,
        attr: "Rattleless",
        itemid: "EST-12"
      },
      {
        code: "RP-LI-02",
        name: "Iguana",
        unitcost: 12.0,
        status: "P",
        listprice: 35.5,
        attr: "Green Adult",
        itemid: "EST-13"
      },
      {
        code: "FL-DSH-01",
        name: "Manx",
        unitcost: 12.0,
        status: "P",
        listprice: 158.5,
        attr: "Tailless",
        itemid: "EST-14"
      },
      {
        code: "FL-DSH-01",
        name: "Manx",
        unitcost: 12.0,
        status: "P",
        listprice: 83.5,
        attr: "With tail",
        itemid: "EST-15"
      },
      {
        code: "FL-DLH-02",
        name: "Persian",
        unitcost: 12.0,
        status: "P",
        listprice: 23.5,
        attr: "Adult Female",
        itemid: "EST-16"
      },
      {
        code: "FL-DLH-02",
        name: "Persian",
        unitcost: 12.0,
        status: "P",
        listprice: 89.5,
        attr: "Adult Male",
        itemid: "EST-17"
      },
      {
        code: "AV-CB-01",
        name: "Amazon Parrot",
        unitcost: 92.0,
        status: "P",
        listprice: 63.5,
        attr: "Adult Male",
        itemid: "EST-18"
      }
    ];
  }
};
</script>