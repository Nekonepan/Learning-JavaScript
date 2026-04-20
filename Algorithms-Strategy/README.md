# 📊 Sorting Algorithm Performance Analysis

This project is a Node.js-based application developed to analyze and compare the performance of three sorting algorithms: Bubble Sort, Insertion Sort, and Quick Sort. The application evaluates execution time using multiple datasets with varying sizes to understand the efficiency of each algorithm.

---

## 📌 Main Features

1. Implementation of three sorting algorithms:

- Bubble Sort
- Insertion Sort
- Quick Sort

2. Automatic dataset generation (1000 – 10000 elements)
3. Performance measurement using high-resolution timer
4. Comparison of runtime results in tabular format (console.table)
5. Modular code structure (each algorithm separated)

---

## 🧪 Application Workflow

- Generate datasets with different sizes (1000–10000 elements).
- Store datasets in JSON format inside the Data/ folder.
- Load datasets into the main program.
- Execute each sorting algorithm using the same dataset.
- Measure execution time for each algorithm.
- Display results in a comparison table.

---

## 📊 Functional Scope

- Dataset Generation: Creates random data for testing algorithm performance.
- Sorting Execution: Runs three sorting algorithms independently.
- Runtime Measurement: Uses high-resolution timing (process.hrtime.bigint()).
- Data Comparison: Displays results in structured table format.

---

## 🛠️ Technologies Used

1. Programming Language : JavaScript
2. Runtime Environment : Node.js
3. File System Module : Built-in fs module
4. Data Format : JSON

---

## 💻 System Specifications

This performance test was conducted on the following system:

- Operating System : Arch Linux  
- Processor : 12th Gen Intel(R) Core(TM) i5-1235U 
- RAM : 8 GB  
- Storage : SSD 512 GB  
- Runtime : Node.js v25.9.0

---

## ⚙️ System Requirements

- Node.js v14 or higher
- Operating System: Windows / Linux / macOS
- No external libraries required

---

## 📁 Project Structure

```
Algorithms-Strategy/
│
├── Bubble-Sort/
│   └── bubble.js
│
├── Insertion-Sort/
│   └── insertion.js
│
├── Quick-Sort/
│   └── quick.js
│
├── Data/
│   ├── data_1000.json
│   ├── data_2000.json
│   ├── ...
│   ├── data_10000.json
│   └── generate.js
│
└── main.js
```

---

## ▶️ How to Run the Application

1. Generate Dataset

```
node Data/generate.js
```

2. Run Performance Test

```
node main.js
```

---

## 📊 Example Output

| Index | Data Size | Bubble Sort | Insertion Sort | Quick Sort |
| ----- | --------- | ----------- | -------------- | ---------- |
| 0     | 1000      | 5.123 ms    | 2.456 ms       | 0.789 ms   |
| 1     | 2000      | 20.456 ms   | 9.321 ms       | 1.234 ms   |
| ...   | ...       | ...         | ...            | ...        |

---

## 🧠 Algorithm Analysis

1. Bubble Sort → Time Complexity: O(n²)
2. Insertion Sort → Time Complexity: O(n²)
3. Quick Sort → Average Time Complexity: O(n log n)

From the experiment results:

- Bubble and Insertion Sort show significant increase in runtime as data size grows.
- Quick Sort performs much faster and more efficiently for large datasets.

---

## 🎯 Project Objectives

- Analyze and compare sorting algorithm performance
- Understand time complexity through real implementation
- Practice modular programming in Node.js
- Visualize runtime differences using structured output

---

## 🤝 Credits

Institution : Universitas Ahmad Dahlan

Course : Strategi Algoritma

| Contributors        | GitHub                                    |
| ------------------- | ----------------------------------------- |
| Lutfan Alaudin Naja | [Nekonepan](https://github.com/Nekonepan) |

If you find this project useful:

⭐ Star the repository

🛠️ Fork and experiment with other algorithms

📬 Use it as reference for algorithm analysis
