let samples = [{ id:'code1', password:'labase' },
               { id:'code2', password:'canevas' },
               { id:'code3', password:'feutre' },
               { id:'code4', password:'cercle' },
               { id:'code5', password:'alternative' },
               { id:'code6', password:'spoiler'},
               { id:'act31', password:'arcenciel' },
               { id:'act32', password:'facile' },
               { id:'act33', password:'highscore' },
               { id:'act34', password:'random' },
               { id:'act35', password:'musique' }];

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
