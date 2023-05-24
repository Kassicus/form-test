var nameValue = document.getElementById("randomID").value;

function update_values() {
    nameValue = document.getElementById("randomID").value;
}

function show_value() {
    update_values();
    window.alert(nameValue);
}