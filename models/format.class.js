class Format {

    
    static shortenText(text, limit) {
        let description = text;
        let stringLength = description.length
        let stringDifference = stringLength - limit;
        let finalString = description.substring(0, stringLength - stringDifference);
        return (limit < stringLength) ? finalString + '...' : description;
    }


    static currency(obj, currency) {
        return obj.toFixed(2).replace('.', ',') + ' ' + currency;
    }
}