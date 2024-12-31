'use client'
import Form from "@/components/Form";
import Table from "@/components/Table";
import Image from "next/image";
import {useState , useEffect} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
export default function Home() {
  const [todos, settodo] = useState([]);

  const fetchTodos = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;  // Access the API URL from env variable
    const response = await axios(`${apiUrl}/api`);
    settodo(response.data.todos);
  };

  return (
    <>
    <div className="  h-screen ">
                <Form fetchTodos = {fetchTodos} />
                <Table fetchTodos = {fetchTodos} todos = {todos}/>
            </div>
    </>
    
  );
}
