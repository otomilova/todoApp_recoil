import {useRecoilValue} from "recoil";
import {statsTodos} from "../state/selectors/TotalTodos.js";
import {Stat, StatGroup, StatLabel, StatNumber} from "@chakra-ui/react";




const TodosStats = () => {
    const totalTodoState = useRecoilValue(statsTodos);
    return (
        <StatGroup w='fit-content' gap='2em'>
            <Stat >
                <StatLabel >Total</StatLabel>
                <StatNumber>{totalTodoState.totalNum}</StatNumber>

            </Stat>

            <Stat >
                <StatLabel >Completed</StatLabel>
                <StatNumber>{totalTodoState.totalCompletedNum}</StatNumber>

            </Stat>
            <Stat >
                <StatLabel >Uncompleted</StatLabel>
                <StatNumber>{totalTodoState.totalUncompletedNum}</StatNumber>

            </Stat>


            <Stat>
                <StatLabel minW='100px' >% Completed</StatLabel>
                <StatNumber>{totalTodoState.percentCompleted}</StatNumber>

            </Stat>
        </StatGroup>

    );
};

export default TodosStats;

