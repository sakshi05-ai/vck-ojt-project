import Header from "../components/Header/Header";

const ContactPage = () => {
   
   return(
      <div class="main">
        <Header/>
            <div class="container">
            <div class="text">
             <h2>Contact Us</h2>
             <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

             <h2>General Enquiries</h2>
            <p>Vivekanand College Main Campus
              [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
               India
            </p>
            <p>
               Phone: *+91 12345 67890*
               Email: *info@vivekanandcollege.edu*
               Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
            </p>

            <h2>Admissions Office</h2>
            <p>
               For all admission-related queries regarding undergraduate or postgraduate programs:
               Phone: +91 98765 43210
               Email: admissions@vivekanandcollege.edu
            </p>
            <h2>
                Student Support Services
            </h2>
            <p>
               For current student support, academic advising, or general assistance:
               Phone: +91 87654 32109
               Email: studentsupport@vivekanandcollege.edu
            </p>
            <h2>
                  Find Us on the Map
           </h2>
            <p>
              [You can embed a Google Map here later using an iframe or a React map library.]
               View on Google Maps
            </p>
           <h2>
              Send Us a Message
           </h2>
            <p>
             [A contact form with fields for Name, Email, Subject, Message can be added here.]
            </p>
      </div>
    </div>
</div>
   )



   

}

export default ContactPage;