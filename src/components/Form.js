import React, {useState, useEffect} from 'react'

const initialForm = {
  vehiculo: '',
  modelo: '',
  precio: '',
  ensamblado: ''
}

const Form = () => {

  const {vehiculo, setVehiculo} = useState{[initialForm]};

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {

  }

  return (
    <div>
      <form id="formulario" onSubmit={handleSubmit}>
      <h3>Registro de Vehículos</h3>
      <hr />
        <div>
          <label>Vehículo</label>
          <input id="inputVehiculo" name="vehiculo" type="text" onChange={handleChanged} value={form.vehiculo} />
        </div>
        <div>
          <label>Modelo</label>
          <input id="inputModelo" name="modelo" type="number" onChange={handleChanged} value={form.modelo}/>
        </div>
        <div>
          <label>Precio</label>
          <input id="inputPrecio" name="precio" type="number" onChange={handleChanged} value={form.precio}/>
        </div>
        <div>
          <label>Ensamblado por</label>
          <input id="inputEnsamble" name="ensamble" type="text" onChange={handleChanged} value={form.ensamblado}/>
        </div>
        <div>
          <button id="registro">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Form
