document.documentElement.style .setProperty('--primary', '#2b2b2b');
document.documentElement.style .setProperty('--secondary', '#ddd');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', 'orange');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1366px');
document.documentElement.style .setProperty('--navbar-background', '#fff');
document.documentElement.style .setProperty('--navbar-text-color', '#000');
document.documentElement.style .setProperty('--header-background', 'transparent');
document.documentElement.style .setProperty('--header-text-color', 'white');
document.documentElement.style .setProperty('--footer-background', 'white');
document.documentElement.style .setProperty('--footer-text-color', 'black');
document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');
document.documentElement.style .setProperty('--seo-page-title-color', '#fff');





const navbar_data = [
  {
      brand:    "",
  }
];
function navbar_template(navbar) {
  return `
      <h3 class="text-quaternary"><span class="company-name"></span></h3>
`;
}

document.getElementById("navbar-empty").innerHTML = `${navbar_data.map(navbar_template).join('')}`;


const footer_data = [
   {
       brand:    "Your Health Marketplace",
   }
]; 
function footer_template(foot) {
    return `

    <div class="grid set-cols-1">

       
        <div class="column start-vertical-between">
            <p class="copyright">Copyright 2019.
            <span class="company-name"></span>. All Rights Reserved.</p>
            <p<b>Disclaimer:</b>Find Insurance Quotes strives to keep its information accurate and up to date. This information may be different than what you see when you visit a financial institution, service provider or specific product’s site. All financial products, shopping products and services are presented without warranty. When evaluating offers, please review the financial institution’s Terms and Conditions. Pre-qualified offers are not binding. If you find discrepancies with your credit score or information from your credit report, please contact TransUnion® directly.</p>
        </div>

        <ul class="column menu-start">
            <li><a href="privacy.html">Privacy</a></li>
            <li> | <a href="terms.html"> Term of Use</a></li>
        </ul>
        
    </div>
  `;
}
document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();


