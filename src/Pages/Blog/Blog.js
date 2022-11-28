import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='font-bold text-3xl mt-10'>Blog Posts</h2>
            <div className="card card-side bg-base-100 shadow-xl my-5">
                <figure className='w-1/3'><img src="https://miro.medium.com/max/1400/1*mjbPUUeSgPTgg3M1gic_xA.png" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p className='text-left'>There are 4 ways to manage state in a react application. They are: Local State, Global State, Server State, URL State. Local state is managed in a component. in Global State the data is managed across multiple components. In Server state the data is managed in an external server. In URL state the state is saved in the URL and query parameters.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl my-5">
                <figure className='w-1/3'><img src="https://www.educative.io/v2api/editorpage/6187859468877824/image/5404262147293184" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p className='text-left'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl my-5">
                <figure className='w-1/3'><img src="https://www.guru99.com/images/1/Unit-Testing.png" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p className='text-left'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl my-5">
                <figure className='w-1/3'><img src="https://miro.medium.com/max/800/1*RtAQYp558yHr9UjZzDJmAg.jpeg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p className='text-left'>React is just a JavaScript library, not a framework.. It has fast loading of new data.Enables the separation of data and presentation. Smooth work of the app, even with complex underlying operations or database queries. Vue.js is a JavaScript-based progressive framework for creating single-page applications. It has limited number of available plugins. Angular allows MVC architecture. It has good maintainablity. It reloads the complete HTML tags tree structure. It has Slow loading time due to the Ionic app.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;