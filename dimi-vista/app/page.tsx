'use client'
import { useState } from 'react'
import Nav from '../components/Nav'
import Compass from '../components/Compass'
import Texture from '../components/Texture'
import HeroView from '../components/HeroView'
import StoreView from '../components/StoreView'
import ProductView from '../components/ProductView'
import CartView from '../components/CartView'
import LoginView from '../components/LoginView'
import styles from './page.module.css'

import K1W1View from '../components/werkprocessen/K1W1View'
import K1W2View from '../components/werkprocessen/K1W2View'
import K1W3View from '../components/werkprocessen/K1W3View'
import K1W4View from '../components/werkprocessen/K1W4View'
import K1W5View from '../components/werkprocessen/K1W5View'
import K2W1View from '../components/werkprocessen/K2W1View'
import K2W2View from '../components/werkprocessen/K2W2View'
import K2W3View from '../components/werkprocessen/K2W3View'

type Page = 'K1W1' | 'K1W2' | 'hero' | 'store' | 'product' | 'cart' | 'login' | string 

export default function Home() {
  const [page, setPage] = useState<Page>('hero')
  const [transitioning, setTransitioning] = useState(false)

  const navigate = (target: Page) => {
    console.log(target)
    if (target === page) return
    setTransitioning(true)
    setTimeout(() => {
      setPage(target)
      setTransitioning(false)
    }, 300)
  }

  const isNavPage = page !== 'hero'

  return (
    <main className={styles.main}>
      {/* Texture overlay for non-hero pages */}
      {isNavPage && <Texture />}

      {/* Nav */}
      {isNavPage && (
        <Nav
          currentPage={page === 'product' ? 'store' : page}
          onNavigate={(p) => navigate(p as Page)}
        />
      )}

      {/* Compass */}
      {/* {isNavPage && <Compass />} */}

      {/* Page content */}
      <div className={`${styles.pageWrap} ${transitioning ? styles.fadeOut : styles.fadeIn}`}>
        {page === 'hero' && (
          <HeroView onEnter={() => navigate('store')} />
        )}
        {(page === 'store') && (
          <StoreView onProductClick={(id) => navigate(id)} />
        )}
        {page === 'product' && (
          <ProductView onBack={() => navigate('store')} />
        )}
        {page === 'K1W1' && (
          <K1W1View onBack={() => navigate('store')} />
        )}
        {page === 'K1W2' && (
          <K1W2View onBack={() => navigate('store')} />
        )}
        {page === 'K1W3' && (
          <K1W3View onBack={() => navigate('store')} />
        )}
        {page === 'K1W4' && (
          <K1W4View onBack={() => navigate('store')} />
        )}
        {page === 'K1W5' && (
          <K1W5View onBack={() => navigate('store')} />
        )}
        {page === 'K2W1' && (
          <K2W1View onBack={() => navigate('store')} />
        )}
        {page === 'K2W2' && (
          <K2W2View onBack={() => navigate('store')} />
        )}
        {page === 'K2W3' && (
          <K2W3View onBack={() => navigate('store')} />
        )}
        {page === 'cart' && <CartView />}
        {page === 'login' && <LoginView />}
      </div>
    </main>
  )
}
