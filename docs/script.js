let samples = [{ id:'example', password:'exemple' }];

samples.forEach(s => {
    $('#'+s.id+'Button').click(() => {
        if($('#'+s.id+'Passwd').val() == s.password) {
            $('#'+s.id+'Passwd').addClass('is-valid'); $('#'+s.id+'Passwd').removeClass('is-invalid');
            $('#'+s.id+'Button').prop('disabled', true); $('#'+s.id+'Passwd').prop('readonly', true);
            $('#'+s.id+'Collapse').collapse();
        }
        else $('#'+s.id+'Passwd').addClass('is-invalid');
    });
})
