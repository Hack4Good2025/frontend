"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Task = {
  id: string
  name: string
  reward: number
  img: string
}

const tasks: Task[] = [
    { id: "1", name: 'Hallway cleaning', reward: 30, img: `https://cdn-icons-png.flaticon.com/512/9818/9818876.png` },
    { id: "2", name: 'Event organisation', reward: 15, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNhe3i33SVxcmc8VeO8HhH3wJ0imFZB_PiQ&s` } ,
    { id: "3", name: 'Task 3', reward: 2, img: `https://via.placeholder.com/200` },
    { id: "4", name: 'Task 4', reward: 15, img: `https://via.placeholder.com/200` },
    { id: "5", name: 'Task 5', reward: 22, img: `https://via.placeholder.com/200` },
    { id: "6", name: 'Task 6', reward: 6, img: `https://via.placeholder.com/200` },
    { id: "7", name: 'Task 7', reward: 12, img: `https://via.placeholder.com/200` },
  ]

export default function Home() {

  const router = useRouter()
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [openDescIndex, setOpenDescIndex] = useState<number | null>(null);

  const [newTaskFormData, setNewTaskFormData] = useState({
    name: '',
    reward: 0,
    img: ''
  });

  const [descFormData, setDescFormData] = useState(
      tasks.map((task) => ({
      taskId: task.id,
      name: task.name,
      reward: task.reward,
      img: task.img
    }))
  );

  const openAddTaskModal = () => setIsAddingTask(true);
  const closeAddTaskModal = () => setIsAddingTask(false);

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewTaskFormData({
          ...newTaskFormData,
          [name]: name === 'reward' ? parseInt(value, 10) : value
      });
  };

  const handleAddTaskSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      const newTask = { 
          ...newTaskFormData, 
          id: (tasks.length + 1).toString()
      };

      tasks.push(newTask); // Adding new task to the list
      alert('Task Added Successfully!');
      closeAddTaskModal();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, taskID: string, taskReward: number, taskImg: string) => {
    const { name, value  } = e.target
    const updatedDescFormData = [...descFormData]
    updatedDescFormData[index] = { ...updatedDescFormData[index], taskId: taskID, name: value, reward: taskReward, img: taskImg }
    setDescFormData(updatedDescFormData)
  };

  const handleRewardChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, taskID: string, taskName: string, taskImg: string) => {
    const { name, value  } = e.target
    const updatedDescFormData = [...descFormData]
    updatedDescFormData[index] = { ...updatedDescFormData[index], taskId: taskID, name: taskName, reward: parseInt(value, 10), img: taskImg }
    setDescFormData(updatedDescFormData)
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, taskID: string, taskName: string, taskReward: number) => {
    const { name, value  } = e.target
    const updatedDescFormData = [...descFormData]
    updatedDescFormData[index] = { ...updatedDescFormData[index], taskId: taskID, name: taskName, reward: taskReward, img: value }
    setDescFormData(updatedDescFormData)
  };

  const handleOpenDescModal = (index: number) => {
    const updatedDescFormData = [...descFormData];
    updatedDescFormData[index] = { 
        ...updatedDescFormData[index], 
        name: tasks[index].name,
        reward: tasks[index].reward,
        img: tasks[index].img
    };
    setDescFormData(updatedDescFormData);
    setOpenDescIndex(index);
  };

  const handleDescSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault()
    const descToSubmit = {
      taskId: descFormData[index].taskId || tasks[index].id,
      name: descFormData[index].name || tasks[index].name,
      reward: descFormData[index].reward || tasks[index].reward,
      img: descFormData[index].img || tasks[index].img
    };
    alert(`Task Updated: ${JSON.stringify(descToSubmit)}`);
    setOpenDescIndex(null);  // Close popup after submission
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-4">
        <div className="flex">
          <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Logout
            </button>
        </div>
        </header>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Voucher Tasks</h1>
    <div className="mb-16 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300">
        <div className="flex space-x-4">
        <div key={999} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"}
        className="w-full h-48 object-cover rounded-md mb-4"
        />
        <button 
            className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700"
            onClick={openAddTaskModal}>
            Add New Task
        </button>

        {isAddingTask && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
                    <form onSubmit={handleAddTaskSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Task Name"
                            onChange={handleNewTaskChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <input
                            type="number"
                            name="reward"
                            placeholder="Task Reward"
                            onChange={handleNewTaskChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <input
                            type="text"
                            name="img"
                            placeholder="Task Image URL"
                            onChange={handleNewTaskChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                            Add Product
                        </button>
                        <button 
                            type="button"
                            className="w-full bg-gray-500 text-white py-2 mt-2 rounded-lg hover:bg-gray-700"
                            onClick={closeAddTaskModal}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        )}
        </div>
          {tasks.map((task, index) => (
            <div key={task.id} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
              <img
                src={task.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{task.name}</h3>
              <p className="text-teal-500">{task.reward} Vouchers</p>
              
              <button 
                type="button" 
                onClick={() => handleOpenDescModal(index)}
                className="px-4 py-2 bg-teal-600 text-white mt-2 rounded-lg hover:bg-teal-700">
                  Edit Voucher Task
              </button>

              {openDescIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
                        <form onSubmit={(e)=>{handleDescSubmit(e, index)}}>
                            <input
                                type="text"
                                name="name"
                                defaultValue={task.name}
                                onChange={(e) => {handleNameChange(e, index, task.id, task.reward, task.img)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="reward"
                                defaultValue={task.reward}
                                onChange={(e) => {handleRewardChange(e, index, task.id, task.name, task.img)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="img"
                                defaultValue={task.img}
                                onChange={(e) => {handleImgChange(e, index, task.id, task.name, task.reward)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <button 
                                type="submit"
                                className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
              )}

            </div>
          ))}
        </div>
    </div>
      </main>
    </div>
  )
}

