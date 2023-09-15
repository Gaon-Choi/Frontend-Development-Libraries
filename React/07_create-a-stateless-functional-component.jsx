/**
Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter.
 */

const MyComponent = function() {
  // Change code below this line

  return (
    <div className="MyComponent">
    Hello World
    </div>
  );

  // Change code above this line
}