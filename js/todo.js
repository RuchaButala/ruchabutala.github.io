var indexTask = 0;

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
		targetElement.id = "tasks" + indexTask;
		targetElement.name = "tasksList";
		targetElement.class = "custom-control-input";

		var label = document.createElement("label");
		label.setAttribute("for", "tasks" + indexTask);
		label.id = "tasksLabel" + indexTask;
		label.class = "custom-control-label";
		label.class = "lead";

		label.appendChild(document.createTextNode(task));

		var target = document.getElementById("list");
		target.appendChild(targetElement);
		target.appendChild(label);

		var breakLine = document.createElement("br");
		target.appendChild(breakLine);
		indexTask++;
	}

	document.getElementById("task").value = "";
}

function strikeThrough() {
	let elements = document.getElementsByName("tasksList");
	for (var i = 0; i < elements.length; i++) {
		let target = document.getElementById("tasksLabel" + i);
		if (elements[i].checked) {
			target.style.textDecoration = "line-through";
		} else {
			target.style.textDecoration = "none";
		}
	}
}

setInterval(strikeThrough, 1000);

// function clearSelTask() {
// 	let elements = document.getElementsByName("tasksList");
// 	for (var i = 0; i < elements.length; i++) {
// 		let targetLabel = document.getElementById("tasksLabel" + i);
// 		if (elements[i].checked) {
// 			// targetLabel.parentNode.removeChild(targetLabel);
// 			// elements[i].parentNode.removeChild(elements[i]);

// 			let element = document.getElementById("tasks" + i);

// 			// targetLabel.innerHTML = "";
// 			// element.parentNode.removeChild();

// 			elements[i].nextSibling.remove();
// 			elements[i].remove();
// 		}
// 	}
// }

function clearAllTask() {
	var list = document.getElementById("list");
	list.innerHTML = "";
}
