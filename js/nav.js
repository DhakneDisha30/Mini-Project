const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/vds-logo.png" class="brand-logo" alt="">
            <p>PARIDHAN MENS WEAR</p>
            
            <div class="nav-items">
                
            <li class="link-item">
          
                <img src="img/user.png" alt="User">
            </a>
        </li>
        
               
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="index1.html" class="link">Home</a></li>
        
        <li class="link-item"><a href="product.html" class="link">Men</a></li>
        <li class="link-item"><a href="contact.html" class="link">Contact</a></li>
        
         
        </ul>
    `;
}

createNav();
