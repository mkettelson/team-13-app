const input = document.querySelector("#input");

input.addEventListener("change", () => {
  const file = input.files.item(0);
  fileToText(file, (text) => {
    save(text, "fileName.txt", "text/plain");
  });
});

function fileToText(file, callback) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    callback(reader.result);
  };
}

function save(content, fileName, mime) {
  const blob = new Blob([content], {
    tipe: mime
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
}