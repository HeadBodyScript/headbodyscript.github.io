document.write(`
    <div class="sidebar-toggler x" style="position: fixed;">
      <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-list sb"></i></a>
    </div>
    <div class="sidebar-toggler x" style="position: fixed; right: 0;">
      <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-list sb"></i></a>
    </div>
      <div id="app">
        <div id="sidebar" class="active">
          <div class="sidebar-wrapper active">
            <div class="sidebar-header position-relative">
              <div class="d-flex justify-content-between align-items-center">
                <div class="main-logo">
                  <a href="https://headbodyscript.nl/" style="font-family: Dimitra; font-size: xx-small; color: var(--logo); text-shadow: 2px 2px #5353538c;">
                    headbodyscript
                  </a>
                </div>
              </div>
                  <div class="theme-toggle d-flex gap-2 align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/> </svg>
                  <div class="form-check form-switch fs-6"><input class="form-check-input me-0" type="checkbox" id="toggle-dark" style="cursor: pointer"/></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16"><path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/><path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/></svg></div>
            </div>
      
          <div class="sidebar-menu">
          <ul class="menu">
              <li class="sidebar-title">Menu</li>
      
              <li 
              class="sidebar-item" id="Dashboard"><a href="https://headbodyscript.nl/" class="sidebar-link"><i class="bi bi-grid-3x3-gap-fill"></i>
                  <span>Dashboard</span></a>
              </li>
      
              <li 
              class="sidebar-item" id="Information"><a href="https://headbodyscript.nl/pages/information" class="sidebar-link"><i class="bi bi-person-vcard"></i>
                  <span>About us</span></a>
              </li>
      
              <li class="sidebar-title">Minecraft</li>
      
              <li class="sidebar-item has-sub" id="Data"><a href="#" class="sidebar-link"><i class="bi bi-file-earmark-zip-fill"></i>
                  <span>Data Packs</span></a><ul class="submenu" id="DataPacks">
                      <li class="submenu-item" id="core"><a href="https://headbodyscript.nl/pages/data-packs/project-0">Core</a></li>
                      <li class="submenu-item" id="fire-arms"><a href="https://headbodyscript.nl/pages/data-packs/project-6">Firearms</a></li>
                      <li class="submenu-item" id="glock"><a href="https://headbodyscript.nl/pages/data-packs/project-1">Glock</a></li>
                      <li class="submenu-item" id="mossberg"><a href="https://headbodyscript.nl/pages/data-packs/project-4">Mossberg</a></li>
                      <li class="submenu-item" id="kurz"><a href="https://headbodyscript.nl/pages/data-packs/project-3">Kurz</a></li>
                      <li class="submenu-item" id="ump"><a href="https://headbodyscript.nl/pages/data-packs/project-5">UMP</a></li>
                      <li class="submenu-item" id="kalishnikov"><a href="https://headbodyscript.nl/pages/data-packs/project-2">Kalishnikov</a></li></ul>
              </li>
      
              <li 
              class="sidebar-item has-sub" id="Texture"><a href="#" class="sidebar-link"><i class="bi bi-file-earmark-easel-fill"></i>
                  <span>Texture Packs</span></a><ul class="submenu" id="TexturePacks">
                      <li class="submenu-item" id="music"><a href="https://headbodyscript.nl/pages/texture-packs/project-1">Music</a></li>
                      <li class="submenu-item" id="armorstands"><a href="https://headbodyscript.nl/pages/texture-packs/project-0">Armor Stands</a></li>
                      <li class="submenu-item" id="firearms"><a href="https://headbodyscript.nl/pages/texture-packs/project-2">Firearms</a></li></ul>
              </li>
      
              <li
              class="sidebar-item has-sub" id="Map"><a href="#" class="sidebar-link"><i class="bi bi-file-earmark-richtext-fill"></i>
                  <span>Map Packs</span></a><ul class="submenu" id="MapPacks">
                    <li class="submenu-item" id="z-ndu"><a href="https://headbodyscript.nl/pages/map-packs/project-0">Z-NDU</a></li></ul>
              </li>
      
              <li class="sidebar-title">Link Tree</li>
      
                    <li class="sidebar-item">
                      <a href="https://discord.gg/pxEk4Ey4Hv" class="sidebar-link" target="_blank">
                      <i class="bi bi-discord"></i>
                      <span>Discord</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://www.instagram.com/iheadbodyscript/" class="sidebar-link" target="_blank">
                      <i class="bi bi-instagram"></i>
                      <span>Instagram</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://www.planetminecraft.com/member/iheadbodyscript/" class="sidebar-link" target="_blank">
                      <i class="bi bi-globe-americas"></i>
                      <span>Planet Minecraft</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://www.tiktok.com/@iheadbodyscript" class="sidebar-link" target="_blank">
                      <i class="bi bi-tiktok"></i>
                      <span>TikTok</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://www.twitch.tv/iheadbodyscript" class="sidebar-link" target="_blank">
                      <i class="bi bi-twitch"></i>
                      <span>Twitch</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://twitter.com/IHeadbodyscript" class="sidebar-link" target="_blank">
                      <i class="bi bi-twitter"></i>
                      <span>Twitter</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://www.youtube.com/@iheadbodyscript/featured" class="sidebar-link" target="_blank">
                      <i class="bi bi-youtube"></i>
                      <span>YouTube</span>
                      </a>
                    </li>
                    <li class="sidebar-title">Support us directly</li>
      
                    <li class="sidebar-item">
                      <a href="https://github.com/HeadBodyScript" class="sidebar-link" target="_blank">
                      <i class="bi bi-award"></i>
                      <span>Sponsors</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://www.paypal.me/HeadBodyScript" class="sidebar-link" target="_blank">
                      <i class="bi bi-paypal"></i>
                      <span>PayPal</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://throne.me/iheadbodyscript/wishlist" class="sidebar-link" target="_blank">
                      <i class="bi bi-cart"></i>
                      <span>Wish list</span>
                      </a>
                    </li>
      
                    <li class="sidebar-item">
                      <a href="https://github.com/HeadBodyScript" class="sidebar-link" target="_blank">
                      <i class="bi bi-github"></i>
                      <span>GitHub Subscription</span>
                      </a>
                    </li>
          </ul>
          </div>
      </div>
    </div>
  </div>
`);