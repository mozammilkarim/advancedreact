# Explainations
https://www.youtube.com/watch?v=-P6tEvqwXag

The forwardRef method in React allows parent components to move down (or “forward”) refs to their children. ForwardRef gives a child component a reference to a DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used.
Forward Refs helps to avoid unnecessary re-rendering of components.
Refs can't be passed to function components, because They don't have instances!
The only way to pass a ref to a function component is using forwardRef.
