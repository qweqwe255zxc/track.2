

const Footer = () => {
    return (
        <footer>
            <div className="footer-brand">
                <a href="">Balenciaga</a>
                <a href="">Track.2 — future in motion</a>
            </div>
            <div className="info-container">
                <div className="info-block">
                    <h2 className="footerfooter-title">Customer Service</h2>
                    <a href="">FAQ</a>
                    <a href="">Shipping & Returns</a>
                    <a href="">Size Guide</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="info-block">
                    <h2 className="footer-title">Company</h2>
                    <a href="">About Balenciaga</a>
                    <a href="">Careers</a>
                    <a href="">Sustainability</a>
                    <a href="">Legal Notice</a>
                </div>
                <div className="info-block">
                    <h2 className="footer-title">Soc. Media</h2>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                    <a href="">YouTube</a>
                    <a href="">TikTok</a>
                </div>
            </div>
            <div className="newsletter-container">
                <div className="newsletter-block">
                    <h2 className="footer-title">Subscribe to our newsletter</h2>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Email" />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p className="newsletter-text">The Latest drops, collections, and runway shows.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;