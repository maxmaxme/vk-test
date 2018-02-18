function api(method, params, successCallback, errorCallback) {

    var ajaxTime= new Date().getTime();

    $.post('/API/' + method, params)
        .done(function(data) {

            var totalTime = new Date().getTime()-ajaxTime;

            $('#page_load_time').append('<br>' + totalTime + 'ms');

            if (data['success']) {
                if (successCallback)
                    successCallback(data['result']);
            } else {
                if (errorCallback)
                    errorCallback(data['error']);
                else
                    alert('Ошибка: ' + data['error']);
            }
        });

}


function getTemplate(template, data) {
    return templates[template].replace(/{{([A-z0-9]+)}}/g, function(original, val) {
        return data[val] ? data[val] : '';
    })
}