/**
 * Get the execution item histories of a certain execution item.
 * @param event
 */
function executionDetail(event) {
	$("a[href='#reportDetail']").tab("show");
	
	// Get execution item id.
	var target = $(event.target);
	var id = target.attr("id").substr(10);
	
	// "exe_id" is a random id which used to persist the execution item's id. and will be used when switch the select between Right and Wrong
	$("#executionItemHistoryType").attr("exe_id", id);
	
	// Get the type of data we want to fetch (right or wrong results).
	var type = $("#executionItemHistoryType").val();
	
	// Get the counting statistics of the execution item.
	$.ajax({
		url: "validator/getExecutionItemHistoryStatistics/"+id,
		dataType: "json",
		success: function(data) {
			var template = $.templates("#reportItemHistoryStatisticsTmpl");
			var htmlOutput = template.render(data);
			$("#executionItemHistoryStatistics").html(htmlOutput);
		},
		error: function(data) {
			alert("error");
		}
	});
	
	// Get the data and display in the corresponding template.
	$.ajax({
		url: "validator/getExecutionItemHistory/"+id+"/1",
		dataType: "json",
		data: {type:type},
		success: function(data) {
			var template = $.templates("#reportItemHistoryTmpl");
			var htmlOutput = template.render(data);
			$("#executionItemHistory").html(htmlOutput);
			checkReportHistoryPageButton(1);
		},
		error: function() {
			alert("error");
		}
	});
	
}

/**
 * The function to toggle to see the result of a certain execution item history.
 * @param event
 */
function ExpandExecutionItemHistoryResult(event) {
	var target = $(event.target);
	// click the Success or Failure Buttion to show the result
	$("#"+target.attr("id")+"_tr").toggle();
}

/**
 * When the type changes, we should re-fetch the data.
 */
function executionItemHistoryTypeOnchange() {
	// Get the id and type.
	var id = $("#executionItemHistoryType").attr("exe_id");
	var type = $("#executionItemHistoryType").val();
	// Get the data.
	$.ajax({
		url: "validator/getExecutionItemHistory/"+id+"/1",
		dataType: "json",
		data: {type:type},
		success: function(data) {
			var template = $.templates("#reportItemHistoryTmpl");
			var htmlOutput = template.render(data);
			$("#executionItemHistory").html(htmlOutput);
			checkReportHistoryPageButton(1);
		},
		error: function() {
			alert("error");
		}
	});
}

/**
 * Get the first report page.
 * @param event
 * @returns {Boolean}
 */
function getFirstReportPage(event) {
	if (checkDisableLink(event) == false)
		return false;
	$.ajax({
		url: "validator/allReports/"+1,
		dataType: "json",
		success: function(data) {
			var template = $.templates("#reportItemTmpl");
			var htmlOutput = template.render(data);
			$("#reportSummary tbody").html(htmlOutput);
			
			// Modify the bottom page buttons.
			checkReportPageButton(1);
		}
	});
};

/**
 * Get the first next page.
 * @param event
 * @param offset
 * @returns {Boolean}
 */
function getNextReportPage(event, offset) {
	if (checkDisableLink(event) == false)
		return false;
	// Get the current page.
	var curPage = $("#curReportPage a").text();
	var nextPage = Number(curPage) + offset;
	$.ajax({
		url: "validator/allReports/"+nextPage,
		dataType: "json",
		success: function(data) {
			var template = $.templates("#reportItemTmpl");
			var htmlOutput = template.render(data);
			$("#reportSummary tbody").html(htmlOutput);
			checkReportPageButton(nextPage);
		}
	});
};

/**
 * Get the last report page.
 * @param event
 * @returns {Boolean}
 */
function getLastReportPage(event) {
	if (checkDisableLink(event) == false)
		return false;
	$.ajax({
		url: "validator/allReports/"+-1,
		dataType: "json",
		success: function(data) {
			var template = $.templates("#reportItemTmpl");
			var htmlOutput = template.render(data);
			$("#reportSummary tbody").html(htmlOutput);
			checkReportPageButton(-1);
		}
	});
};

/* This method is used to reset the paging buttons every time a paging button is clicked.*/
function checkReportPageButton(pageNumber) {
	$.ajax({
		url: "validator/getReportPageNumber",
		dataType: "json",
		success: function(totalPage) {
			if (pageNumber == -1)
				pageNumber = totalPage;
			// Set the 5 number page buttons.
			$("#prev2ReportPage a").html(pageNumber - 2);
			$("#prev1ReportPage a").html(pageNumber - 1);
			$("#curReportPage a").html(pageNumber);
			$("#next1ReportPage a").html(pageNumber + 1);
			$("#next2ReportPage a").html(pageNumber + 2);
			
			// Restore all buttons at first.
			$("#reportPagination li").show();
			$("#reportPagination li").removeClass("disabled");
			$(".disabledReportPage").addClass("disabled");
			
			// Hide or disable prev buttons if it could not be clicked.
			if (pageNumber - 3 <= 0) {
				$("#morePrevReportPage").hide();
			}
			if (pageNumber - 2 <= 0) {
				$("#prev2ReportPage").hide();
			}
			if (pageNumber - 1 <= 0) {
				$("#prevReportPage").addClass("disabled");
				$("#prev1ReportPage").hide();
				$("#firstReportPage").addClass("disabled");
			}
			// Hide or disable next buttons if it could not be clicked.
			if (pageNumber + 2 >= totalPage) {
				$("#moreNextReportPage").hide();
			}
			if (pageNumber + 1 >= totalPage) {
				$("#next2ReportPage").hide();
			}
			if (pageNumber >= totalPage) {
				$("#nextReportPage").addClass("disabled");
				$("#next1ReportPage").hide();
				$("#lastReportPage").addClass("disabled");
			}
		}
	});
};

/**
 * Get the first report page.
 * @param event
 * @returns {Boolean}
 */
function getFirstReportHistoryPage(event) {
	if (checkDisableLink(event) == false)
		return false;
	var id = $("#executionItemHistoryType").attr("exe_id");
	var type = $("#executionItemHistoryType").val();
	$.ajax({
		url: "validator/getExecutionItemHistory/"+id+"/"+1,
		dataType: "json",
		data:{type:type},
		success: function(data) {
			var template = $.templates("#reportItemHistoryTmpl");
			var htmlOutput = template.render(data);
			$("#executionItemHistory").html(htmlOutput);
			
			// Modify the bottom page buttons.
			checkReportHistoryPageButton(1);
		}
	});
};

/**
 * Get the first next page.
 * @param event
 * @param offset
 * @returns {Boolean}
 */
function getNextReportHistoryPage(event, offset) {
	if (checkDisableLink(event) == false)
		return false;
	var id = $("#executionItemHistoryType").attr("exe_id");
	var type = $("#executionItemHistoryType").val();
	// Get the current page.
	var curPage = $("#curReportHistoryPage a").text();
	var nextPage = Number(curPage) + offset;
	$.ajax({
		url: "validator/getExecutionItemHistory/"+id+"/"+nextPage,
		dataType: "json",
		data:{type:type},
		success: function(data) {
			var template = $.templates("#reportItemHistoryTmpl");
			var htmlOutput = template.render(data);
			$("#executionItemHistory").html(htmlOutput);
			checkReportHistoryPageButton(nextPage);
		}
	});
};

/**
 * Get the last report page.
 * @param event
 * @returns {Boolean}
 */
function getLastReportHistoryPage(event) {
	if (checkDisableLink(event) == false)
		return false;
	var id = $("#executionItemHistoryType").attr("exe_id");
	var type = $("#executionItemHistoryType").val();
	$.ajax({
		url: "validator/getExecutionItemHistory/"+id+"/"+-1,
		dataType: "json",
		data:{type:type},
		success: function(data) {
			var template = $.templates("#reportItemHistoryTmpl");
			var htmlOutput = template.render(data);
			$("#executionItemHistory").html(htmlOutput);
			checkReportHistoryPageButton(-1);
		}
	});
};

/* This method is used to reset the paging buttons every time a paging button is clicked.*/
function checkReportHistoryPageButton(pageNumber) {
	var id = $("#executionItemHistoryType").attr("exe_id");
	var type = $("#executionItemHistoryType").val();
	$.ajax({
		url: "validator/getExecutionItemHistoryPageNumber/"+id,
		dataType: "json",
		data:{type: type},
		success: function(totalPage) {
			if (pageNumber == -1)
				pageNumber = totalPage;
			// Set the 5 number page buttons.
			$("#prev2ReportHistoryPage a").html(pageNumber - 2);
			$("#prev1ReportHistoryPage a").html(pageNumber - 1);
			$("#curReportHistoryPage a").html(pageNumber);
			$("#next1ReportHistoryPage a").html(pageNumber + 1);
			$("#next2ReportHistoryPage a").html(pageNumber + 2);
			
			// Restore all buttons at first.
			$("#reportHistoryPagination li").show();
			$("#reportHistoryPagination li").removeClass("disabled");
			$(".disabledReportHistoryPage").addClass("disabled");
			
			// Hide or disable prev buttons if it could not be clicked.
			if (pageNumber - 3 <= 0) {
				$("#morePrevReportHistoryPage").hide();
			}
			if (pageNumber - 2 <= 0) {
				$("#prev2ReportHistoryPage").hide();
			}
			if (pageNumber - 1 <= 0) {
				$("#prevReportHistoryPage").addClass("disabled");
				$("#prev1ReportHistoryPage").hide();
				$("#firstReportHistoryPage").addClass("disabled");
			}
			// Hide or disable next buttons if it could not be clicked.
			if (pageNumber + 2 >= totalPage) {
				$("#moreNextReportHistoryPage").hide();
			}
			if (pageNumber + 1 >= totalPage) {
				$("#next2ReportHistoryPage").hide();
			}
			if (pageNumber >= totalPage) {
				$("#nextReportHistoryPage").addClass("disabled");
				$("#next1ReportHistoryPage").hide();
				$("#lastReportHistoryPage").addClass("disabled");
			}
		}
	});
};