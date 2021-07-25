import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styles from './PostDetail.module.css'


const PostDetailModule = () => {
   const [data, setData] = useState([]);
   useEffect(async () => {
      const result = await axios(
        `http://localhost:1337/posts/${id}`,
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
            <div className={styles.listPost}>
             <a href="#" className={styles.postItem}>
                <p className={styles.postTitle}>{item.Title}</p>
                <p className={styles.postTitle}>{item.Content}</p>
             </a>
          </div>
         }
      </div>
   )
}

export default PostDetailModule;
