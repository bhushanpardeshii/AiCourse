
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyCtTI9KIHPb6No6GvkTOre6iNO0Ld7A_m0";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const GenrateCourseLayout_AI = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate a course tutorial on following detail with feild as Course Name,Description,Along with Chapter name,about,Duration:Category:'Programming',Topic:'Python',Level:'Basic',Duration:'1 hours',No of Chapters:3,in JSON format" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"Course Name\": \"Python Programming Fundamentals\",\n  \"Description\": \"This course provides a comprehensive introduction to Python programming, covering fundamental concepts, syntax, and practical examples.\",\n  \"Chapters\": [\n    {\n      \"Chapter Name\": \"Introduction to Python\",\n      \"About\": \"This chapter covers the basics of Python, including its history, features, and how to set up a Python development environment.\",\n      \"Duration\": \"30 minutes\"\n    },\n    {\n      \"Chapter Name\": \"Data Types and Variables\",\n      \"About\": \"This chapter explores different data types in Python, such as integers, floats, strings, and Booleans. You will learn how to declare and manipulate variables.\",\n      \"Duration\": \"20 minutes\"\n    },\n    {\n      \"Chapter Name\": \"Control Flow and Functions\",\n      \"About\": \"This chapter introduces control flow statements like conditional statements and loops. You will also learn how to define and use functions in Python.\",\n      \"Duration\": \"20 minutes\"\n    }\n  ],\n  \"Category\": \"Programming\",\n  \"Topic\": \"Python\",\n  \"Level\": \"Basic\",\n  \"Duration\": \"1 hour\",\n  \"No of Chapters\": 3\n}\n```\n" },
            ],
        },
    ],
});

export const GenerateChapterContent_AI = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                { text: "'Explain the concept in detail on Topic:,Chapter:, in JSON Format with list of array with field as title,explanation on given chapter in detail ,code example(Code field in <precode> format) if applicable'" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "Please provide the specific \"Topic\" and \"Chapter\" you want explained in JSON format.  \n\nFor example, you could say:\n\n\"Explain the concept in detail on Topic: **Data Structures**, Chapter: **Linked Lists** in JSON Format with list of array with field as title,explanation on given chapter in detail ,code example(Code field in <precode> format) if applicable\"\n\nOnce you provide the topic and chapter, I can generate the JSON response with the following structure:\n\n```json\n[\n  {\n    \"title\": \"Introduction to Linked Lists\",\n    \"explanation\": \"A linked list is a linear data structure that consists of a sequence of nodes, where each node contains data and a pointer (or link) to the next node in the sequence.\",\n    \"code\": \"<precode>\\n// Node structure in C\\nstruct Node {\\n    int data;\\n    struct Node *next;\\n};\\n</precode>\"\n  },\n  {\n    \"title\": \"Types of Linked Lists\",\n    \"explanation\": \"There are different types of linked lists, including singly linked lists, doubly linked lists, and circular linked lists.\",\n    \"code\": \"<precode>\\n// Singly linked list insertion in C\\nvoid insertAtBeginning(struct Node** head_ref, int new_data) {\\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\\n    new_node->data = new_data;\\n    new_node->next = *head_ref;\\n    *head_ref = new_node;\\n}\\n</precode>\"\n  },\n  // ... more sections about the chapter\n]\n```\n\nI will provide a comprehensive explanation and relevant code examples for the requested topic and chapter. \n" },
            ],
        },
    ],
});



