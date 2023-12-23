"use client"
import Table from '@/components/TableBody';
import TableHead from '@/components/TableHead';
import React, { useState } from 'react'
import { toast } from'react-toastify';

const HomePage = () => {
  const [todo,setTodo] = useState({
    title: '',
    description: '',
  })

  const setTitle=(e)=>setTodo({
    ...todo,
    ['title']: e.target.value
  })

  const setDescription = (e) =>
    setTodo({
      ...todo,
      ["description"]: e.target.value,
    });

    const reset=(e)=>setTodo({
      title:"",
      description:'',
    })
    const onSubmitHandler = (e) =>{
      e.preventDefault();
      try {
        console.log(todo);
        //api code
        toast.success("Todo Created");
        reset();
      } catch (error) {
        toast.error("error");
      }
    }
  return (
    <>
      <section className="w-full px-3 py-24 md:w-[70%] mx-auto">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <input
              type="text"
              value={todo.title}
              onChange={setTitle}
              className="w-full px-3 py-2 h-10 outline-none border-2 border-purple-500"
              placeholder="Enter Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              value={todo.description}
              onChange={setDescription}
              className="w-full px-3 py-2 outline-none border-2 border-purple-500"
              placeholder="Enter Description"
              rows={10}
              cols={30}
            />
          </div>
          <div className="mb-3">
            <button className="px-12 py-3 bg-purple-500 hover:bg-purple-900 text-white duration-300 trasintion-all">
              Add Todo
            </button>
          </div>
        </form>
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs uppercase bg-purple-500">
            <TableHead/>
          </thead>
          <tbody>
            {Array(10)
              .fill(null)
              .map((c, i) => {
                return <Table key={i} />;
              })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default HomePage