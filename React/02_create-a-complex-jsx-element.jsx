// nested JSX -> must return a single element
// This one parent element would wrap all of the other levels of nested elements.
// several JSX elements written as siblings with no parent wrapper element will not transpile.

const JSX = <div>
              <h1>Hello World</h1>
              <p>Goodbye World</p>
              <ul>
                <li>gaon</li>
                <li>is</li>
                <li>cute</li>
              </ul>
            </div>;