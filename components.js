const pageList = `
    <li><a href="/">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="experience.html">Experience</a></li>
    <li><a href="contact.html">Contact</a></li>
    `;

    class Header extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <header>
                    <nav class="colors">
                        <div class="wrapper">
                        <ul class="drop">
                            ${pageList}
                        </ul>
                        </div>
                    </nav>
                </header>
            
            `;
        }

    }

customElements.define('site-header', Header);