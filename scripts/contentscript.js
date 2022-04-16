browser.runtime.onMessage.addListener((message) =>{
    if(message.command == 'scrape'){
/*        manufacturerNumber = document.querySelectorAll('[data-testid="mfr-number"]')[0].textContent;*/
        overview = document.querySelectorAll('[data-evg="product-details-overview"]')[0].childNodes[0].childNodes[0].childNodes[1];
        manufacturerNumber = overview.childNodes[2].childNodes[1].childNodes[0].textContent;
        description = overview.childNodes[3].childNodes[1].childNodes[0].textContent;
        detailedDescription = overview.childNodes[5].childNodes[1].childNodes[0].textContent;
        manufacturer = overview.childNodes[1].childNodes[1].childNodes[0].childNodes[0].textContent;
        digikeyPartNumber = overview.childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent.split(' - ')[0];
        browser.runtime.sendMessage({
            msg: "success!!",
            manufacturerNumber: manufacturerNumber,
            description: description,
            detailedDescription: detailedDescription,
            manufacturer: manufacturer,
            digikeyPartNumber: digikeyPartNumber,
            url: window.location.href,
        });
    }
});

