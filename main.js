'use strict';

// 탭 구현

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector('.' + tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    target.classList.add('active');
    tab.classList.add('active');
  });
});

// Project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  // console.log(filter);
  if (filter == null) {
    return;
  }

  // 이전 항목에서 선택 항목 제거 및 새 항목 선택
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  // console.log(e.target);
  e.target.classList.add('selected');

  projectContainer.classList.add('anim_out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim_out');
  }, 300);
});
