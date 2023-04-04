document.write(`
<div class="sidebar-toggler x">
<a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-list sb"></i></a>
</div>
<div id="app">
  <div id="sidebar" class="active">
    <div class="sidebar-wrapper active">
      <div class="sidebar-header position-relative">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo">
            <a href="index.html">
              <picture>
                <source srcset="/dimitra/content/logo/dark/logo.png" media="(prefers-color-scheme: dark)">
                <img src="/dimitra/content/logo/logo.png">
              </picture>
            </a>
          </div>
        </div>
            <div class="theme-toggle d-flex gap-2 align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/> </svg>
            <div class="form-check form-switch fs-6"><input class="form-check-input me-0" type="checkbox" id="toggle-dark" style="cursor: pointer"/> <label class="form-check-label"></label></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16"><path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/><path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/></svg></div>
      </div>

    <div class="sidebar-menu">
    <ul class="menu">
        <li class="sidebar-title">Menu</li>

        <li 
        class="sidebar-item" id="Dashboard"><a href="/" class="sidebar-link"><i class="bi bi-grid-3x3-gap-fill"></i>
            <span>Dashboard</span></a>
        </li>

        <li 
        class="sidebar-item" id="Information"><a href="/pages/information" class="sidebar-link"><i class="bi bi-person-vcard"></i>
            <span>About us</span></a>
        </li>

        <li class="sidebar-title">Minecraft</li>

        <li class="sidebar-item has-sub" id="Data"><a href="#" class="sidebar-link"><i class="bi bi-file-earmark-zip-fill"></i>
            <span>Data Packs</span></a><ul class="submenu" id="DataPacks">
                <li class="submenu-item" id="core"><a href="/pages/data/core">[D] Core</a></li>
                <li class="submenu-item" id="fire-arms"><a href="/pages/data/firearms">[D] Firearms</a></li>
                <li class="submenu-item" id="glock"><a href="/pages/data/glock">[D] Glock</a></li>
                <li class="submenu-item" id="mossberg"><a href="/pages/data/mossberg">[D] Mossberg</a></li>
                <li class="submenu-item" id="kurz"><a href="/pages/data/kurz">[D] Kurz</a></li>
                <li class="submenu-item" id="ump"><a href="/pages/data/ump">[D] UMP</a></li>
                <li class="submenu-item" id="kalishnikov"><a href="/pages/data/Kalishnikov">[D] Kalishnikov</a></li></ul>
        </li>

        <li 
        class="sidebar-item has-sub" id="Texture"><a href="#" class="sidebar-link"><i class="bi bi-file-earmark-easel-fill"></i>
            <span>Texture Packs</span></a><ul class="submenu" id="TexturePacks">
                <li class="submenu-item" id="music"><a href="/pages/texture/music">[T] Music</a></li>
                <li class="submenu-item" id="armorstands"><a href="/pages/texture/armorstands">[T] Armor Stands</a></li>
                <li class="submenu-item" id="firearms"><a href="/pages/texture/firearms">[T] Fireamrs</a></li></ul>
        </li>

        <li
        class="sidebar-item has-sub" id="Map"><a href="#" class="sidebar-link"><i class="bi bi-file-earmark-richtext-fill"></i>
            <span>Map Packs</span></a><ul class="submenu" id="MapPacks">
              <li class="submenu-item" id="z-ndu"><a href="/pages/map/nacht-der-untoten">[M] Z-NDU</a></li></ul>
        </li>
    </ul>
    </div>
</div>
</div>
</div>
`);