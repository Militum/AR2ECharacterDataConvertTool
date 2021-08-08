import ValidationError, { VALIDATION_ERROR_ANCHOR, VALIDATION_ERROR_DOMAIN } from "./ValidationError";

function CheckUrl(url) {
    const domain = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    if (domain !== "charasheet.vampire-blood.net") {
        throw new ValidationError(VALIDATION_ERROR_DOMAIN);
    }
    const anchors = url.split('#');
    console.log(anchors);
    if (anchors.length >= 2) {
        throw new ValidationError(VALIDATION_ERROR_ANCHOR);
    }
}

export default CheckUrl;