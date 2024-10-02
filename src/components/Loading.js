import classes from "@/styles/loading.module.css";

function Loading() {
  const divs = [];
  for (let i = 0; i < 6; i++) {
    divs.push(
      <div className={classes.card} key={i}>
        <div className={classes.thumbnail}></div>
        <h1></h1>
        <p></p>
        <button></button>
      </div>
    );
  }
  return (
    <section className={classes.skeleton__section}>
      <div className={classes.skeleton__wrapper}>{divs}</div>
    </section>
  );
}

export default Loading;
