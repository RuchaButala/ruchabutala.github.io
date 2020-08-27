function addTask() {
	var task = document.getElementById("task").value;
	console.log(task);

	var message = document.getElementById("message");

	if (task === "") {
		message.innerHTML = "Empty Task!";
		message.style.color = "Red";
	} else {
		message.innerHTML = " ";
		var targetElement = document.createElement("input");
		targetElement.type = "checkbox";
		targetElement.id = "tasks";
		targetElement.class = "custom-control-input";

		var label = document.createElement("label");
		label.setAttribute("for", "tasks");
		label.class = "custom-control-label";

		label.appendChild(document.createTextNode(task));

		var target = document.getElementById("list");
		target.appendChild(targetElement);
		target.appendChild(label);

		var breakLine = document.createElement("br");
		target.appendChild(breakLine);
	}

	document.getElementById("task").value = "";
}

function clearTask() {
	var list = document.getElementById("list");
	list.innerHTML = "";
}
