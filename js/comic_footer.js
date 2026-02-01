//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p>Copyright © 2026 mayochum. All rights reserved.</p>
        <p><strong>Powered by</strong></p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a>
        <p><strong>With help from</strong></p>
        <a href="https://exclave.city/"><img src="https://exclave.city/images/button1.gif" alt=Exclave></a>
    </footer>
`;
