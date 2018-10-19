let file = document.getElementById('file');
file.addEventListener('change', function() {
    if(file && file.value) {
        let val = file.files[0].name;
        document.getElementById('value').innerHTML = "Selected" + val;
    }
});