import type TaskCredentials from "./TaskCredentials";

export type Action = 
|{type:'tasks/add', payload: TaskCredentials }
|{type:'tasks/changeStatus', payload:string} // id это string в данном случае
|{type:'tasks/remove', payload:string} 

// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react 
// npm install @mui/icons-material
// npm install --save uid       - генерирует уникальное значение

