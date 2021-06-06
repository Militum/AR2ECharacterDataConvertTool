function CheckUrl(url) {
    const domain = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    console.log(domain);
    if (domain !== "charasheet.vampire-blood.net") {
        return false;
    }
    return true;
}

export default CheckUrl;