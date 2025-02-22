import http from "./httpService";

export function createTodo(body: unknown) {
    return http.post("/createTodo",body);
}

export function getTodos() {
    return http.get("/tasks");
}

export function deleteTodo(id: number) {
    return http.delete(`/deleteTodo/${id}`);
}