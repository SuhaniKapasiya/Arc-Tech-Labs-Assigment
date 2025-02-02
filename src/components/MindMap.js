import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

const MindMap = () => {
  const [treeData, setTreeData] = useState({
    name: "Loading...",
    children: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        const formattedData = {
          name: "Posts",
          children: data.slice(0, 5).map((post) => ({
            name: post.title,
            children: [{ name: post.body }],
          })),
        };

        setTreeData(formattedData); // Ensure it is an object, not an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Tree data={treeData} orientation="horizontal" />
    </div>
  );
};

export default MindMap;
