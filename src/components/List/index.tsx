import React, { useEffect, useState } from 'react';

interface ListProps {
  initialItems: string[]
}

const List: React.FC<ListProps> = ({ initialItems }) =>{
  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState<string[]>([])

  useEffect(() => {
    setList(initialItems);
  }, [initialItems])

  function addToList () {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList (item: string) {
    setTimeout(() => {
      setList(state => state.filter(listItem => listItem !== item))
    }, 500)
  }

  return (
    <>
      <input placeholder="Novo item" type="text" value={newItem} onChange={e => setNewItem(e.target.value)}/>
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => (
          <li key={String(item)}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
