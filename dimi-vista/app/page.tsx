'use client'
import { useState } from 'react'
import Nav from '../components/Nav'
import Texture from '../components/Texture'
import HeroView from '../components/HeroView'
import WerkprocessenView from '../components/WerkprocessenView'
import ProductView from '../components/ProductView'
import AboutMeView from '../components/CartView'
import ProjectsView from '../components/LoginView'
import styles from './page.module.css'

import K1W1View from '../components/werkprocessen/K1W1View'
import K1W2View from '../components/werkprocessen/K1W2View'
import K1W3View from '../components/werkprocessen/K1W3View'
import K1W4View from '../components/werkprocessen/K1W4View'
import K1W5View from '../components/werkprocessen/K1W5View'
import K2W1View from '../components/werkprocessen/K2W1View'
import K2W2View from '../components/werkprocessen/K2W2View'
import K2W3View from '../components/werkprocessen/K2W3View'

type Page = 'K1W1' | 'K1W2' | 'K1W3' | 'K1W4' | 'K1W5' | 'K2W1' | 'K2W2' | 'K2W3' | 'aboutme' | 'projects' | 'product' | 'werkprocessen' | 'hero' 

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
      {/* Start page stuff */}
      {isNavPage && <Texture />}

      {isNavPage && (
        <Nav
          currentPage={page === 'product' ? 'werkprocessen' : page}
          onNavigate={(p) => navigate(p as Page)}
        />
      )}

      <div className={`${styles.pageWrap} ${transitioning ? styles.fadeOut : styles.fadeIn}`}>
        {page === 'hero' && (
          <HeroView onEnter={() => navigate('werkprocessen')} />
        )}
        {(page === 'werkprocessen') && (
          <WerkprocessenView onProductClick={(id) => navigate(id as Page)} />
        )}
        {page === 'product' && (
          <ProductView onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K1W1' && (
          <K1W1View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K1W2' && (
          <K1W2View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K1W3' && (
          <K1W3View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K1W4' && (
          <K1W4View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K1W5' && (
          <K1W5View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K2W1' && (
          <K2W1View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K2W2' && (
          <K2W2View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'K2W3' && (
          <K2W3View onBack={() => navigate('werkprocessen')} />
        )}
        {page === 'aboutme' && <AboutMeView onBack={() => navigate('werkprocessen')}  />}
        {page === 'projects' && <ProjectsView />}
      </div>
    </main>
  )
}
