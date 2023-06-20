$(function(){
})

function showContent(tipo,data,week){
    event.stopPropagation();
    var ficheiro1=`
    <div class="w3-margin w3-padding-large w3-white">
    <h2 class="w3-center">Preencha o Formulário</h2>

    <form class="w3-container" method="POST" action="/add/${tipo}/${data}?week=${week}">
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="empratamento">Empratamento:</label>
        <input class="w3-col" type="number" id="empratamento" name="empratamento">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="sopa">Sopa:</label>
        <input class="w3-col" type="text" id="sopa" name="sopa">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="prato">Prato:</label>
        <input class="w3-col" type="text" id="prato" name="prato">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="acompanhamento1">Acompanhamento 1:</label>
        <input class="w3-col" type="text" id="acompanhamento1" name="acompanhamento1">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="acompanhamento2">Acompanhamento 2:</label>
        <input class="w3-col" type="text" id="acompanhamento2" name="acompanhamento2">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="energia">Energia:</label>
        <input class="w3-col" type="number" id="energia" name="energia">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="lipidos">Lipidos:</label>
        <input class="w3-col" type="number" id="lipidos" name="lipidos">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="lipidosSaturados">Lipidos Saturados:</label>
        <input class="w3-col" type="number" id="lipidosSaturados" name="lipidosSaturados">
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="hidratos">Hidratos:</label>
        <input class="w3-col" type="number" id="hidratos" name="hidratos</div>

        <div class="w3-row w3-section">
          <label class="w3-col input-label" for="acucares">Açúcares:</label>
          <input class="w3-col" type="number" id="acucares" name="acucares">
        </div>
      
        <div class="w3-row w3-section">
          <label class="w3-col input-label" for="fibras">Fibras:</label>
          <input class="w3-col" type="number" id="fibras" name="fibras">
        </div>
      
        <div class="w3-row w3-section">
          <label class="w3-col input-label" for="proteina">Proteína:</label>
          <input class="w3-col" type="number" id="proteina" name="proteina">
        </div>
      
        <div class="w3-row w3-section">
          <label class="w3-col input-label" for="sal">Sal:</label>
          <input class="w3-col" type="number" id="sal" name="sal">
        </div>
      
        <div class="w3-center w3-margin-top">
          <button class="w3-button w3-black" type="submit">Submit</button>
        </div>
      </form>
      </div>
      `
    $("#display").empty()
    $("#display").append(ficheiro1)
    $("#display").modal() 
}


function editContent(refeicao,tipo,data,week){
  event.stopPropagation();
  var ficheiro1=`
  <div class="w3-margin w3-padding-large w3-white">
  <h2 class="w3-center">Preencha o Formulário</h2>

  <form class="w3-container" method="POST" action="/edit/${tipo}/${data}?week=week">
    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="vegetariano">Vegetariano:</label>
        <div class="w3-col" style="margin-top: -8%">
          <input class="w3-check" type="checkbox" id="vegetariano" name="vegetariano" style="transform: scale(1); margin-left: 100px;">
        </div>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="empratamento">Empratamento:</label>
      <input class="w3-col" type="number" id="empratamento" name="empratamento" value=${refeicao.empratamento}>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="sopa">Sopa:</label>
      <input class="w3-col" type="text" id="sopa" name="sopa" value="${refeicao.sopa}">
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="prato">Prato:</label>
      <input class="w3-col" type="text" id="prato" name="prato" value="${refeicao.prato}">
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="acompanhamento1">Acompanhamento 1:</label>
      <input class="w3-col" type="text" id="acompanhamento1" name="acompanhamento1" value="${refeicao.acompanhamento1}">
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="acompanhamento2">Acompanhamento 2:</label>
      <input class="w3-col" type="text" id="acompanhamento2" name="acompanhamento2" value="${refeicao.acompanhamento2}">
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="energia">Energia:</label>
      <input class="w3-col" type="number" id="energia" name="energia" value=${refeicao.energia}>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="lipidos">Lipidos:</label>
      <input class="w3-col" type="number" id="lipidos" name="lipidos" value=${refeicao.lipidos}>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="lipidosSaturados">Lipidos Saturados:</label>
      <input class="w3-col" type="number" id="lipidosSaturados" name="lipidosSaturados" value=${refeicao.lipidosSaturados}>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="hidratos">Hidratos:</label>
      <input class="w3-col" type="number" id="hidratos" name="hidratos" value=${refeicao.hidratos}>
    </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="acucares">Açúcares:</label>
        <input class="w3-col" type="number" id="acucares" name="acucares" value=${refeicao.acucares}>
      </div>
    
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="fibras">Fibras:</label>
        <input class="w3-col" type="number" id="fibras" name="fibras" value=${refeicao.fibras}>
      </div>
    
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="proteina">Proteína:</label>
        <input class="w3-col" type="number" id="proteina" name="proteina" value=${refeicao.proteina}>
      </div>
    
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="sal">Sal:</label>
        <input class="w3-col" type="number" id="sal" name="sal" value=${refeicao.sal}>
      </div>
    
      <div class="w3-center w3-margin-top">
        <button class="w3-button w3-black" type="submit">Submit</button>
      </div>
    </form>
    </div>
    `
  $("#display").empty()
  $("#display").append(ficheiro1)
  $("#display").modal() 
}

