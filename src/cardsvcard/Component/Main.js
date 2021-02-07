import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (

            <section id="body" class="">

                <div class="container">

                    {/* <!-- MAIN MENU --> */}
                    <div class="main-menu" id="main-menu">
                        <ul class="main-menu-list">
                            <li><a href="#page-resume" class="link-home">Home</a></li>
                            <li><a href="#page-resume" class="link-page">Resume</a></li>
                            <li><a href="#page-skills" class="link-page">Skills</a></li>
                            <li><a href="#page-portfolio" class="link-page">Portfolio</a></li>
                            <li><a href="#page-blog" class="link-page">Blog</a></li>
                            <li><a href="#page-contact" class="link-page">Contact</a></li>
                        </ul>
                    </div>
                    {/* <!-- /MAIN MENU -->
    
    <!-- SECTION: vCard Body  -->	 */}
                    <div class="section-vcardbody section-home" id="section-home">
                        {/* <!-- Profile pic--> */}
                        <div class="vcard-profile-pic">
                            <img src="img/profile2.jpg" id="profile2" alt="" />
                            <img src="img/profile.jpg" id="profile1" class="profileActive" alt="" />
                        </div>
                        {/* <!-- /Profile pic -->
        <!-- Description --> */}
                        <div class="vcard-profile-description">
                            {/* <!-- Profile title --> */}
                            <h1 class="profile-title">Hi, i'm <span class="color1">John Rex!</span></h1>
                            <h2 class="profile-subtitle">Web Designer & Developer</h2>
                            {/* <!-- /Profile Title -->
            <!-- Description Text --> */}
                            <hr class="hr1" />
                            <div class="vcard-profile-description-text">
                                <p>Founder of DotRex. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
                            </div>
                            {/* <!--/ Description Text -->	
            <!-- Description feature --> */}
                            <div class="vcard-profile-description-feature">
                                {/* <!-- item --> */}
                                <div class="vcard-profile-description-ft-item">
                                    <p>email:  john@dotrex.co / phone +123 456 789 111</p>
                                </div>
                                {/* <!-- item --> */}
                            </div>
                            {/* <!-- /Description feature -->		 */}
                        </div>
                        {/* <!-- /Description -->	
        <!-- Footer -->		 */}
                        <div class="vcard-footer">
                            {/* <!-- Social Icons --> */}
                            <div class="footer-social-icons">
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-youtube"></i></a>
                            </div>
                            {/* <!-- /Social Icons --> */}
                        </div>
                    </div>
                    {/* <!-- /SECTION: vCard Body  -->	

    <!-- PAGE: RESUME --> */}
                    <div class="section-vcardbody section-page" id="page-resume">

                        {/* <!-- SECTION: Education --> */}
                        <div class="section-education">
                            {/* <!-- Section title --> */}
                            <h2 class="section-title">Resume</h2>
                            {/* <!-- /Section title -->

            <!-- Buttons --> */}
                            <div class="resume-buttons header-page-buttons">
                                {/* <!-- Download CV button --> */}
                                <a href="#" class="btn btn-default btn-default2"><i class="fa fa-download"></i>&nbsp; Download my resume</a>
                                {/* <!-- /Download CV button -->
                <!-- Get in Touch button --> */}
                                <a href="#page-contact" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp;  Get in Touch</a>
                                {/* <!-- /Get in Touch button --> */}
                            </div>
                            {/* <!-- /Buttons --> */}

                            <h2 class="section-title2"><i class="fa fa-university"></i>&nbsp; Education</h2>

                            {/* <!-- Resume Item --> */}
                            <div class="resume-item">
                                {/* <!-- Graduation title --> */}
                                <h3 class="section-item-title-1">Graphic Design</h3>
                                {/* <!-- /Graduation title -->
                  <!-- Graduation time --> */}
                                <h4 class="graduation-time">St. Patrick University (2 Years Course) - <span class="graduation-date">Graduation May 2013</span></h4>
                                {/* <!-- /Graduation time -->
                  <!-- content --> */}
                                <div class="graduation-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                {/* <!-- /Content --> */}
                            </div>
                            {/* <!-- /Resume Item -->

             <!-- Resume Item --> */}
                            <div class="resume-item">
                                {/* <!-- Graduation title --> */}
                                <h3 class="section-item-title-1">Master of Web Design</h3>
                                {/* <!-- /Graduation title -->
                  <!-- Graduation time --> */}
                                <h4 class="graduation-time">St. Patrick University (2 Years Course) - Graduation May 2013</h4>
                                {/* <!-- /Graduation time -->
                  <!-- content --> */}
                                <div class="graduation-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                {/* <!-- /Content --> */}
                            </div>
                            {/* <!-- /Resume Item --> */}
                        </div>
                        {/* <!--/ SECTION: Education -->

        <!-- SECTION: WORK EXPERIENCE --> */}
                        <div class="section-education">

                            <h2 class="section-title2"><i class="fa fa-flag"></i>&nbsp; Work Experience</h2>

                            {/* <!-- Resume Item --> */}
                            <div class="resume-item">
                                {/* <!-- Work Place --> */}
                                <h3 class="section-item-title-1">DotRex Co.</h3>
                                {/* <!-- /Work Place -->
                  <!-- Job Time --> */}
                                <h4 class="job">Lead Designer - <span class="job-date">June 2012 - Current</span></h4>
                                {/* <!-- /Job Time-->
                  <!-- content --> */}
                                <div class="graduation-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                {/* <!-- /Content --> */}
                            </div>
                            {/* <!-- /Resume Item -->

             <!-- Resume Item --> */}
                            <div class="resume-item">
                                {/* <!-- Work Place --> */}
                                <h3 class="section-item-title-1">Oasis Ltda.</h3>
                                {/* <!-- /Work Place -->
                  <!-- Job Time --> */}
                                <h4 class="job">Front-end Developer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
                                {/* <!-- /Job Time-->
                  <!-- content --> */}
                                <div class="graduation-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                {/* <!-- /Content --> */}
                            </div>
                            {/* <!-- /Resume Item -->

            <!-- Resume Item --> */}
                            <div class="resume-item">
                                {/* <!-- Work Place --> */}
                                <h3 class="section-item-title-1">Dupstudio</h3>
                                {/* <!-- /Work Place -->
                  <!-- Job Time --> */}
                                <h4 class="job">Designer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
                                {/* <!-- /Job Time-->
                  <!-- content --> */}
                                <div class="graduation-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                {/* <!-- /Content --> */}
                            </div>
                            {/* <!-- /Resume Item -->

            <!-- Resume Item --> */}
                            <div class="resume-item">
                                {/* <!-- Work Place --> */}
                                <h3 class="section-item-title-1">Black Tie Corp.</h3>
                                {/* <!-- /Work Place -->
                  <!-- Job Time --> */}
                                <h4 class="job">Web Designer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
                                {/* <!-- /Job Time-->
                  <!-- content --> */}
                                <div class="graduation-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                {/* <!-- /Content --> */}
                            </div>
                            {/* <!-- /Resume Item --> */}
                        </div>
                        {/* <!--/ SECTION: WORK EXPERIENCE --> */}

                        <h2 class="section-title2"><i class="fa fa-commenting"></i>&nbsp; Testimonials</h2>

                        {/* <!-- Testimonials --> */}
                        <div class="testimonials">
                            {/* <!-- Testimonial Slides --> */}
                            <div class="testimonial-slides" id="testimonial-carousel">
                                {/* <!-- item --> */}
                                <div class="testimonial-item">
                                    {/* <!-- Testimonial Content --> */}
                                    <div class="testimonial-content">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
                                    </div>
                                    {/* <!-- /Testimonial Content -->	
                    <!-- Testimonial Author --> */}
                                    <div class="testimonial-credits">
                                        {/* <!-- picture --> */}
                                        <div class="testimonial-picture">
                                            <img src="img/team2.jpg" alt="" />
                                        </div>
                                        {/* <!-- /picture --> */}
                                        <p class="testimonial-author">Melissa Alvarez</p>
                                        <p class="testimonial-firm">Trexus Co.</p>
                                    </div>
                                    {/* <!-- /Testimonial Author -->								 */}
                                </div>
                                {/* <!-- /item -->
                <!-- item --> */}
                                <div class="testimonial-item">
                                    {/* <!-- Testimonial Content --> */}
                                    <div class="testimonial-content">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
                                    </div>
                                    {/* <!-- /Testimonial Content -->	
                    <!-- Testimonial Author --> */}
                                    <div class="testimonial-credits">
                                        {/* <!-- picture --> */}
                                        <div class="testimonial-picture">
                                            <img src="img/team1.jpg" alt="" />
                                        </div>
                                        {/* <!-- /picture --> */}
                                        <p class="testimonial-author">John Rex</p>
                                        <p class="testimonial-firm">DotRex Co.</p>
                                    </div>
                                    {/* <!-- /Testimonial Author -->								 */}
                                </div>
                                {/* <!-- /item -->
                <!-- item --> */}
                                <div class="testimonial-item">
                                    {/* <!-- Testimonial Content --> */}
                                    <div class="testimonial-content">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
                                    </div>
                                    {/* <!-- /Testimonial Content -->	
                    <!-- Testimonial Author --> */}
                                    <div class="testimonial-credits">
                                        {/* <!-- picture --> */}
                                        <div class="testimonial-picture">
                                            <img src="img/team3.jpg" alt="" />
                                        </div>
                                        {/* <!-- /picture --> */}
                                        <p class="testimonial-author">Jhonathan Smith</p>
                                        <p class="testimonial-firm">RedWings Co.</p>
                                    </div>
                                    {/* <!-- /Testimonial Author -->								 */}
                                </div>
                                {/* <!-- /item --> */}
                            </div>
                            {/* <!-- Testimonial Slides --> */}
                        </div>
                        {/* <!-- /testimonials --> */}

                        <div class="page-footer">
                            {/* <!-- Buttons --> */}
                            <div class="resume-buttons">
                                {/* <!-- Download CV button --> */}
                                <a href="#" class="btn btn-default btn-default2"><i class="fa fa-download"></i>&nbsp; Download my resume</a>
                                {/* <!-- /Download CV button -->
                <!-- Get in Touch button --> */}
                                <a href="#page-contact" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp;  Get in Touch</a>
                                {/* <!-- /Get in Touch button --> */}
                            </div>
                            {/* <!-- /Buttons -->
            <!-- Quote --> */}
                            <p class="footer-quote">"The best way to predict the future is to create it" <br /><i>Peter Drucker</i></p>
                            {/* <!-- /Quote --> */}
                        </div>

                    </div>
                    {/* <!-- /PAGE: RESUME  -->	

    <!-- SECTION: SKILLS--> */}
                    <div class="section-vcardbody section-page" id="page-skills">
                        <div class="section-skills">

                            {/* <!-- Section title --> */}
                            <h2 class="section-title">SKILLS</h2>
                            {/* <!-- /Section title --> */}


                            {/* <!-- Subtitle --> */}
                            <h3 class="section-item-title-2"><i class="fa fa-users"></i>&nbsp;&nbsp; Professional Skills</h3>
                            {/* <!-- /Subtitle --> */}

                            {/* <!-- Skils List --> */}
                            <ul class="skills-list">
                                {/* <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" data-percent="70%" style="width: 70%;">
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                        <span class="progress-type">Comunication</span>
                                        <span class="progress-completed">70%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list -->
                <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-2" role="progressbar" data-percent="85%" style="width: 85%;">
                                            <span class="sr-only">85% Complete</span>
                                        </div>
                                        <span class="progress-type">Leadership</span>
                                        <span class="progress-completed">85%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list -->
                <!-- item-list --> */}
                                <li>
                                    <div class="progress" title="Doing my best!">
                                        <div class="progress-bar progress-bar-3" role="progressbar" data-percent="85%" style="width: 85%;">
                                            <span class="sr-only">85% Complete</span>
                                        </div>
                                        <span class="progress-type">Confidence</span>
                                        <span class="progress-completed">85%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list --> */}
                            </ul>
                            {/* <!-- /Skils List -->

             <!-- Subtitle --> */}
                            <h3 class="section-item-title-2"><i class="fa fa-laptop"></i>&nbsp;&nbsp; Software Skills</h3>
                            {/* <!-- /Subtitle -->

            <!-- Skils List --> */}
                            <ul class="skills-list">
                                {/* <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar" data-percent="85%" role="progressbar" style="width: 85%;">
                                            <span class="sr-only">85% Complete</span>
                                        </div>
                                        <span class="progress-type">Adobe Photoshop</span>
                                        <span class="progress-completed">85%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list -->
                <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-2" data-percent="85%" role="progressbar" style="width: 85%;">
                                            <span class="sr-only">85% Complete</span>
                                        </div>
                                        <span class="progress-type">Adobe Illustrator</span>
                                        <span class="progress-completed">85%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list -->
                <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style="width: 40%;">
                                            <span class="sr-only">40% Complete</span>
                                        </div>
                                        <span class="progress-type">Adobe Fireworks</span>
                                        <span class="progress-completed">40%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list --> */}
                            </ul>
                            {/* <!-- /Skils List -->

             <!-- Subtitle --> */}
                            <h3 class="section-item-title-2"><i class="fa fa-code"></i>&nbsp;&nbsp; Code Skills</h3>
                            {/* <!-- /Subtitle -->

            <!-- Skils List --> */}
                            <ul class="skills-list">
                                {/* <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar" data-percent="80%" role="progressbar" style="width: 80%;">
                                            <span class="sr-only">80% Complete</span>
                                        </div>
                                        <span class="progress-type">HTML5 / CSS3</span>
                                        <span class="progress-completed">80%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list -->
                <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-2" data-percent="60%" role="progressbar" style="width: 60%;">
                                            <span class="sr-only">60% Complete</span>
                                        </div>
                                        <span class="progress-type">Javascript</span>
                                        <span class="progress-completed">60%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list -->
                <!-- item-list --> */}
                                <li>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style="width: 40%;">
                                            <span class="sr-only">40% Complete</span>
                                        </div>
                                        <span class="progress-type">PHP</span>
                                        <span class="progress-completed">40%</span>
                                    </div>
                                </li>
                                {/* <!-- /item list --> */}
                            </ul>
                            {/* <!-- /Skils List --> */}

                        </div>
                    </div>
                    {/* <!-- /SECTION: SKILLS  -->	

    <!-- SECTION: PORTFOLIO--> */}
                    <div class="section-vcardbody section-page" id="page-portfolio">
                        <div class="section-portfolio">

                            {/* <!-- Section title --> */}
                            <h2 class="section-title">Portfolio</h2>
                            {/* <!-- /Section title -->

            <!-- Projects list --> */}
                            <div class="projects-list">

                                {/* <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p1.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p1.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p2.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p2.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p3.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p3.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p4.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p4.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p5.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p5.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p6.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p6.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p7.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p7.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p8.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p8.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item -->

                <!-- item --> */}
                                <div class="project-item">
                                    {/* <!-- ==> Put your thumbnail as a background --> */}
                                    <a href="img/portfolio/p9.jpg" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('img/portfolio/thumb-p9.jpg');">
                                        {/* <!-- project-description --> */}
                                        <div class="project-description-wrapper">
                                            <div class="project-description">
                                                {/* <!-- project name --> */}
                                                <h2 class="project-title">Project Title</h2>
                                                {/* <!-- /project name --> */}
                                                <span class="see-more">Project Tags</span>
                                            </div>
                                        </div>
                                        {/* <!-- /project-description --> */}
                                    </a>
                                </div>
                                {/* <!-- /item --> */}


                            </div>
                            {/* <!-- /projects list -->	 */}

                        </div>
                    </div>
                    {/* <!-- /SECTION: PORTFOLIO  -->	

    <!-- SECTION: BLOG--> */}
                    <div class="section-vcardbody section-page" id="page-blog">
                        <div class="section-blog">

                            {/* <!-- Section title --> */}
                            <h2 class="section-title">Blog</h2>
                            {/* <!-- /Section title -->          
            
            <!-- BLOG POSTS --> */}
                            <div class="blog-posts">
                                {/* <!-- blog-item --> */}
                                <div class="blog-item">
                                    <div class="blog-item-wrapper">
                                        {/* <!-- blog item thumbnail --> */}
                                        <div class="blog-item-thumb">
                                            <a href="single.html" class="loadPost"><img src="img/blog1.jpg" alt="" /></a>
                                        </div>
                                        {/* <!-- /blog item thumbnail -->
                        <!-- Blog item - infos --> */}
                                        <div class="blog-item-infos">
                                            {/* <!-- blog-item-title --> */}
                                            <div class="blog-item-title-wrapper">
                                                <h2 class="blog-item-title title-border"><a href="single.html" class="loadPost">How to succeed in meetings</a></h2>
                                            </div>
                                            {/* <!-- /blog-item-title -->
                            <!-- blog item - description --> */}
                                            <div class="blog-item-description">
                                                <p><a href="single.html" class="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                                            </div>
                                            {/* <!-- /blog-item-description -->
                            <!-- blog item - link --> */}
                                            <div class="blog-item-link">
                                                <a href="single.html" class="btn btn-default loadPost">See More</a>
                                            </div>
                                            {/* <!-- /blog item - link --> */}
                                        </div>
                                        {/* <!-- /blog item - infos --> */}
                                    </div>
                                </div>
                                {/* <!-- /blog-item -->

                <!-- blog-item --> */}
                                <div class="blog-item">
                                    <div class="blog-item-wrapper">
                                        {/* <!-- blog item thumbnail --> */}
                                        <div class="blog-item-thumb">
                                            <a href="single.html" class="loadPost"><img src="img/blog2.jpg" alt=""></a>
                        </div>
                                            {/* <!-- /blog item thumbnail -->
                        <!-- Blog item - infos --> */}
                                            <div class="blog-item-infos">
                                                {/* <!-- blog-item-title --> */}
                                                <div class="blog-item-title-wrapper">
                                                    <h2 class="blog-item-title title-border"><a href="single.html" class="loadPost">10 tips to improve your laptop</a></h2>
                                                </div>
                                                {/* <!-- /blog-item-title -->
                            <!-- blog item - description --> */}
                                                <div class="blog-item-description">
                                                    <p><a href="single.html" class="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                                                </div>
                                                {/* <!-- /blog-item-description -->
                            <!-- blog item - link --> */}
                                                <div class="blog-item-link">
                                                    <a href="single.html" class="btn btn-default loadPost">See More</a>
                                                </div>
                                                {/* <!-- /blog item - link --> */}
                                            </div>
                                            {/* <!-- /blog item - infos --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /blog-item --> */}

                                    {/* <!-- blog-item --> */}
                                    <div class="blog-item">
                                        <div class="blog-item-wrapper">
                                            {/* <!-- blog item thumbnail --> */}
                                            <div class="blog-item-thumb">
                                                <a href="single.html" class="loadPost"><img src="img/blog3.jpg" alt="" /></a>
                                            </div>
                                            {/* <!-- /blog item thumbnail -->
                        <!-- Blog item - infos --> */}
                                            <div class="blog-item-infos">
                                                {/* <!-- blog-item-title --> */}
                                                <div class="blog-item-title-wrapper">
                                                    <h2 class="blog-item-title title-border"><a href="single.html" class="loadPost">News of the week</a></h2>
                                                </div>
                                                {/* <!-- /blog-item-title -->
                            <!-- blog item - description --> */}
                                                <div class="blog-item-description">
                                                    <p><a href="single.html" class="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                                                </div>
                                                {/* <!-- /blog-item-description -->
                            <!-- blog item - link --> */}
                                                <div class="blog-item-link">
                                                    <a href="single.html" class="btn btn-default loadPost">See More</a>
                                                </div>
                                                {/* <!-- /blog item - link --> */}
                                            </div>
                                            {/* <!-- /blog item - infos --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /blog-item -->

                <!-- blog-item --> */}
                                    <div class="blog-item">
                                        <div class="blog-item-wrapper">
                                            {/* <!-- blog item thumbnail --> */}
                                            <div class="blog-item-thumb">
                                                <a href="single.html" class="loadPost"><img src="img/blog4.jpg" alt="" /></a>
                                            </div>
                                            {/* <!-- /blog item thumbnail -->
                        <!-- Blog item - infos --> */}
                                            <div class="blog-item-infos">
                                                {/* <!-- blog-item-title --> */}
                                                <div class="blog-item-title-wrapper">
                                                    <h2 class="blog-item-title title-border"><a href="single.html" class="loadPost">How to be a leader</a></h2>
                                                </div>
                                                {/* <!-- /blog-item-title -->
                            <!-- blog item - description --> */}
                                                <div class="blog-item-description">
                                                    <p><a href="single.html" class="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                                                </div>
                                                {/* <!-- /blog-item-description -->
                            <!-- blog item - link --> */}
                                                <div class="blog-item-link">
                                                    <a href="single.html" class="btn btn-default loadPost">See More</a>
                                                </div>
                                                {/* <!-- /blog item - link --> */}
                                            </div>
                                            {/* <!-- /blog item - infos --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /blog-item -->

                <!-- blog-item --> */}
                                    <div class="blog-item">
                                        <div class="blog-item-wrapper">
                                            {/* <!-- blog item thumbnail --> */}
                                            <div class="blog-item-thumb">
                                                <a href="single.html" class="loadPost"><img src="img/blog5.jpg" alt="" /></a>
                                            </div>
                                            {/* <!-- /blog item thumbnail -->
                        <!-- Blog item - infos --> */}
                                            <div class="blog-item-infos">
                                                {/* <!-- blog-item-title --> */}
                                                <div class="blog-item-title-wrapper">
                                                    <h2 class="blog-item-title title-border"><a href="single.html" class="loadPost">Tips to talk in public</a></h2>
                                                </div>
                                                {/* <!-- /blog-item-title -->
                            <!-- blog item - description --> */}
                                                <div class="blog-item-description">
                                                    <p><a href="single.html" class="loadPost">Designed by Norway-based practice Snhetta, in collaboration with local firm EHDD, the 10-story concrete structure will compliment SFMOMA’s original...</a></p>
                                                </div>
                                                {/* <!-- /blog-item-description -->
                            <!-- blog item - link --> */}
                                                <div class="blog-item-link">
                                                    <a href="single.html" class="btn btn-default loadPost">See More</a>
                                                </div>
                                                {/* <!-- /blog item - link --> */}
                                            </div>
                                            {/* <!-- /blog item - infos --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /blog-item --> */}
                                </div>
                                {/* <!-- /BLOG POSTS -->
            <!-- Pagination --> */}
                                <div class="section-pagination">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <span class="pagination-numbers">
                                                <a href="#">1</a>
                                                <a href="#">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">5</a>
                                                <a href="#">6</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Pagination --> */}
                            </div>
                        </div>
                        {/* <!-- /SECTION: BLOG  -->	

    <!-- SECTION: BLOG SINGLE--> */}
                        <div class="section-vcardbody section-page section-page-single" id="page-blog-single">
                            <div class="section-blog-single">
                                {/* <!-- Load the single.html content via AJAX --> */}
                                <div id="postHere"></div>
                                {/* <!-- /Load the single.html content via AJAX --> */}
                            </div>
                        </div>
                        {/* <!-- /SECTION: BLOG SINGLE  -->

    <!-- SECTION: CONTACT--> */}
                        <div class="section-vcardbody section-page" id="page-contact">
                            <div class="section-contact">

                                {/* <!-- Section title --> */}
                                <h2 class="section-title">Contact</h2>
                                {/* <!-- /Section title --> */}

                                <div class="map">
                                    <div class="map-overlay"></div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.985568651915!2d-0.12905994797222892!3d51.50665753790812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1spt-BR!2sbr!4v1443128181953" height="250" style="border:0" allowfullscreen></iframe>
                                </div>

                                {/* <!-- Contact infos -->                  */}
                                <div class="contact-infos">
                                    <h4 class="contact-subtitle-1"><i class="fa fa-map"></i>&nbsp;   Address</h4>
                                    <p>451 Lorem Ipsum, London - Uk</p>
                                    <h4 class="contact-subtitle-1"><i class="fa fa-phone-square"></i>&nbsp; Phone</h4>
                                    <p>+61 3 8376 6284</p>
                                    <h4 class="contact-subtitle-1"><i class="fa fa-envelope"></i>&nbsp; Mail</h4>
                                    <p>john.Rex@dotrex.com</p>
                                </div>
                                {/* <!-- /Contact infos -->  */}

                                {/* <!-- Contact form --> */}
                                <h4 class="contact-subtitle-1"><i class="fa fa-paper-plane-o"></i>&nbsp; Send Me a Message</h4>
                                <form id="contactForm" method="post" class="form">
                                    {/* <!-- Form Field --> */}
                                    <div class="form-group">
                                        <input class="form-control required" id="name" name="name" placeholder="Name" type="text" required />
                                    </div>
                                    {/* <!-- /Form Field -->
                <!-- Form Field --> */}
                                    <div class="form-group">
                                        <input class="form-control required" id="email" name="email" placeholder="Email" type="email" required />
                                    </div>
                                    {/* <!-- /Form Field -->
                <!-- Form Field --> */}
                                    <div class="form-group">
                                        <input class="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required />
                                    </div>
                                    {/* <!-- /Form Field -->
                <!-- Form Field --> */}
                                    <div class="form-group">
                                        <textarea class="form-control required" id="message" name="message" placeholder="Message" rows="5" required></textarea>
                                    </div>
                                    {/* <!-- /Form Field -->
                <!-- Form Field --> */}
                                    <div class="form-group">
                                        <input type="submit" class="btn btn-default form-send" value="Send!" />
                                    </div>
                                    {/* <!-- /Form Field --> */}
                                </form>
                                {/* <!-- /Contact Form --> */}

                            </div>
                        </div>
                        {/* <!-- /SECTION: CONTACT  -->	 */}
                    </div>

</section>
            
        )
    }
}
