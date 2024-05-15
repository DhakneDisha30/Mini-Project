const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/vds-logo.png" class="logo" alt="">
        
    </div>
    <p class="info">Address:Paridhan Mens Wear,Juni Peth,Shukleshwar Chauk,Rahuri,413705</p>
    <p class="info">support emails - daulenit125@gmail</p>
    <p class="info">contact:86573-37777</p>
    <div class="footer-social-container">
        
        <div>
        <a href="mailto:daulenit125@gmail"><img src="img/mail_icon.jpg" alt="email"></a>
        <a href="https://www.instagram.com/daule.ni3_7777"><img src="img/instagram_icon.png" alt="instagram"></a>
            
            <a href="https://wa.me/8657337777" target="_blank" rel="noopener noreferrer"><img src="img/whatsapp_icon.png" alt="WhatsApp"></a>
        </div>
    </div>
    <p class="footer-credit">Paridhan Mens Store</p>
    `;
}

createFooter();
