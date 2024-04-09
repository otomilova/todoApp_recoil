import {Button, Input, useToast, Box, Flex, useDisclosure} from "@chakra-ui/react";
import {todoState} from "../state/atoms/ToDoState.js";
import {useRecoilValue, useSetRecoilState} from "recoil";
import React, {useState} from "react";
import Todo from "./Todo.jsx";

import {filteredTodoListState} from "../state/selectors/filteredTodoListState.js";
import {TodoListFilters} from "./TodoListFilters.jsx";
import Alert from "./Alert.jsx";



const Todos = () => {
    const setTodos = useSetRecoilState(todoState);
    const todos = useRecoilValue(filteredTodoListState);
    const [inputText, setInputText] = useState("");
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };

function addTodo() {
    (inputText.length > 0) ?
       setTodos((prevTodos) => [...prevTodos, {id: getId(), text: inputText, isCompleted: false}])
        :  toast({
            title: 'Error',
            description: "Please enter a todo",
            variant:'left-accent',
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    setInputText("")
}

function handleInputChange(e) {
    setInputText(e.target.value)
}

function clearTodos() {
    setTodos([])
    onClose()
}

    return (
        <Box w='40%'>
            <TodoListFilters />
            <Input value={inputText} onChange={handleInputChange} type="text" id='todoInput' placeholder="Add a todo" mb='1em' mt='1em' onKeyDown={handleKeyDown} />

            <Flex direction='row-reverse' gap='1em'>
            <Button onClick={addTodo} colorScheme='green'>Add Todo</Button>
                {todos.length > 0 ? (<Button onClick={onOpen} colorScheme='red' >Clear Todos</Button>) : null}
            </Flex>

            {todos.map((todo) => {
                return (
                    <Todo  key={todo.id} todo={todo}/>
                )
            })}
            <Alert onClose={onClose} isOpen={isOpen} cancelRef={cancelRef} clearTodos={clearTodos}/>


        </Box>
    );
};


let id = 0;
function getId() {
    return id++;
}

export default Todos;