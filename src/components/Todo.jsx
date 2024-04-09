import {Button, Checkbox,  Flex, Text} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {todoState} from "../state/atoms/ToDoState.js";



const Todo = ({todo}) => {
    const [todos, setTodos] = useRecoilState(todoState);
    const index = todos.findIndex((todoItem) => todoItem.id === todo.id)

    function deleteTodo(){
        setTodos((prevTodos) => {
            return prevTodos.filter(td => td.id !== todo.id)
        })
        }


    function completeTodo(){
        const newTodos = replaceItem(todos, index, {
            ...todo,
            isCompleted: !todo.isCompleted,
        });
        setTodos(newTodos)
    }
    return (
        <Flex direction='row' gap='20px' m='1em'  align='center' justify='space-between' >
            <Flex direction='row'   gap='10px' align='center' >
            <Checkbox isChecked={todo.isCompleted} onChange={completeTodo} colorScheme='green' />
                {todo.isCompleted ? <Text as='del'>{todo.text}</Text> : <Text>{todo.text}</Text> } </Flex>
            <Flex direction='row'  align='center'  >
                <Button onClick={deleteTodo}>X</Button> </Flex>


        </Flex>
    );
};

function replaceItem(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export default Todo;