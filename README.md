# 📌 React-Redux Data Visualization Project

A **React-Redux** project featuring a **Counter**, a **Data Table**, and a **Mind Map** visualization. The application utilizes **Material UI** for UI components and **react-d3-tree** for hierarchical data visualization.

---

## 🚀 Features

- **Counter**: A simple counter using **Redux** for state management.
- **Data Table**: Fetches and displays posts from an API using **Material UI Table**.
- **Mind Map**: Visual representation of hierarchical data using **react-d3-tree**.
- **React Router**: Navigation between different components.

---

## 🛠️ Technologies Used

### **Frontend**
- **React**: UI Library.
- **Redux**: State management.
- **React Router**: For handling routes.
- **Material UI**: UI components.
- **react-d3-tree**: Tree visualization.

### **Backend API**
- The app fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).

---

Live Demo: [Mind Map](https://arc-tech-labs-assigment.vercel.app/mindmap)

## 📂 Project Structure

```
/react-redux-project
│── src/
│   ├── components/
│   │   ├── Counter.js
│   │   ├── DataTable.js
│   │   ├── MindMap.js
│   │   ├── Header.js
│   ├── redux/
│   │   ├── counterSlice.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
```

---

## 📦 Installation and Setup

### **Prerequisites**
Ensure you have **Node.js** installed on your system.

### **Steps to Run the Project**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-redux-project.git
   cd react-redux-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in the browser:
   ```
   http://localhost:3000
   ```

---

## 🔗 Routes

| Route | Component |
|--------|------------|
| `/` | Counter |
| `/datatable` | DataTable |
| `/mindmap` | MindMap |

---

## 🔥 API Endpoints Used

The application fetches data from:
```
https://jsonplaceholder.typicode.com/posts
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📞 Contact

For any questions or suggestions, feel free to reach out:
- **GitHub**:https://github.com/SuhaniKapasiya/
