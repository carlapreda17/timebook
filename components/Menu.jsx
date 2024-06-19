import React, { useEffect, useRef, useState } from 'react';
import { Logo, Pages } from '.';
import { classnames } from '../lib';
import { Feedback } from './Feedback';

let navMenuClass = '';

const Menu = ({ role }) => {
  const [open, setOpen] = useState(true);
  const ref = useRef(null);
  const [isChecked, setIsChecked] = useState(true);
  const menuRef = useRef();
  const dragStartXRef = useRef(0);
  const leftRef = useRef(0);
  const draggedRef = useRef(false);
  const [isDragged, setIsDragged] = useState(false);

  useEffect(() => {
    isChecked ? setOpen(true) : setOpen(false);
  }, [isChecked]);

  useEffect(() => {
    navMenuClass =
      JSON.parse(window.localStorage.getItem('showMenu')) === false && 'transition-none';
    setOpen(JSON.parse(window.localStorage.getItem('showMenu')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('showMenu', open);
  }, [open]);

  const handleChange = (event) => {
    setOpen(true);
    setIsChecked(event.target.checked);
  };

  // Swipe menu logic
  const onDragStart = (clientX) => {
    leftRef.current = 0;
    draggedRef.current = true;
    setIsDragged(true);
    dragStartXRef.current = clientX;
    requestAnimationFrame(updatePosition);
  };

  const updatePosition = () => {
    // if still dragging, then continue to animate, else stop for
    if (draggedRef.current) {
      requestAnimationFrame(updatePosition);
      menuRef.current.style.transform = `translateX(${leftRef.current}px)`;
    } else {
      menuRef.current.style.transform = ``;
    }
  };

  const onTouchMove = (clientX) => {
    const left = clientX - dragStartXRef.current;
    if (left < 0) {
      leftRef.current = left;
    }
  };

  const onDragEndTouch = () => {
    if (draggedRef.current) {
      setIsDragged(false);
      draggedRef.current = false;
      const threshold = 0.6;

      if (leftRef.current < menuRef.current.offsetWidth * threshold * -1) {
        leftRef.current = -menuRef.current.offsetWidth * 2;
        ref.current.checked = false;
      } else {
        leftRef.current = 0;
      }
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="menu"
        className="hidden"
        aria-label="Menu open/close"
        onChange={handleChange}
        ref={ref}
      />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop bg-gray-300 fixed lg:hidden h-screen w-screen inset-0"
      />
      <nav
        className={classnames(
          `nav-menu overflow-y-auto overflow-x-clip duration-500 dark:bg-slate-900 bg-white border-r border-gray-200 dark:border-r-slate-800 ${navMenuClass}`,
          open ? 'nav-menu-open' : 'nav-menu-close',
          !isDragged && 'nav-menu-transition' // only apply transition when not dragging
        )}
        ref={menuRef}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
        onTouchEnd={onDragEndTouch}
      >
        <div className="lg:sticky pt-8 sm:pt-0 lg:top-6 ">
          <button
            className="hidden xl:block my-6 mx-6 py-1.5 px-3 border border-gray-300 rounded-md dark:bg-slate-900 dark:text-gray-100 dark:border-gray-600"
            onClick={() => {
              setOpen((prevState) => !prevState);
              navMenuClass = open ? 'nav-menu-close' : 'nav-menu-open';
            }}
          >
            <i className="fa-solid fa-bars text-black dark:text-white" />
          </button>
          <div
            className={classnames(
              'px-4 w-48',
              !open ? 'opacity-close transition-none' : 'opacity-open '
            )}
          >
            <div className={open ? 'block' : 'invisible'}>
              <Logo role={role} />
            </div>
          </div>
          <div className={classnames('flex flex-col py-8')}>
            <Pages {...{ role, open }} />
            <Feedback {...{ role, open }} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
