import Header from "../components/Header/Header";

const ContactPage = () => {
   
   return(
      <div class="main">
        <Header/>
        <div class="container">
              <div class="text">
              <h2>
                Our Academic Programs
              </h2>
              <p>
                Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
              </p>
              <h2>
              Undergraduate Programs (UG)
              </h2>
              <hr></hr>
              <ul>
                <li>
                      *Bachelor of Science (B.Sc.)*
                          Computer Science (3 years)
                        Information Technology (3 years)
                        Biotechnology (3 years)
                </li>
                <li>
                        *Bachelor of Commerce (B.Com)*
                        Accounting & Finance (3 years)
                        Banking & Insurance (3 years)
                </li>
                <li>
                        *Bachelor of Arts (B.A.)*
                        English Literature (3 years)
                        Psychology (3 years)
                </li>
                
              </ul>
              <h2>
                Postgraduate Programs (PG)
              </h2>
              <hr></hr>
              <ul>
                <li>
                *Master of Science (M.Sc.)*
                 Computer Science (2 years)
                </li>
                <li>
                  *Master of Commerce (M.Com)* (2 years)
                </li>
                <li>
                  Information Technology (2 years)
                </li>
              </ul>
              <h2>
                Specialized & Vocational Courses

              </h2>
              <hr></hr>
              <p>
                In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
              </p>
              <p>
                Explore detailed syllabi and admission criteria on our Admissions page.
              </p>
              <button type="submit">Inquire About Courses</button>
              </div>
            </div>
      </div>
   )

}

export default ContactPage;