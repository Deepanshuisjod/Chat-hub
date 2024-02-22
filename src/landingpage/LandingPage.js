import React from "react";
import styles from './LandingPage.module.css'
import img1 from './images/usf.svg'
import img2 from './images/msg.svg'
import img3 from './images/security.svg'
import img4 from './images/logo.png'
const min_age = 18;
const max_age = 99;


export default function LandingPage() {
  return (
    <body>
        <header>
          <div className={styles.tophead}>ChatHub</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Sign In</a>
            </nav>
        </header>
        <p className={styles.qlp}>Chat seamlessly, connect effortlessly – your perfect conversation starts here</p>
        <img src={img4} className={styles.logo}></img>
        <form>
          <div className={styles.formcontainer}>
            <div className={styles.list}>
              <label>Username : </label>
              <input placeholder="abc@123" required/>
            </div>
            <br/>
            <div className={styles.list}>
              <label>Your Gender : </label>
              <label className={styles.gender}>
                <input type="radio" name="gender" className={styles.radio} required/>
                Male
              </label>
              <label className={styles.list}>
                <input type="radio" name="gender" className={styles.radio}/>
                Female
              </label>
            </div>
            <br/>
            <div className={styles.list}>
              <label>Age : </label>
              <input type="number" name="age" min={min_age} max={max_age} required className={styles.age}/>
            </div>
            <br/>
            <div className={styles.list}>
              <label>Password : </label>
              <input type="password" name="password" minlength="8" required/>
            </div>
            <br/>
            <div className={styles.list}>
              <label><button className={styles.buttonclass} type="submit">Submit</button></label>
            </div>

          </div>
        </form>
        <br/>
        <div className={styles.features}>
          <h2 class={styles.featureheading}>FEATURES</h2>
          <div className={styles.featurecontainer}>
            <div className={styles.f1}>
              <h2>User-Friendly Interface</h2>
              <img src={img1} className={styles.image}></img>
              <p>Navigate effortlessly through our sleek and intuitive interface. Whether you're a tech enthusiast or new to messaging apps, Chat Hub ensures a user-friendly experience for everyone.</p>
            </div>
            <div className={styles.f2}>
              <h2>Instant Messaging</h2>
              <img src={img2} className={styles.image}></img>
              <p>Say goodbye to delays. Enjoy lightning-fast, instant messaging that keeps you connected with friends, family, and colleagues in real-time.</p>
            </div>
            <div className={styles.f3}>
              <h2>Privacy and Security</h2>
              <img src={img3} className={styles.image}></img>
              <p>Your conversations are your business. Chat Hub prioritizes your privacy and security with end-to-end encryption, giving you peace of mind for every exchange.</p>
            </div>
          </div>
        </div>

        <footer>
    <div class="footer-content">

      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="LandingPage.js">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Connect with Me</h3>
        <ul>
          <li><a href="https://github.com/Deepanshuisjod">GitHub</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 ChatHub. All rights reserved.</p>
    </div>
  </footer>
    </body>
  );
}