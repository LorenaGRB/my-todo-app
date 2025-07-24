import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TaskItem from "../components/TaskItem";
import { SafeAreaView } from "react-native-safe-area-context";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TaskListScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Comprar pan", completed: false },
    { id: "2", text: "Llamar a Juan", completed: true },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            /* Por ahora no pasamos onToggle/onDelete (se implementarán después) */
          />
        )}
        ListEmptyComponent={<Text>No hay tareas aún.</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
});

export default TaskListScreen;
