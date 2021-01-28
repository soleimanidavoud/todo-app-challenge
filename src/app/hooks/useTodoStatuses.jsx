import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import permissions from "../util/permissions";

export default function useTodoStatuses(todoId) {
  const { getTodo } = useContext(TodoContext);
  const [allowedStatuses, setAllowedStatuses] = useState([]);

  useEffect(() => {
    const todo = getTodo(todoId);
    setAllowedStatuses(permissions[todo.status]);
  }, []);

  return { allowedStatuses };
}
