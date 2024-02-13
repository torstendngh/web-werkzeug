export default [
  {
    id: "9e46b5cc-7168-484a-bc1f-b8cfd8324b27",
    title: "How to create your first project with Vite and React",
    tags: ["React", "Vite", "JavaScript"],
    content: [
      {
        type: "title",
        value: "How to create your first project with Vite and React",
      },
      {
        type: "text",
        value:
          "First, install Node.js from the official website if you haven't already. This will also install npm (Node Package Manager), which is essential for managing the packages your project will depend on.",
      },
      {
        type: "subtitle",
        value: "Step 1: Setting Up Your Project",
      },
      {
        type: "text",
        value:
          "Open your terminal or command prompt and run the following command to create a new project with Vite and React:",
      },
      {
        type: "code",
        language: "bash ",
        value: "npm create vite@latest my-vite-react-app --template react",
      },
      {
        type: "text",
        value:
          "Replace 'my-vite-react-app' with your desired project name. This command creates a new directory with all the necessary files and configurations for a React project.",
      },
      {
        type: "subtitle",
        value: "Step 2: Navigating into Your Project",
      },
      {
        type: "text",
        value: "Change to the directory of your newly created project:",
      },
      {
        type: "code",
        language: "bash ",
        value: "cd my-vite-react-app",
      },
      {
        type: "subtitle",
        value: "Step 3: Installing Dependencies",
      },
      {
        type: "text",
        value: "Install all the project dependencies by running:",
      },
      {
        type: "code",
        language: "bash ",
        value: "npm install",
      },
      {
        type: "subtitle",
        value: "Step 4: Running Your Vite React App",
      },
      {
        type: "text",
        value: "Start the development server with:",
      },
      {
        type: "code",
        language: "bash ",
        value: "npm run dev",
      },
      {
        type: "text",
        value:
          "This command will start a local development server and open up a browser window for you. You should see your new React app running. The server will automatically reload if you make any changes to the code.",
      },
      {
        type: "subtitle",
        value: "Next Steps",
      },
      {
        type: "text",
        value:
          "Now that you've successfully created and run your Vite and React app, you can start developing your project. Explore the project structure to get familiar with the setup. Here are a few things you might do next:",
      },
      {
        type: "list",
        value: [
          "Learn about the file structure and where to place your components.",
          "Explore the React documentation to better understand component creation and state management.",
          "Look into Vite's features and plugins to optimize your development workflow.",
        ],
      },
      {
        type: "subtitle",
        value: "Conclusion",
      },
      {
        type: "text",
        value:
          "You've taken your first steps into developing with Vite and React. This setup provides a fast and efficient development experience, allowing you to focus more on building your application rather than configuring the development environment. Happy coding!",
      },
    ],
  },
  {
    id: "6c929c60-1097-4bbb-8cfb-bb67ed25f891",
    title: "Getting Started with HTML: Build Your First Webpage",
    tags: ["HTML", "Web Development"],
    content: [
      {
        type: "title",
        value: "Getting Started with HTML: Build Your First Webpage",
      },
      {
        type: "text",
        value:
          "HTML, or HyperText Markup Language, is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
      },
      {
        type: "subtitle",
        value: "Step 1: Create Your HTML File",
      },
      {
        type: "text",
        value:
          "Open a text editor of your choice (Notepad, Sublime Text, Visual Studio Code, etc.) and create a new file. Save this file with a .html extension, for example, 'my-first-webpage.html'.",
      },
      {
        type: "subtitle",
        value: "Step 2: Write Basic HTML Structure",
      },
      {
        type: "text",
        value:
          "Type the following code into your HTML file. This code represents the basic structure of an HTML document.",
      },
      {
        type: "code",
        language: "html",
        value: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>`,
      },
      {
        type: "subtitle",
        value: "Step 3: View Your Webpage",
      },
      {
        type: "text",
        value:
          "Save your HTML file and open it with any web browser (Chrome, Firefox, Safari, etc.). You should see your webpage displaying the 'Hello, World!' heading and the paragraph text.",
      },
      {
        type: "subtitle",
        value: "Conclusion",
      },
      {
        type: "text",
        value:
          "Congratulations! You've created your first webpage using HTML. This is just the beginning. You can now explore more HTML tags and attributes to add images, links, lists, and much more to your webpage.",
      },
    ],
  },
  {
    id: "07a31f5f-3ade-43b9-9098-1eddb18ea9dc",
    title: "Styling Your Webpage with CSS",
    tags: ["CSS", "Styling", "Web Development"],
    content: [
      {
        type: "title",
        value: "Styling Your Webpage with CSS",
      },
      {
        type: "text",
        value:
          "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
      },
      {
        type: "subtitle",
        value: "Step 1: Create Your CSS File",
      },
      {
        type: "text",
        value:
          "Create a new file and save it with a .css extension, for example, 'style.css'. This file will contain all the styles for your webpage.",
      },
      {
        type: "subtitle",
        value: "Step 2: Link CSS to Your HTML File",
      },
      {
        type: "text",
        value:
          "Open your HTML file and add the following line in the `<head>` section to link your CSS file:",
      },
      {
        type: "code",
        language: "html",
        value: `<link rel="stylesheet" href="style.css">`,
      },
      {
        type: "subtitle",
        value: "Step 3: Add Styles to Your CSS File",
      },
      {
        type: "text",
        value:
          "Open your 'style.css' file and add some basic styles. For example, to change the background color of your webpage and the color of the text, add the following:",
      },
      {
        type: "code",
        language: "css",
        value: `body {
    background-color: #f0f0f0;
    color: #333;
}

h1 {
    color: #007bff;
}`,
      },
      {
        type: "subtitle",
        value: "Step 4: View the Changes",
      },
      {
        type: "text",
        value:
          "Save both your HTML and CSS files, then refresh your webpage in the browser. You should see the new styles applied.",
      },
      {
        type: "subtitle",
        value: "Conclusion",
      },
      {
        type: "text",
        value:
          "You've now learned how to style your webpage using CSS! Experiment with different properties and values to further customize your site's appearance.",
      },
    ],
  },
  
];
