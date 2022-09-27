import React from 'react';
import { ITask } from '../../types/tasks';
import Item from './item';
import style from './list.module.scss';

interface Props {
  tasks: ITask[],
  selecionaTarefa: (tarefaSelecionada: ITask) => void 
}

function List({tasks, selecionaTarefa}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                  <Item
                  selecionaTarefa={selecionaTarefa}
                  key={item.id}  
                    {...item}
                  />
                ))}
            </ul>
        </aside>
    )
}

export default List;