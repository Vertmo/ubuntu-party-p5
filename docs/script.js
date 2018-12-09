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

let cp = ColorPicker(
    document.getElementById('slide'),
    document.getElementById('picker'),
    (hex, hsv, rgb) => {
        $('#colorR').val('r: '+rgb.r);
        $('#colorG').val('g: '+rgb.g);
        $('#colorB').val('b: '+rgb.b);
        $('.colorDisplay').each(function(i, obj) {
            $(obj).css('background-color', hex);
            if(rgb.r + rgb.b + rgb.g > 3*255/2) {
                $(obj).css('color', '#000000');
            } else {
                $(obj).css('color', '#ffffff');
            }
        });
    }
);

cp.setRgb({ r: 233, g: 84, b:32 });
