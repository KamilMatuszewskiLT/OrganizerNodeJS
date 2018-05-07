function dataInNewWindow(data) {
    var newWindow = window.open("", Math.random(), "width=300,height=300,scrollbars=1,resizable=1");
    var content = "";
    var prefix = "<!DOCTYPE html><html><head></head><body>";
    var sufix = "</body></html>";
    content += prefix;
    content += data;
    content += sufix;
    newWindow.document.open();
    newWindow.document.write(content);
    newWindow.document.close();
}