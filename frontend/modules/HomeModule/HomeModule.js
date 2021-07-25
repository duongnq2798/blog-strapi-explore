import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Link from 'next/link'
import styles from './HomeModule.module.css'


const HomeModule = () => {
   const [data, setData] = useState([]);

   useEffect(async () => {
      const result = await axios(
        'http://localhost:1337/posts',
      );
      console.log(result.data)
   
      setData(result.data);
    }, []);
   return (
      <div className={styles.container}>
         <ul className={styles.menuList}>
            <li className={styles.menuItem}><a href="#">Home</a></li>
            <li className={styles.menuItem}><a href="#">Features</a></li>
            <li className={styles.menuItem}><a href="#">Adventure</a></li>
            <li className={styles.menuItem}><a href="#">Life</a></li>
            <li className={styles.menuItem}><a href="#">About Me</a></li>
            <li className={styles.menuItem}><a href="#">Contact</a></li>
         </ul>
         <p className={styles.latestTitle}>LATEST FROM THE BLOG</p>
         {
            data.map((item) => {
               return (
                  <div className={styles.listPost}>
                     <a href={`/detail/${item.id}`} className={styles.postItem}>
                        <p className={styles.postTitle}>{item.id}</p>
                        <p className={styles.postTitle}>{item.Title}</p>
                     </a>
                  </div>
               )
            })
         }
      </div>
   )
}

export default HomeModule;
