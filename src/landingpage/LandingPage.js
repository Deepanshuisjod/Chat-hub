import React from "react";
import styles from './LandingPage.module.css'
export default function LandingPage() {
  return (
    <body>
        <header>
          <div>ChatHub</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Sign In</a>
            </nav>
        </header>
        <p className={styles.qlp}>Chat seamlessly, connect effortlessly – your perfect conversation starts here</p>
        <form>
          <div className={styles.username}>
            <label>Username</label>
            <input/>
          </div>
          <div className={styles.list}>
            <label>Your Gender : </label>
            <label className={styles.gender}>
              <input type="radio" name="gender" className={styles.radio} />
              Male
            </label>
            <label className={styles.gender}>
              <input type="radio" name="gender" className={styles.radio}/>
              Female
            </label>
          </div>
        </form>
    </body>
  );
}