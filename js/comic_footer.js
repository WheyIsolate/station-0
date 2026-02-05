//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p>Copyright © 2026 mayochum. All rights reserved.</p>
        <p><strong>Powered by <a href="https://rarebit.neocities.org">Rarebit</a>. Site made by:</strong></p>
        <div style="height: 90px"></div>
        <img src="img/em.png" class="footerImage">
        <a href="https://exclave.city/"><img src="https://exclave.city/images/button1.gif" alt=Exclave></a>
    </footer>
`;
