import styles from './Footer.module.css';
const Footer = () => {

    return(
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
          
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4"><p className={styles.footer}>FOOTER</p></h4>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;