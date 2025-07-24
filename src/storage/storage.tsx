import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../components/TaskItem";

const STORAGE_KEY = "TASKS";

export const saveTasks = async (tasks: Task[]) => {
  try {
    const data = JSON.stringify(tasks);
    await AsyncStorage.setItem(STORAGE_KEY, data);
  } catch (error) {
    console.error("Error saving tasks", error);
  }
};

export const loadTasks = async (): Promise<Task[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading tasks", error);
    return [];
  }
};
