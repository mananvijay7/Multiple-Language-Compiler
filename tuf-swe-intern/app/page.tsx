'use client';
import { useState } from "react";
import { insertCode } from "./utils/api";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username:'',
    preferred_language:'',
    standard_input:'',
    source_code: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const router = useRouter();
    try{
        console.log("handleSubmit");
        console.log(formData);
        const response = await insertCode(formData);
      if(response.result == 'success'){
        console.log('inserted successfully');
        router.push('/code');
      }else{
        console.log('failed in insertion data');
        alert('Failed to compile your code');
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl my-10">TUF SWE Intern Task</h1>
      </div>
      <div className="flex justify-center"> {/* Added flex and justify-center classes */}
        <div className="w-30">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Username</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required onChange={handleChange} />
            <br />
            <label htmlFor="preferred_language" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Preferred Coding Language (C++, Java, JavaScript, Python)</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="preferred_language" type="text" placeholder="Enter your preferred coding language (C++, Java, JavaScript, Python)" required onChange={handleChange} />
            <br />
            <label htmlFor="standard_input" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Standard Input (Stdin)</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="standard_input" type="text" placeholder="Enter your input values" cols="30" rows="10" required onChange={handleChange}></textarea>
            <br />
            <label htmlFor="source_code" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Source Code</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="source_code" type="text" placeholder="Enter your source code here" cols="30" rows="10" required onChange={handleChange}></textarea>
            <br />
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit Code
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
