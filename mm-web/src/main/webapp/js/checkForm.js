/*Before posting a rule, execute this function*/
var handleForm = function() {
	var odbattrs = $("#odbsortable2").sortable('toArray').toString().split(",");
	var cmsattrs = $("#cmssortable2").sortable('toArray').toString().split(",");
	
	$("#attributesDiv").empty();
	
	var size = 0;
	$.each(odbattrs, function(index, odbattr) {
	if (odbattr != "" && cmsattrs[index] != undefined && cmsattrs[index] != "") {
		$("#attributesDiv").append("<input type='hidden' id='attributes["+size+"].odbAttribute' name='attributes["+size+"].odbAttribute' value='"+odbattr.substr(4)+"'></input>");
		$("#attributesDiv").append("<input type='hidden' id='attributes["+size+"].cmsAttribute' name='attributes["+size+"].cmsAttribute' value='"+cmsattrs[index].substr(4)+"'></input>");
		size++;
	}});
	
	$("#odbClass").val($("#odbClassList").val());
	$("#cmsClass").val($("#cmsClassList").val());
	
	// bootstrap tooltip.
	if ($("#name").val() == "") {
		$("#name").tooltip("show");
		setTimeout(function() {hideTooltip("#name");},2000);
		return false;
	}
	
	if ($("#creator").val() == "") {
		$("#creator").tooltip("show");
		setTimeout(function() {hideTooltip("#creator");},2000);
		return false;
	}
	
//	if ($("#odbCollection").val() == "") {
//		$("#odbCollection").tooltip("show");
//		setTimeout(function() {hideTooltip("#odbCollection");},2000);
//		return false;
//	}
	
	if ($("#cmsQuery").val() == "") {
		$("#cmsQuery").tooltip("show");
		setTimeout(function() {hideTooltip("#cmsQuery");},2000);
		return false;
	}
	if (size == 0) {
		$("#attributesDiv").tooltip("show");
		setTimeout(function() {hideTooltip("#attributesDiv");},2000);
		return false;
	}
	alert("This kind of");
	return true;
};

/* Hide tooltip manually.*/
function hideTooltip(element) {
	$(element).tooltip("hide");
}

/*After selecting rules on the job creating page.*/
var appendSelectedRules = function() {
	$("#ruleSelectedList").empty();
	var size = 0;
	$('#ruleList input').each(function() {
		var checkbox = $(this);
		if (checkbox.prop("checked")) {
			if(size % 2 == 0)
				$("#ruleSelectedList").append("<li class='pull-left' title='"+checkbox[0].nextSibling.nodeValue+"'>"+checkbox[0].nextSibling.nodeValue+"</li>"); // Get the next text of the checkbox
			else
				$("#ruleSelectedList").append("<li class='pull-right' title='"+checkbox[0].nextSibling.nodeValue+"'>"+checkbox[0].nextSibling.nodeValue+"</li><br/>");
			size++;
		}
	});
	$("#ruleListModal").toggle(500);
};

/*Before posting a job, execute this function */
var checkJobForm = function() {
	if ($("#jobName").val() == "") {
		$("#jobName").tooltip("show");
		setTimeout(function() {hideTooltip("#jobName");},2000);
		return false;
	}
	if ($("#jobOwner").val() == "") {
		$("#jobOwner").tooltip("show");
		setTimeout(function() {hideTooltip("#jobOwner");},2000);
		return false;
	}
	var boolRuleList = false;
	$('#ruleList input').each(function() {
		var checkbox = $(this);
		if (checkbox.prop("checked"))
			boolRuleList = true;
	});
	if (!boolRuleList) {
		$("#selectRuleLabel").tooltip("show");
		setTimeout(function() {hideTooltip("#selectRuleLabel");},2000);
	}
	return boolRuleList;
};

// reset the rules of the job in job creating page
var resetSelectedRules = function() {
	$("#ruleSelectedList").empty();
};

