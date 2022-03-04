const content = ['<div class="column"><h2>Value Impact For Labor</h2><h3>Income growth:</h3><p>Farmers can increase their income as agricultural yield goes up and overall costs go down.</p><h3>Net Job Creation:</h3><p>This will also create new job opportunities in technology sectors for development of sensors, analytics and software.Further, additional resources will be requiered to spread awareness about the availability and use of new technology.</p><div class="btn quitar_columna" onclick="eliminarColumna($(this));">x</div></div>',' <div class="column"><h2>Value Impact For Consumer</h2><h3>Cost Savings:</h3><p>Higher agricultural yield will increase crop production and can potentially reduced food prices for end customers.</p><div class="btn quitar_columna" onclick="eliminarColumna($(this));">X</div></div>','<div class="column"><h2>Value Impact For Society & Environment</h2><h3>Lower Carbon Emissions:</h3><p>Lower consumption of agricultural chemicals (fertilizers and pesticides) and water through precision application, will lead to lower imbalance deforestation) will also and educed carbon emission. As farmlands becomes more efficient, the need for new farmland (and deforestation) will also reduce.</p><h3>Live Saved:</h3><p>Higher farm productivity will also lead to lower hunger and malnutrition.</p><div class="btn quitar_columna" onclick="eliminarColumna($(this));">X</div></div>'];

$("#agragar_columna").click(function (e) { 
    e.preventDefault();
    console.log($("#contents .column").length);
    if ($("#contents .column").length <= 4) {
        const randomPost = Math.floor(Math.random() * content.length);
        $("#contents").append(content[randomPost]);
        if ($("#contents .column").length == 5) {
            $(this).hide();
        }
    }
});
function eliminarColumna(_obj) {  
    _obj.parent().remove();
    
    if ($("#contents .column").length<5) {   
        $("#agragar_columna").show();
    }
}