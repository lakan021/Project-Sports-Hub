let checkboxes = document.getElementsByClassName('toggle-checkbox');
for (let i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('change', function() {
		if (this.checked) {
            
			for (let j = 0; j < checkboxes.length; j++) {
				if (checkboxes[j] !== this) {
					checkboxes[j].checked = false;
				}
			}
		}
	});
}