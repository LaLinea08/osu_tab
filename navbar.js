class TopNavbar extends HTMLElement {
    connectedCallback() {
        // This grabs the page name you set in your HTML, or defaults to "Hub"
        const pageName = this.getAttribute('page-name') || 'Hub';

        this.innerHTML = `
            <header>
                <div class="ambient-glow"></div>
                
                <div class="nav-container">
                    <div class="logo-area">
                        <span class="osu-logo-circle"></span>
                        <h1 class="nav-title">osu!<span class="brand-pink">tab</span><span class="page-suffix">${pageName}</span></h1>
                    </div>
                    
                    <nav>
                        <a href="index.html" class="nav-home-btn">home</a>
                        <!-- If you ever want to add a new link to every page, you only have to do it right here! -->
                    </nav>
                </div>
            </header>
        `;
    }
}

// Registers the custom element with the browser
customElements.define('top-navbar', TopNavbar);
