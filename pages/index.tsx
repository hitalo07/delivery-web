import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Pressable,
  ScrollView,
  Text,
} from "native-base";

interface IProduct {
  name: string
  description: string
  value: number
}

const hamburger: IProduct[] = [
  {
    name: 'X-Tudo',
    description: 'Descricao',
    value: 20
  },
  {
    name: 'X-Burger',
    description: 'Descricao',
    value: 12
  },
  {
    name: 'X-Bacon',
    description: 'Descricao',
    value: 15
  },
  {
    name: 'X-Salada',
    description: 'Descricao',
    value: 10
  }
]

// Start editing here, save and see your changes.
export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleSelect = (product: IProduct) => {
    const list = [...products, product]
    setProducts(list);
  }

  const total = () => {
    return products.reduce((acc, cur) => {
      return acc + cur.value
    }, 0);
  }

  return (
    <Box backgroundColor="white" flex="1">
      <Box p="4" backgroundColor="blue.500">
        <Box flexDirection="row" justifyContent="space-between">
          <Heading size="md" color="white">Mega Massa</Heading>
          <Text color="white">Hamburger</Text>
          <Text color="white">Bebidas</Text>
          <Text color="white">Endereço</Text>
          <Text color="white">Finalizar</Text>
        </Box>
      </Box>
      <Box p="4" flex="1">
        <ScrollView horizontal={false}>
          {hamburger.map((item, index) => (
            <Pressable key={index} p="4" mb="4" backgroundColor="gray.200" alignContent="center" onPress={() => handleSelect(item)}>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.value}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Box flex="1" flexDirection="row" justifyContent="space-evenly">
          <Box>
            {products.map((item, index) => (
              <Box key={index} p="2" flexDirection="row">
                <Text>{item.name} - </Text>
                <Text>R$ {item.value}</Text>
              </Box>
            ))}
          </Box>
          <Box>
            <Text>Finalize seu pedido</Text>
            <Text>Total: {total()}</Text>
            <a href={`https://api.whatsapp.com/send?phone=%99981965118&text=valor&text=${total()}`}>Finalizar</a>
          </Box>
        </Box>
      </Box>
      <Box>
        Footer
      </Box>
    </Box>
  );
}

