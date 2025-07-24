import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggle && onToggle(task.id)}
      >
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text style={task.completed ? styles.textCompleted : styles.text}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete && onDelete(task.id)}
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkmark: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  textCompleted: {
    flex: 1,
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
  },
  deleteButton: {
    marginLeft: 12,
    padding: 4,
  },
  deleteButtonText: {
    color: "#e00",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaskItem;
