function convertHexToRGB( colour ) {
    let r,g,b;
    if ( colour.charAt(0) === '#' ) {
        colour = colour.substr(1);
    }
    if ( colour.length === 3 ) {
        colour = colour.substr(0,1) + colour.substr(0,1) + colour.substr(1,2) + colour.substr(1,2) + colour.substr(2,3) + colour.substr(2,3);
    }
    r = colour.charAt(0) + '' + colour.charAt(1);
    g = colour.charAt(2) + '' + colour.charAt(3);
    b = colour.charAt(4) + '' + colour.charAt(5);
    r = parseInt( r,16 );
    g = parseInt( g,16 );
    b = parseInt( b ,16);
    document.getElementById('rgbColor').children[0].textContent = 'rgb(' + r + ',' + g + ',' + b + ')';
    rgbToHsl(r, g, b)
}

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) { h = s = 0; }
    else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }
    document.getElementById('hslColor').children[0].textContent = `hsl(${(h*100+0.5)|0}, ${((s*100+0.5)|0)}%, ${((l*100+0.5)|0)}%)`
}

function doSetNewColor(newColor) {
    document.getElementById('hexColor').children[0].textContent = newColor;
    document.getElementById('demoColor').style.backgroundColor = newColor;
    document.getElementById('container').style.borderColor = newColor;
    convertHexToRGB(newColor)
}
