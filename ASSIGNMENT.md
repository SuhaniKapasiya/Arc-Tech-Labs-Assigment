# 📝 Internship Assignment - ArcTech

## 🎯 Introduction
I have implemented the concepts required for this assignment in my project. Below are direct answers to the questions along with relevant code snippets.

---

### **1) Fetch Data using Async/Await from JSON Placeholder API**
```javascript
const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

---

### **2) Display Results in a MUI Table with Responsive Layout**
This is implemented in the `DataTable.js` file using Material UI. The table adapts to different screen sizes using `sx` properties.

```javascript
<TableContainer
  component={Paper}
  sx={{ width: { xs: "100%", md: "50%" }, margin: "auto", mt: 4 }}
>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Body</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {posts.slice(0, 10).map((post) => (
        <TableRow key={post.id}>
          <TableCell>{post.id}</TableCell>
          <TableCell>{post.title}</TableCell>
          <TableCell>{post.body}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
```

---

### **3) How do you pass the Redux store to the React JS page?**
In a React-Redux app, you pass the Redux store using `Provider` from `react-redux` at the root level.

#### **Step 1: Configure Store (`store.js`)**
```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Example reducer

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

#### **Step 2: Wrap App in Provider (`index.js`)**
```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

#### **Step 3: Access Redux State in Component (`Counter.js`)**
```javascript
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
```

---

### **4) What would be the prompt you would write if you had to display the above table in React JS in the form of a mind map?**

#### **Prompt for ChatGPT / AI to Generate the Mindmap Code in React**

"Create a React component that fetches post data from `https://jsonplaceholder.typicode.com/posts` and displays it in a mindmap format instead of a table. Use the `react-d3-tree` library for visualization. The structure should be:

- The root node labeled `Posts`.
- Each post title as a direct child node of `Posts`.
- The post body as a sub-node of its corresponding title.
- The mindmap should be horizontally arranged with smooth animations.
- Style the nodes with rounded borders, custom colors, and hover effects.
- Ensure the component is responsive, taking full width on mobile and 50% width on desktop."

---

## 📌 **Project Repository**
You can check out the full project implementation here:
🔗 [GitHub Repository](https://github.com/your-username/react-redux-project)

