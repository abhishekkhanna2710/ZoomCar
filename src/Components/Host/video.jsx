import styles from "./Host.module.css";

function Rahul(){
    return <>
     <div className={styles.body}  >
        <div className={styles.youtubeVideo}>
        <iframe  width="800" height="400" src="https://www.youtube.com/embed/_zWKLHLj5kM" title="Zoomcar Host Rahul | Bangalore | Hear from our Hosts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
     </div>
    </>
}

function Vanshika(){
    return <>
    <div className={styles.body}>
       <div className={styles.youtubeVideo}>
    <iframe  width="800" height="400" src="https://www.youtube.com/embed/7uCM_Xw5cTI" title="Zoomcar Host Vanshika | Mumbai | Hear from our Hosts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
     </div>
    </>
}
function Sai(){
    return <>
    <div className={styles.body}>
       <div className={styles.youtubeVideo}>
       <iframe  width="800" height="400"  src="https://www.youtube.com/embed/iFTFlp6WSsU" title="Zoomcar Host Sai Krishna | Hyderabad | Hear from our Hosts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
     </div>
    </>
}


export { Rahul,Vanshika,Sai};