// ==========================================
// 1. STANDARD CALCULATOR IMPLEMENTATION
// ==========================================
function inputCalc(value) {
    const display = document.getElementById('calc-display');
    if (display.value === "Error") display.value = "";
    display.value += value;
}

function clearCalc() {
    document.getElementById('calc-display').value = "";
}

function solveCalc() {
    const display = document.getElementById('calc-display');
    try {
        // Safe evaluation of standard structural math expressions
        if (display.value.trim() === "") return;
        let result = eval(display.value);
        display.value = result;
    } catch (err) {
        display.value = "Error";
    }
}

function inputPercent() {
    const display = document.getElementById('calc-display');
    if(display.value !== "" && !isNaN(display.value.slice(-1))) {
        try {
            display.value = eval(display.value) / 100;
        } catch(e) {
            display.value = "Error";
        }
    }
}

function calcSpecial(type) {
    const display = document.getElementById('calc-display');
    try {
        let currentVal = eval(display.value);
        if (type === 'sqrt') {
            display.value = Math.sqrt(currentVal);
        }
    } catch (err) {
        display.value = "Error";
    }
}

// ==========================================
// 2. DIAMETER CALCULATORS LOGIC
// ==========================================
function calcDiameterFromRadius() {
    let r = parseFloat(document.getElementById('diam-radius').value);
    let output = document.getElementById('out-diam-radius');
    if (!isNaN(r)) {
        output.innerText = "Output: " + (2 * r).toFixed(2);
    } else {
        output.innerText = "Invalid Input";
    }
}

function calcDiameterFromCircum() {
    let c = parseFloat(document.getElementById('diam-circum').value);
    let output = document.getElementById('out-diam-circum');
    if (!isNaN(c)) {
        output.innerText = "Output: " + (c / Math.PI).toFixed(2);
    } else {
        output.innerText = "Invalid Input";
    }
}

function calcDiameterFromArea() {
    let a = parseFloat(document.getElementById('diam-area').value);
    let output = document.getElementById('out-diam-area');
    if (!isNaN(a) && a >= 0) {
        output.innerText = "Output: " + (2 * Math.sqrt(a / Math.PI)).toFixed(2);
    } else {
        output.innerText = "Invalid Input";
    }
}

// ==========================================
// 3. AREA CALCULATORS LOGIC
// ==========================================
function areaRectangle() {
    let w = parseFloat(document.getElementById('rect-w').value);
    let l = parseFloat(document.getElementById('rect-l').value);
    let out = document.getElementById('out-area-rect');
    out.innerText = (!isNaN(w) && !isNaN(l)) ? "Output: " + (w * l).toFixed(2) : "Invalid input";
}

function areaSquare() {
    let s = parseFloat(document.getElementById('sq-side').value);
    let out = document.getElementById('out-area-sq');
    out.innerText = (!isNaN(s)) ? "Output: " + (s * s).toFixed(2) : "Invalid input";
}

function areaTriangle() {
    let b = parseFloat(document.getElementById('tri-b').value);
    let h = parseFloat(document.getElementById('tri-h').value);
    let out = document.getElementById('out-area-tri');
    out.innerText = (!isNaN(b) && !isNaN(h)) ? "Output: " + ((b * h) / 2).toFixed(2) : "Invalid input";
}

function areaCircle() {
    let r = parseFloat(document.getElementById('circ-r').value);
    let out = document.getElementById('out-area-circ');
    out.innerText = (!isNaN(r)) ? "Output: " + (Math.PI * r * r).toFixed(2) : "Invalid input";
}

function areaParallelogram() {
    let b = parseFloat(document.getElementById('para-b').value);
    let h = parseFloat(document.getElementById('para-h').value);
    let out = document.getElementById('out-area-para');
    out.innerText = (!isNaN(b) && !isNaN(h)) ? "Output: " + (b * h).toFixed(2) : "Invalid input";
}

function areaTrapezoid() {
    let a = parseFloat(document.getElementById('trap-a').value);
    let b = parseFloat(document.getElementById('trap-b').value);
    let h = parseFloat(document.getElementById('trap-h').value);
    let out = document.getElementById('out-area-trap');
    out.innerText = (!isNaN(a) && !isNaN(b) && !isNaN(h)) ? "Output: " + (((a + b) / 2) * h).toFixed(2) : "Invalid input";
}

// ==========================================
// 4. VOLUME CALCULATORS LOGIC
// ==========================================
function volCube() {
    let s = parseFloat(document.getElementById('cube-s').value);
    let out = document.getElementById('out-vol-cube');
    out.innerText = (!isNaN(s)) ? "Output: " + Math.pow(s, 3).toFixed(2) : "Invalid input";
}

function volCylinder() {
    let r = parseFloat(document.getElementById('cyl-r').value);
    let h = parseFloat(document.getElementById('cyl-h').value);
    let out = document.getElementById('out-vol-cyl');
    out.innerText = (!isNaN(r) && !isNaN(h)) ? "Output: " + (Math.PI * r * r * h).toFixed(2) : "Invalid input";
}

// ==========================================
// 5. PERIMETER CALCULATORS LOGIC
// ==========================================
function perRectangle() {
    let l = parseFloat(document.getElementById('per-rect-l').value);
    let w = parseFloat(document.getElementById('per-rect-w').value);
    let out = document.getElementById('out-per-rect');
    out.innerText = (!isNaN(l) && !isNaN(w)) ? "Output: " + (2 * (l + w)).toFixed(2) : "Invalid input";
}

function perSquare() {
    let s = parseFloat(document.getElementById('per-sq-s').value);
    let out = document.getElementById('out-per-sq');
    out.innerText = (!isNaN(s)) ? "Output: " + (4 * s).toFixed(2) : "Invalid input";
}

function perTriangle() {
    let a = parseFloat(document.getElementById('per-tri-a').value);
    let b = parseFloat(document.getElementById('per-tri-b').value);
    let c = parseFloat(document.getElementById('per-tri-c').value);
    let out = document.getElementById('out-per-tri');
    out.innerText = (!isNaN(a) && !isNaN(b) && !isNaN(c)) ? "Output: " + (a + b + c).toFixed(2) : "Invalid input";
}

function perCircle() {
    let r = parseFloat(document.getElementById('per-circ-r').value);
    let out = document.getElementById('out-per-circ');
    out.innerText = (!isNaN(r)) ? "Output: " + (2 * Math.PI * r).toFixed(2) : "Invalid input";
}

function perParallelogram() {
    let a = parseFloat(document.getElementById('per-para-a').value);
    let b = parseFloat(document.getElementById('per-para-b').value);
    let out = document.getElementById('out-per-para');
    out.innerText = (!isNaN(a) && !isNaN(b)) ? "Output: " + (2 * (a + b)).toFixed(2) : "Invalid input";
}

function volCone() {
    let r = parseFloat(document.getElementById('cone-r').value);
    let h = parseFloat(document.getElementById('cone-h').value);
    let out = document.getElementById('out-vol-cone');
    out.innerText = (!isNaN(r) && !isNaN(h)) ? "Output: " + ((Math.PI * r * r * h) / 3).toFixed(2) : "Invalid input";
}

function volSphere() {
    let r = parseFloat(document.getElementById('sph-r').value);
    let out = document.getElementById('out-vol-sph');
    out.innerText = (!isNaN(r)) ? "Output: " + ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(2) : "Invalid input";
}

function volPrism() {
    let w = parseFloat(document.getElementById('prism-w').value);
    let h = parseFloat(document.getElementById('prism-h').value);
    let l = parseFloat(document.getElementById('prism-l').value);
    let out = document.getElementById('out-vol-prism');
    out.innerText = (!isNaN(w) && !isNaN(h) && !isNaN(l)) ? "Output: " + (w * h * l).toFixed(2) : "Invalid input";
}