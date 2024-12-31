'use client'
import { useEffect, useState } from "react"
import React  from 'react'
import axios from 'axios'
import { toast } from "react-toastify"

const Table = ({todos , fetchTodos}) => {

    const deleteTodo = async (id) => {
        const response = await axios.delete('/api', {
            params: {
                _id: id
            }
        })
        fetchTodos();
        toast.success(response.data.msg);
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const Complete = async (id) => {
        const response = await axios.put('/api', {}, {
            params: {
                _id: id
            }
        });
        fetchTodos()
        toast.success(response.data.msg);
    }

    return (
        <div className="relative overflow-x-auto mx-auto mt-10 max-w-4xl shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
                <thead className="text-lg uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-semibold text-gray-700 dark:text-gray-200">ID</th>
                        <th scope="col" className="px-6 py-3 font-semibold text-gray-700 dark:text-gray-200">Title</th>
                        <th scope="col" className="px-6 py-3 font-semibold text-gray-700 dark:text-gray-200">Description</th>
                        <th scope="col" className="px-6 py-3 font-semibold text-gray-700 dark:text-gray-200">Status</th>
                        <th scope="col" className="px-6 py-3 text-center font-semibold text-gray-700 dark:text-gray-200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className={`px-6 py-4 ${todo.isCompleted ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-100'}`}>{todo.title}</td>
                            <td className={`px-6 py-4 ${todo.isCompleted ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-100'}`}>{todo.description}</td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${todo.isCompleted ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                                    {todo.isCompleted ? 'Completed' : 'Pending'}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button
                                    onClick={() => deleteTodo(todo._id)}
                                    className="px-4 py-2 mr-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all"
                                >
                                    Delete
                                </button>
                                {!todo.isCompleted && (
                                    <button
                                        onClick={() => Complete(todo._id)}
                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
                                    >
                                        Done
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table


{/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
<td className="px-6 py-4">1</td>
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Complete project</td>
<td className="px-6 py-4">Finish the todo app by today.</td>
<td className="px-6 py-4">
    <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-200 rounded-full dark:bg-green-800 dark:text-green-200">Pending</span>
</td>
<td className="px-6 py-4 text-center">
    <button className="px-4 py-2 mr-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900">Delete</button>
    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900">Done</button>
</td>
</tr> */}