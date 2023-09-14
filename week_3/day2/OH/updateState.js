
// doesn't work because of the shallow copy from const updatedTasks = [...prevTasks];
const crossOut = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].complete = !updatedTasks[index].complete;
      return updatedTasks;
    });
  };

// fix by directly using state instead of working with a copy of it
  const crossOut = (index) => {
    console.log('crossing out task at index', index)
        setTasks((prevTasks) => {
            return prevTasks.map((task, i) => {
                if (i === index) {
                    return {...task, complete: !task.complete}
                }
                return task;
            })
        }) 
    }