import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='blogs'>
        <article>
            <h4 style={{textAlign:''}}>1. Difference between Javascript and Node.js</h4>
            <table>
                <thead>
                   <tr>
                   <th>Javascript</th>
                    <th>Node.js</th>
                   </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Javascript is a programming language that is used for make client site better. 
                    </td>
                    <td>
                        Node.js is a javascript runtime environment.
                    </td>
                </tr>
                <tr>
                    <td>
                        Javascript can run any web browser.
                    </td>
                    <td>
                        Node.Js enables Javascript to run on the server.
                    </td>
                </tr>
                <tr>
                    <td>
                        It's latest version that runs on Chrome's V8 engine, which is written in C++.
                    </td>
                    <td>
                        Node.Js written in C, C++,Javascript
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
        <article>
            <h4>2. Difference between SQL and NOSQL</h4>
            <table>
                <thead>
                    <tr>
                    <th>SQL</th>
                    <th>NO SQL</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        All records are stored as rows in a table
                    </td>
                    <td>
                        All records are stored as Documents . 
                    </td>
                </tr>
                <tr>
                    <td>
                        Its scaled vertically.
                    </td>
                    <td>
                        It's scaled horizontally.
                    </td>
                </tr>
                <tr>
                    <td>
                        SQL databases are relational.
                    </td>
                    <td>
                    NoSQL databases are non-relational.
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
        <article>
        <h4>3. When to use Node.Js and when to use MongoDb </h4>
        <p>
            MongoDb is a database where we can store data and Node.Js helps to send data to database from Client site.
            Summary : If we want to store user data to a database, we can use Mongodb as our database and Node.js helps to send user data to MongoDb database.
        </p>
        
        </article>
            
        </section>
    );
};

export default Blogs;