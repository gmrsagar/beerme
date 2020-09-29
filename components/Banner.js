import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className="banner container-fluid">
      <div className="row">
        <div className="col-4">
          <img
            className={styles.banner__poster}
            src="https://images.punkapi.com/v2/keg.png"
            alt="Keg"
          />
        </div>
        <div className="col">
          <div className="banner__description">
            <h2>Banner title</h2>
            <span>Tagline</span>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
