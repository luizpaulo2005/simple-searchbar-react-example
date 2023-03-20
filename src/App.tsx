import { useState } from "react";

interface PeopleProps {
  id: number;
  name: string;
}

export const App = () => {
  const [peoples, setPeoples] = useState<PeopleProps[]>([
    {
      id: 0,
      name: 'Luna'
    },
    {
      id: 1,
      name: 'Mary'
    },
    {
      id: 2,
      name: 'Anne'
    },
    {
      id: 3,
      name: 'Karen'
    },
    {
      id: 4,
      name: 'Jenny'
    }
  ])

   const [search, setSearch] = useState('');

   
   const filteredPeoples = search.length > 0 
   ? 
   peoples.filter(p => p.name.includes(search))
   :
   [];
   
  return (
    <div>
      <input
      type="text"
      value={search}
      onChange={e => setSearch(e.target.value)}
      />

      {
        search.length > 0 
        ?
        <ul>
          {filteredPeoples.map(({id, name}) => {
            return <li key={id}>{name}</li>
          })}
        </ul>
        :
        <ul>
          {peoples.map(({id, name}) => {
            return <li key={id}>{name}</li>
          })}
        </ul>
      }

    </div>
  );
}