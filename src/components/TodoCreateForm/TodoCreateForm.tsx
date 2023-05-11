'use client';
import { IItem,useTodoStore } from "@/stores/useTodoStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';


const TodoCreateForm = () => {
    const { handleSubmit,register } = useForm();
    const idGen = uuidv4();
    const { addTodo } = useTodoStore((store) => store);

    const submit = (data:any) =>{
        addTodo({...data, id: idGen});
    };

  

    return (
        <>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("todoItem")}/>
            <button type="submit">Adicionar item</button>
        </form>
        </>
    )
}


export default TodoCreateForm;