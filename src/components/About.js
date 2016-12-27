import React, { Component } from 'react';


export default class About extends Component {
    render(){
        return(
            <div className="container">
                I'm currently looking for a job in the Portland area.  If you're interested in checking out some of my most recent work, feel free to browse my <a href="https://github.com/sanjuroj" target="_blank">GitHub</a> page.  If you'd like to get in touch, you can reach me on <a href="mailto:rosebud@sanjuro.net" target="_blank">rosebud@sanjuro.net</a> or through <a href="https://www.linkedin.com/in/sanjurojogdeo">LinkedIn</a>. 
                <br/><br/>

                If you're curious about how this site was created, read on.  
                <br/><br/>

                The main delivery system is Django.  All of the relatively simple pages, like this one, are created using Django templates.  At the moment, the only exception is the ?????????????????????Resum&#233 page????, which was created using React.  It's sort of like using a shotgun to kill a fly but I get to practice with the shotgun that way.  Django is still serving up the raw resum&#233 data through an API, but React is fetching this, processing it, and creating the display.  Styling is customized <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> and <a href="http://bootswatch.com/" target="_blank">Bootswatch</a> themes.
                <br/><br/>
                There are two separate repositories for the resum&#233 app.  One is for the <a href="https://github.com/sanjuroj/resumeApp-django" target="_blank">Django side of the app</a>, which includes the API, the skeleton Django template, and a good portion of the customized styling.  The <a href="https://github.com/sanjuroj/resumeApp-frontend" target="_blank">other repository</a> includes the React components for the frontend build.



                <br/><br/><br/>
                I would also like the thank the creators of several tutorials and guides that were particularly helpful:
                <ul>
                    <li>The official <a href="https://docs.djangoproject.com/en/1.9/intro/" target="_blank">Django tutorial</a></li>
                    <li>The official, and particularly excellent, <a href="http://redux.js.org/docs/basics/ExampleTodoList.html" target="_blank">Redux tutorial</a></li>
                    <li>Sebastiano Guerriero wrote a nice <a href="https://codyhouse.co/gem/vertical-timeline/" target="_blank">guide</a> to creating timelines</li>
                    <li>I used Nick Salloum's <a href="http://callmenick.com/post/css-toggle-switch-examples" target="_blank">tutorial</a> on toggle switches
                    for the resum&#233 page control bar, since I couldn't find anything in Bootstrap that quite did what I wanted.</li>
                </ul>

                <br/><br/>

                The LinkedIn icon was made by <a href="http://www.flaticon.com/authors/simpleicon" title="SimpleIcon" target="_blank">SimpleIcon</a> and the envelope icon was made by <a href="http://www.freepik.com" title="Freepik" target="_blank">Freepik</a>.  Both were provided by <a href="http://www.flaticon.com" title="Flaticon" target="_blank">www.flaticon.com</a>.
            </div>
        );
    }

}