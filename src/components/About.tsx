import React from "react";
const About = () => {
    return (<div className="about">
                <h2>About</h2>
                <div className="card">
                    Notes is a simple note taking application. It consists of two parts: Notes.React and Notes.API.
                    <ul>
                        <li><a href="https://github.com/igorcervac/Notes.React">Notes.React</a> application is implemented using React and TypeScript.</li>
                        <li><a href="https://github.com/igorcervac/Notes.API">Notes.API</a> application is implemented using .NET 8, ASP.NET Core and SQL Server.</li> 
                    </ul>
                </div>
            </div>);    
}
export default About;