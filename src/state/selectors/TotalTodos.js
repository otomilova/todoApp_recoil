import {selector} from "recoil"
import {todoState} from "../atoms/ToDoState.js"

export const statsTodos = selector({
    key: "statsTodos",
  get: ({get}) => {
      const todos = get(todoState)
     const totalNum = todos.length
      const totalCompletedNum = todos.filter((item) => item.isCompleted).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum * 100).toFixed(0);
      return {
          totalNum,
          totalCompletedNum,
          totalUncompletedNum,
          percentCompleted,
      };
  }
})