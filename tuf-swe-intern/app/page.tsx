import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl my-10">TUF SWE Intern Task</h1>
      </div>
      <div className="flex justify-center"> {/* Added flex and justify-center classes */}
        <div className="w-30">
          <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Username</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <br />
            <label htmlFor="code-lang" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Preferred Coding Language (C++, Java, JavaScript, Python)</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your preferred coding language (C++, Java, JavaScript, Python)" />
            <br />
            <label htmlFor="std-in" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Standard Input (Stdin)</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your input values" cols="30" rows="10"></textarea>
            <br />
            <label htmlFor="src-code" className="block text-gray-700 text-sm font-bold mb-2 pt-3">Source Code</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your source code here" cols="30" rows="10"></textarea>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
