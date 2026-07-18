import React, {useState,useEffect}  from "react";



const ProductForm = () => {
    function producform({addproduct}){
        const[name,setName]=useState("")
        const[price,setPrice]=useState("")
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const product={
            name,
            price:Number(price)
        }
        addproduct(product)
        setName("")
        setPrice("")
    }



  return (
    <>
      <form onSubmit={handleSubmit} class="px-4 mt-6">
        <div class="space-y-4 max-w-sm mx-auto">
          <div>
            <label
              for="name"
              class="mb-2 text-slate-900 font-medium text-sm inline-block"
            >
              product name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="product name"
              required
              class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-slate-100 w-full border-b-2 border-transparent focus:border-blue-600 outline-none"
            />
          </div>
          <div class="relative">
            <label
              for="password"
              class="mb-2 text-slate-900 font-medium text-sm inline-block"
            >
              Product price
            </label>
            <button
              type="button"
              aria-label="Show password"
              aria-pressed="false"
              class="absolute top-1 right-2 p-0.5 flex cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" fill-slate-400 overflow-visible"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <input
              type="number"
              id="price"
              name="pice"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              placeholder="Price"
              required
              class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-slate-100 w-full border-b-2 border-transparent focus:border-blue-600 outline-none"
            />
          </div>

          <div class="flex items-start">
            <label class="flex items-center group has-[input:checked]:text-slate-900">
              <input
                id="tmc"
                name="tmc"
                type="checkbox"
                required
                class="sr-only"
              />

              <span
                class="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                aria-hidden="true"
              >
                <svg
                  class="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M1 5l3 3 7-7" />
                </svg>
              </span>
            </label>
          </div>

          <button
            type="submit"
            class=" py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer
             tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none
             focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};



export default  ProductForm