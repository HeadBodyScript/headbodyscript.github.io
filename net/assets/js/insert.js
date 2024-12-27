document.getElementsByTagName('head')[0].innerHTML +=
`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="HeadBodyScript">
<meta name="twitter:description" content="Just code it">
<meta name="twitter:image" content="https://raw.githubusercontent.com/HeadBodyScript/HeadBodyScript/main/user-interface/twitter-icon.png">

<meta property="og:type" content="website">
<meta property="og:title" content="HeadBodyScript">
<meta property="og:url" content="https://headbodyscript.nl/">
<meta property="og:image" content="https://raw.githubusercontent.com/HeadBodyScript/HeadBodyScript/main/user-interface/twitter-icon.png">
<meta property="og:description" content="Just code it">

<meta name="description" content="Just code it">
<meta name="keywords" content="Minecraft, Datapacks, Texturepack, Maps, HeadBodyScript">
<meta name="author" content="HeadBodyScript">
<meta name="language" content="EN">

<link rel="stylesheet" href="assets/css/init.css">
<link rel="stylesheet" href="assets/css/cookies.css">
<link rel="icon" href="favicon.ico">
<link rel="apple-touch-icon" href="assets/icon/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="assets/icon/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="assets/icon/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="manifest" href="manifest.json"/>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2BCEYTZM4F"></script>
<script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2BCEYTZM4F');
</script>
`
document.getElementsByTagName('header')[0].innerHTML =
`
<div class="wrapper">
        <ul class="center row-desktop justify-content-evenly">
          <li class="center"><div>
            <a class="logo" href="https://headbodyscript.nl">HEADBODYSCRIPT</a>
            <!-- <img class="logo" src="assets/icon/logo.png" alt="HeadBodyScript"> -->
          </div></li>
          <li class="center row">
            <div>
              <a href="https://headbodyscript.nl">HOME</a>
            </div>
            <div>
              <a href="https://headbodyscript.nl/projects">PROJECTS</a>
            </div>
            <div>
              <a href="https://headbodyscript.nl/donate">DONATE</a>
            </div>
          </li>
          <li class="center">
            <a class="column" href="https://headbodyscript.nl/user">
              <p class="login">LOGIN</p>
              <div class="visit"></div>
            </a>
          </li>
        </ul>
    </div>
`
document.getElementsByTagName('footer')[0].innerHTML = 
`
      <ul class="row">
        <li><a href="https://headbodyscript.nl/cookies">Cookies</a></li>
        <li><a href="https://headbodyscript.nl/user/consent-preferences">Consent Preferences</a></li>
        <li><a href="https://headbodyscript.nl/terms-and-conditions">Terms and Conditions</a></li>
        <li><a href="https://headbodyscript.nl/disclaimer">Disclaimer</a></li>
        <li><a href="https://headbodyscript.nl/privacy-policy">Privacy Policy</a></li>
        <li><a href="https://headbodyscript.nl/refund-policy">Refund Policy</a></li>
        <li><a href="https://headbodyscript.nl/credit">Credit</a></li>
        <li class="row">
          <a href="https://www.instagram.com/headbodyscript/"><i class="bi bi-instagram"></i></a>
          <a href="https://x.com/HeadBodyScript"><i class="bi bi-twitter"></i></a>
          <a href="https://discord.gg/pxEk4Ey4Hv"><i class="bi bi-discord"></i></a>
          <a href="https://github.com/HeadBodyScript"><i class="bi bi-github"></i></a>
          <a href="https://www.planetminecraft.com/member/headbodyscript/"><i class="bi bi-globe-americas"></i></a></li>
      </ul>
`