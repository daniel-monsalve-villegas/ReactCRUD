import React, {useState} from 'react':
import Form from '../components/Form'
import List from '../components/List'

const initialDates = [
  {
  id: 1,
  vehiculo: "Sedán Grand Touring 2.0",
  modelo: "2022",
  precio: "99.559.000",
  ensamblado: "Mazda",
  },
  {
    id: 2,
    vehiculo: "Swift Hibrido Mt",
    modelo: "2022",
    precio: "64.990.000",
    ensamblado: "Suzuki",
  },
  {
    id: 3,
    vehiculo: "Gol 1.6 Trendline",
    modelo: "2019",
    precio: "37.600.000",
    ensamblado: "Volkswagen",
  }
];

const Main = () => {
  const [dates, setDates] = useState[initialDates];

  return (
    <div>
      <Form>
      <List data={dates}>
    </div>
  )
}

export default Main
