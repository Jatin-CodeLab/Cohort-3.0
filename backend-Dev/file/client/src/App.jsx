import React from 'react'
import {useForm} from 'react-hook-form'

function App() {

  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
    
  }
  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit(submitHandler)}>
        <input {...register("name")}  type="text" placeholder='enter name'/>
        <input {...register("email")}  type="email" placeholder='enter email'/>
        <input {...register("profpic")}  type="file" placeholder='enter pic'/>
        <input type="submit" placeholder='enter pic'/>
      </form>
    </div>
  )
}

export default App