import React, {useState} from 'react';
import Forms from '../components/forms';
import List from '../components/list';
import Timer from '../components/timer';
import { ITask } from '../types/tasks';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selecionado, setSelecionado] = useState<ITask>();

  function selecionaTarefa(tarefaSelecionada: ITask) {
    setSelecionado(tarefaSelecionada);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
function finalizarTarefa() {
  if(selecionado) {
    setSelecionado(undefined);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
      if(tarefa.id === selecionado.id) {
        return {
          ...tarefa,
          selecionado: false,
          completado: true
        }
      }
      return tarefa;
    }))
  }
}

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List 
      tasks={tasks}
      selecionaTarefa={selecionaTarefa} 
      />
      <Timer 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
