import {selector} from "recoil"
import {todoState} from "../atoms/ToDoState.js";
import {todoListFilterState} from "../atoms/todoFilteredState.js";

export const filteredTodoListState = selector({
    key: 'FilteredTodoList',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isCompleted);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isCompleted);
            default:
                return list;
        }
    },
});