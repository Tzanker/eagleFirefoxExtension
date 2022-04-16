document.addEventListener('DOMContentLoaded',  ()=> {
    var checkButton = document.getElementById('generate');
    checkButton.addEventListener('click', () => {
        browser.tabs.query({active:true, currentWindow:true}).then((tabs) =>{
            browser.tabs.sendMessage(tabs[0].id, {command: "scrape"});
        });
    });
});


browser.runtime.onMessage.addListener((request)=>{
    newDescription = "<h3>" + request.manufacturerNumber + "</h3>\n" +
        "\n" +
        "<h5>Manufacturer</h5>\n" +
        request.manufacturer + "\n" +
        " <br>\n" +
        "<h5>Supplier</h5>\n" +
        "<a href=" + request.url +">" + request.digikeyPartNumber + "</a>\n" +
        "\n" +
        "<h5>Description</h5>\n"
        + request.detailedDescription +
        "\n";
    navigator.clipboard.writeText(newDescription);

});