'use strict';

export function getTranslation( locale ){
    if( locale == "fr" ){
        return fr;
    }
    else if( locale == "en" ){
        return en;
    }
    return null;
}

var fr = {
    "locales": "fr-FR",
    "messages": {
        "photos": "Le {takenDate, date, long}, {name} {numPhotos, plural,\n  =0 {n'a pas pris de photographies.}\n  =1 {a pris une photographie.}\n  other {a pris # photographies.}\n}\n"
    }
};

var en = {
    "locales": "en-EN",
    "messages": {
        "photos": "On {takenDate, date, long}, {name} {numPhotos, plural,\n  =0 {did not took any picture.}\n  =1 {took a picture.}\n  other {took # pictures.}\n}\n"
    }
};