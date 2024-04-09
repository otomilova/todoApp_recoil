import {Heading, VStack} from "@chakra-ui/react";
import Todos from "./components/Todos.jsx";

import TodosStats from "./components/TodosStats.jsx";
import RandomQuote from "./components/RandomQuote.jsx";


function App() {
  return (
    <VStack m='45px'>
      <Heading as='h1'>
        Todos
      </Heading>
        <RandomQuote />
      <Todos />
        <TodosStats />
    </VStack>
  )
}

export default App
