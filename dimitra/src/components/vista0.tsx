"use client";
import { SessionProviderProps} from "next-auth/react";
import { useState } from 'react';
//  onClick={handleClick}
export default function Users({ initialData, children } : any) {
  const [data, setData] = useState(initialData);

  const fetchData = async () => {
    const req = await fetch('data.json');
    const newData = await req.json();
    console.log(newData)

    setData(newData.results);
    return newData
  };

  const handleClick = (event:any) => {
    event.preventDefault();
    fetchData();
  };

  return (

                      <button
                        type="button"
                        onClick={() => {
                            handleClick(onclick);
                            console.log(data)
                            console.log(newData)
                          const display = document.getElementById('display');
                          if (display) {
                            display.innerHTML = `
                              <div class="bg-white shadow min-h-200 rounded-lg">
                                <div class='w-full aspect-square rounded-lg' style="background-image: url('${data?.url}'); background-size: cover; background-position: center;"></div>
                                <div class="column p-4">
                                  <p>${data?.name}</p>
                                  <p>Attack: ${data?.attack}</p>
                                  <p>Health: ${data?.health}</p>
                                  <p>ID: ${data?.id}</p>
                                </div>
                              </div>
                            `;
                          }
                        }}
                        className="bg-white flex row rounded-lg shadow w-full items-start"
                      >
                      {children}

                      </button>
  );
}

Users.getInitialProps = async () => {
  const req = await fetch('data.json');
  const data = await req.json();
  
  return { initialData: data.results };
};