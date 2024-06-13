import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const $content = document.querySelector('header .content');
    const $blur = document.querySelector('header .overlay');
    let wHeight = window.innerHeight;

    const onResize = () => {
      wHeight = window.innerHeight;
    };

    const Scroller = function () {
      this.latestKnownScrollY = 0;
      this.ticking = false;
    };

    Scroller.prototype = {
      init: function () {
        window.addEventListener('scroll', this.onScroll.bind(this), false);
        $blur.style.backgroundImage = getComputedStyle(document.querySelector('header:first-of-type')).backgroundImage;
      },

      onScroll: function () {
        this.latestKnownScrollY = window.scrollY;
        this.requestTick();
      },

      requestTick: function () {
        if (!this.ticking) {
          window.requestAnimationFrame(this.update.bind(this));
        }
        this.ticking = true;
      },

      update: function () {
        const currentScrollY = this.latestKnownScrollY;
        this.ticking = false;

        const slowScroll = currentScrollY / 2;
        const blurScroll = currentScrollY * 2;
        const opaScroll = 1.4 - currentScrollY / 400;

        if (currentScrollY > wHeight) {
          document.querySelector('nav').style.position = 'fixed';
        } else {
          document.querySelector('nav').style.position = 'absolute';
        }

        $content.style.transform = `translateY(${slowScroll}px)`;
        $content.style.opacity = opaScroll;

        $blur.style.opacity = blurScroll / wHeight;
      }
    };

    const scroller = new Scroller();
    scroller.init();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', scroller.onScroll.bind(scroller));
    };
  }, []);

  return (
    <>
      <header>
        <div className="content">
          <hgroup>
            <h1>Caty Yount</h1>
            <h3>Developer | Designer</h3>
          </hgroup>
        </div>
        <div className="overlay"></div>
      </header>
      <section className="site">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </section>
    </>
  );
};

export default Header;
