import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='blogs'>
        <article>
            <h4 style={{textAlign:''}}>1. Difference between Javascript and Node.js</h4>
            <table>
                <tr>
                    <th>Javascript</th>
                    <th>Node.js</th>
                </tr>
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
            </table>
        </article>
        <article>
            <h4 style={{textAlign:''}}>2. Difference between SQL and NOSQL</h4>
            <table>
                <tr>
                    <th>SQL</th>
                    <th>NO SQL</th>
                </tr>
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
                        Its
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
            </table>
        </article>
            
        </section>
    );
};

export default Blogs;