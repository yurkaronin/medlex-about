/* Smooth scroll */

SmoothScroll({
  animationTime: 600,
  stepSize: 80,
  accelerationDelta: 50,
  accelerationMax: 3,
  keyboardSupport: true,
  arrowScroll: 50,
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  touchpadSupport: false,
  fixedBackground: true,
  excluded: "",
});

/* Меню */

const headerBurger = document.getElementById("headerBurger") || false;
const burgerIcon = document.getElementById("burgerIcon") || false;
const mobileMenu = document.getElementById("mobileMenu") || false;
const headerMenu = document.getElementById("headerMenu") || false;
const docBody = document.getElementById("docBody") || false;

if (headerBurger) {
  headerBurger.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.toggle("mobile-menu--active");
    burgerIcon.classList.toggle("button_hamburger_revert");
    burgerIcon.classList.toggle("button_hamburger_final");
    docBody.classList.toggle("overflow-hide");
    headerMenu.classList.toggle("header_menu-open");
  });
}

/* Вкладки фильтра */

function toggleContent() {
  const filterHead = document.querySelectorAll(".filter__head");
  const filterHeadExpanded = document.querySelectorAll('.filter__head--expanded').length;
  const filterBody = document.querySelector('.filter__content');

  if (filterHeadExpanded == 0) {
    filterHead.forEach(function (el) {
      el.addEventListener("click", function () {
        var filterContent = this.nextElementSibling;

        if (this.nextElementSibling.style.maxHeight != 0) {
          filterContent.style.maxHeight = null;
        } else {
          filterContent.style.maxHeight = filterContent.scrollHeight + "px";
        }
      });
    });

  }
}

toggleContent();

/* Открытие фильтра на планшете/мобильном */

function openFilterMob() {
  const openFilterBtn = document.getElementById("openFilterBtn") || false;
  const mobileFilter = document.getElementById("mobileFilter") || false;
  const filterCloseBtn = document.querySelector("[data-close]") || false;

  if (openFilterBtn) {
    openFilterBtn.addEventListener("click", function (event) {
      event.preventDefault();
      mobileFilter.classList.add("filter--open");
      docBody.classList.add("hidden-sc");
    });
  }

  if (filterCloseBtn) {
    filterCloseBtn.addEventListener("click", function (event) {
      event.preventDefault();
      mobileFilter.classList.remove("filter--open");
      docBody.classList.remove("hidden-sc");
    });
  }
}
openFilterMob();

function showSearchBlock() {
  const searchBtn = document.getElementById("searchBtn") || false;
  const searchBlock = document.getElementById("searchBlock") || false;

  if (searchBtn) {
    searchBtn.addEventListener("click", function (event) {
      searchBlock.classList.toggle('active');
    })
  }
}

showSearchBlock();

/* Табы */


function createTab() {
  let tabItem = document.querySelectorAll('.tab-wrap .tab-item').length;
  const tabCount = tabItem;

  const tabClick = (event) => {
    const tabButtonClicked = event.target;
    const id = event.target.dataset.id;

    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButton" + i;
      let tabButton = document.querySelector(tabButtonID);
      let tabID = "#" + tabButton.dataset.id;
      let tab = document.querySelector(tabID);
      tabButton.classList.remove("active");
      tab.classList.add("hidden");
    }

    document.querySelector("#" + id).classList.remove("hidden");
    tabButtonClicked.classList.add("active");
  };

  const bindTabs = () => {
    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButton" + i;
      let tabButton = document.querySelector(tabButtonID);
      if (tabButton) {
        tabButton.addEventListener("click", tabClick);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    bindTabs();
  });
}

function createTabMob() {
  let tabItem = document.querySelectorAll('.tab-wrap .tab-item').length;
  const tabCount = tabItem;

  const tabClick = (event) => {
    event.preventDefault();
    const tabButtonClicked = event.target;
    const id = event.target.dataset.id;
    const check = tabButtonClicked.classList.contains("active");
    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButtonMob" + i;
      let tabButton = document.querySelector(tabButtonID);
      let tabID = "#" + tabButton.dataset.id;
      let tab = document.querySelector(tabID);
      tabButton.classList.remove("active");
      tab.classList.add("hidden");
    }

    if (check) {
      tabButtonClicked.classList.remove("active");
      document.querySelector("#" + id).classList.add("hidden");
    } else {
      document.querySelector("#" + id).classList.remove("hidden");
      tabButtonClicked.classList.add("active");
    }
  };

  const bindTabs = () => {
    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButtonMob" + i;
      let tabButton = document.querySelector(tabButtonID);
      if (tabButton) {
        tabButton.addEventListener("click", tabClick);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    bindTabs();
  });
}

createTab();
createTabMob();

/* Фильтры на странице "Реагенты" */

function fliterReagent() {
  const showFilterBtn = document.getElementById('showFilterBtn') || false;
  const reagentFilter = document.getElementById('reagentFilter') || false;
  const reagentFilterWrap = document.getElementById('reagentFilterWrap') || false;
  const reagentFilterContent = document.getElementById('reagentFilterContent') || false;

  if (showFilterBtn) {
    showFilterBtn.addEventListener("click", function (event) {
      event.preventDefault();
      reagentFilter.classList.toggle("active");
      reagentFilterWrap.classList.toggle("active");
      reagentFilterContent.classList.toggle("active");
    });
  }
}

fliterReagent();

/* Активный класс для фильтра по символам (Реагенты) */
/*
function addClassForSymbol() {
  let filterItem = document.querySelectorAll('.prod-filter__link') || false;

  filterItem.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (filterItem.classList.contains("active")) {
        filterItem.target.classList.remove("active");
      }
      e.target.classList.add("active");
    })
  })
}

addClassForSymbol();
*/
/* Accordeon */

var accordeon = (function () {

  let accordeonHead = document.querySelector(".accordeon") || false;
  let accordeonBtn = document.querySelector(".accordeon__btn") || false;
  let accordeonContent = document.querySelector(".accordeon__content") || false;

  if (accordeonHead) {
    accordeonHead.addEventListener("click", function (item) {
      item.preventDefault();
      accordeonBtn.classList.toggle('active');
      accordeonContent.classList.toggle('active');

      if (accordeonContent.style.maxHeight != 0) {
        accordeonContent.style.maxHeight = null;
      } else {
        accordeonContent.style.maxHeight = accordeonContent.scrollHeight + "px";
      }
    })
  }

})();

/* Select */

const variable = document.getElementById('selectContacts') || false;

if (variable) {
  const choices = new Choices(variable, {
    searchEnabled: false,
    searchChoices: false,
    searchFloor: 0,
    searchResultLimit: 0,
    itemSelectText: ""
  });

  variable.addEventListener("choice", function (event) {
    console.log('Выбор сделан');
  }, false);
}


/* Modals */

/* Modals Vacancy */

document.addEventListener('click', event => {
  if (event.target.dataset.open == "vacancy1") {

    const cvModal = $.modal({
      title: 'Менеджер по продвижению дезинфицирующих средств',
      content: `
        <div class="modal__text-block">
        <h5>Требуемый опыт работы:</h5>
        1–3 года <br><br>
        <h5>Полная занятость, полный день</h5>

        <h5>Обязанности:</h5>
        <ul>
          <li>осуществление активных продаж в розничных сетях дезинфицирующих и моющих средств</li>
          <li>поиск новых клиентов</li>
          <li>работа с клиентской базой</li>
          <li>ведение переговоров</li>
          <li>заключение договоров</li>
          <li>проведение акций (планирование, организация, контроль, отчетность по итогам акции)</li>
          <li>разработка нестандартных (креативных) методов продвижения товара</li>
          <li>разработка и проведение мероприятий, направленных на увеличение объемов продаж и анализ их эффективности</li>
          <li>изучение потребностей клиентов</li>
          <li>исследование рынка, мониторинг, анализ цен и ассортимента конкурентов, ценообразование</li>
          <li>командировки по Краснодарскому краю</li>
        </ul>

        <h5>Требования:</h5>
        <ul>
          <li>образование: высшее (желательно медицинское, фармацевтическое, биологическое, химическое)</li>
          <li>владение ПК: MS Office</li>
          <li>опыт работ в розничных сетях от 1,5 лет</li>
          <li>навыки ведения переговоров</li>
        </ul>

        <h5>Условия</h5>
        <ul>
          <li>социальный пакет</li>
          <li>компенсация командировочных расходов, мобильная связь</li>
          <li>заработная плата: оклад 35 000 рублей + процент от продаж</li>
        </ul>
        </div>

        <div class="form-auth">
        <form class="form-auth__form" action="">
          <h4 class="d-modal__title">Откликнуться</h4>
          <div class="d-modal__field-wrap">
            <div class="text-field">
              <input class="write-inputs" type="text" placeholder=" " name="FIO" required id="form-cv-a">
              <label class="text-field__label" for="form-cv-a"><span class="text-field__label--text">Ваше имя</span></label>
            </div>
            <div class="text-field text-field--half">
              <input class="write-inputs" type="text" placeholder=" " name="phone" required id="form-cv-b">
              <label class="text-field__label" for="form-cv-b"><span
                  class="text-field__label--text">Телефон</span></label>
            </div>
            <div class="text-field text-field--half">
              <input class="write-inputs" type="text" placeholder=" " name="email" required id="form-cv-c">
              <label class="text-field__label" for="form-cv-c"><span class="text-field__label--text">Email</span></label>
            </div>

            <div class="textarea-field text-field ">
              <textarea class="write-inputs" name="Ваш комментарий" rows="5" placeholder=" " id="form-write-c-f"></textarea>
              <label class="textarea-field__label" for="form-write-c-f"><span class="textarea-field__label--text">Комментарий</span></label>
            </div>
          </div>
          <div class="file">
            <input class="file__input" type="file" id="form-send-files" name="contragentFiles" multiple>
            <label class="ghost-button ghost-button--fullwidth" for="form-send-files"><span class="link-main">Приложить резюме <span class="link-main__arrow"></span> </span></label>
            <div class="file__list-area" id="CVListArea"> </div>
          </div>
          <div class="d-modal__wrapper">
            <div class="checkbox">
              <input class="agreement" type="checkbox" name="remember" id="form-cv-d">
              <label class="checkbox__label smalltext" for="form-cv-d">Я выражаю согласие с <a class="smalltext--link-intext" href="#">Политикой конфиденциальности</a>  и разрешаю обработку своих персональных данных</label>
               
            </div>
          </div>
          <button class="submit-btn form__submit-btn" type="submit" disabled id="sendCV"><span>Отправить</span></button>
        </form>
        </div>
      `
    })

    textarea = document.querySelector("textarea");
    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    }

    const CVInput = document.getElementById('form-send-files') || false;
    const sendCV = document.getElementById('sendCV') || false;

    if (CVInput) {
      const CVListArea = document.getElementById('CVListArea');
      CVInput.onchange = function () {
        AddCV();
        sendCV.disabled = false;
        let addOthers = document.createElement('a');
        addOthers.classList.add('plain__link');
        addOthers.textContent = 'Удалить файлы';

        CVDelete = document.querySelector('#CVListArea .plain__link') || false;

        if (CVDelete === false) {
          CVListArea.appendChild(addOthers);
        }

        addOthers.addEventListener('click', function () {
          RemoveCV();
          sendCV.disabled = true;
        })
      }
    }

    function AddCV() {
      let files = CVInput.files;
      let file;
      for (let i = 0; i < files.length; i++) {
        file = files[i];
        let elem = document.createElement('p');
        elem.textContent = file.name;
        CVListArea.prepend(elem);
      }

      return files;
    }

    function RemoveCV() {
      CVInput.value = "";
      while (CVListArea.firstChild) {
        CVListArea.removeChild(CVListArea.firstChild);
      }
    }

    setTimeout(() => {
      cvModal.open()
      let phoneMask = document.getElementById('form-cv-b') || false;
      if (phoneMask) {
        var maskOptions = {
          mask: '{0} (000) 000-00-00'
        };
        let mask = IMask(phoneMask, maskOptions);
      }
    }, 100)
  }
})

// let selectPurpose1 = new vanillaSelectBox("#selectPurpose1",
//      {
//      "placeHolder":"Choose your car",
//      "setVBalue": "all",
//      "maxHeight": '250',
//      "maxWidth": '100%',
//      translations: { "all": "Все назначения", "items": "Выбрано" } 
// });

/* Новые скрипты */

/* Accordeon */

class Accordion {

  constructor(selector) {
    this.selector = selector
  }

  /* Метод Object.create() создаёт новый объект с указанным прототипом и свойствами. */
  createAccordion(selector) {
    /* сохраняем созданный объект в переменную  this ссылается на объект*/
    const accordionList = document.querySelectorAll(this.selector);
    /* цикл в который передаём элемент объекта, сохранённого ранее в переменную  */
    for (let element of accordionList) {
      /* отслеживаем событие клика по этому элементу
      если кликнули, то... */
      element.addEventListener("click", function () {
        /* создана переменная с текстовым параметром, очевидно это имя css-класса  */
        let classTrigger = 'active';
        /* добавляем элементу, с которым работает цикл дополнительный класс, который ранее сохранили в переменную ,а если этот класс уже есть - удаляем */
        this.classList.toggle(classTrigger);
        /* Сохраняем в переменную следующий после текущего элемент объекта (возвращает элемент, следующий сразу за указанным элементом) */
        let panel = this.nextElementSibling;
        /* условие при котором  */
        /* если у следующего элемента есть служебный класс active - удаляем его, если его нет - добавляем  */
        panel.classList.toggle(classTrigger);
      })
    }
  }
}
class TabMaker {
  constructor(options) {
    this.tabGroupParentSelector = options.tabGroupParentSelector;
    this.tabBtnSelector = options.tabBtnSelector;
    this.tabContentSelector = options.tabContentSelector;
    this.activationClass = options.activationClass;
    this.defaultTabToShow = options.defaultTabToShow;
  }

  createTabs() {
    const tabGroupContainer = document.querySelector(this.tabGroupParentSelector) || false;

    if (tabGroupContainer) {
      const defaultTab = this.defaultTabToShow;
      const tabBtnList = tabGroupContainer.querySelectorAll(this.tabBtnSelector) || [];
      const tabContentList = tabGroupContainer.querySelectorAll(this.tabContentSelector) || [];
      const classTrigger = this.activationClass;

      if (tabBtnList.length === 0) {
        console.warn('Ошибка в названиях селектора табов: селектора ' + this.tabBtnSelector + ' не существует.');
      }
      if (tabContentList.length === 0) {
        console.warn('Ошибка в названиях селектора блока контента: селектора ' + this.tabContentSelector + ' не существует.');
      }
      tabBtnList.forEach(OnTabClick);

      function OnTabClick(item) {
        item.addEventListener('click', function () {
          let currentBtn = item;
          let tabID = currentBtn.getAttribute('data-tab');
          let currentTab = tabGroupContainer.querySelector(tabID);

          if (!currentBtn.classList.contains('active')) {
            tabBtnList.forEach(function (item) {
              item.classList.remove(classTrigger);
            });
            tabContentList.forEach(function (item) {
              item.classList.remove(classTrigger);
            });
            currentBtn.classList.add(classTrigger);
            currentTab.classList.add(classTrigger);
          }
        });
      }

      tabGroupContainer.querySelector(defaultTab).click();
    } else {
      console.warn('Создать табы невозможно: ошибка DOM структуры.');
    }
  }
}

if (document.querySelector('.contacts__accordeon-head')) {
  acc = new Accordion('.contacts__accordeon-head');
  acc.createAccordion();

  let tabOptions = {
    tabGroupParentSelector: '.new-tabs', // Селектор родительского контейнера.
    tabBtnSelector: '.contacts__tab', // Селектор вкладки (таба).
    tabContentSelector: '.new-tab', // Селектор контентного блока.
    activationClass: 'active', // CSS класс, активирующий видимость таба и соответствующей ему контентной области.
    defaultTabToShow: '.contacts__tab:nth-child(1)'
  };

  const tab = new TabMaker(tabOptions);
  tab.createTabs();

  let tabOptions2 = {
    tabGroupParentSelector: '.switch__tabs', // Селектор родительского контейнера.
    tabBtnSelector: '.switch__item', // Селектор вкладки (таба).
    tabContentSelector: '.map__layer', // Селектор контентного блока.
    activationClass: 'active', // CSS класс, активирующий видимость таба и соответствующей ему контентной области.
    defaultTabToShow: '.switch__item:nth-child(1)'
  };

  const tabSwitch = new TabMaker(tabOptions2);
  tabSwitch.createTabs();

}




/* Скролл на главной */
/*
var onePageScroll = new Swiper('.vertial-slider', {
  direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
});
*/

/* Console.log при выборе селекта */

let selectVal = document.querySelectorAll('#selectMultiple1') || false;

if (selectVal) {
  selectVal.forEach(function (i) {
    i.addEventListener('change', function () {
      console.log('Выбрано: ', this.value);
      window.location = this.value;
    })
  })
}

let selectVal2 = document.querySelectorAll('#selectMultiple2') || false;

if (selectVal2) {
  selectVal2.forEach(function (i) {
    i.addEventListener('change', function () {
      console.log('Выбрано: ', this.value);

      document.getElementById('selectMultiple2form').submit();

    })
  })
}

let selectVal3 = document.querySelectorAll('#selectMultiple3') || false;

if (selectVal3) {
  selectVal3.forEach(function (i) {
    i.addEventListener('change', function () {
      console.log('Выбрано: ', this.value);
      document.getElementById('selectMultiple3form').submit();
    })
  })
}

let selectVal4 = document.querySelectorAll('#selectPurpose1') || false;

if (selectVal4) {
  selectVal4.forEach(function (i) {
    i.addEventListener('change', function () {
      console.log('Выбрано: ', this.value);
      window.location = this.value;
    })
  })
}

/* Accordeon */

class AccordionCustom {

  constructor(selector) {
    this.selector = selector
  }

  createAccordionCustom(selector) {
    const accordionList = document.querySelectorAll(this.selector);
    for (let element of accordionList) {
      element.addEventListener("click", function () {
        // тут вставляю свой блок кода 

        // конец моего блока кода 
        let classTrigger = 'active';


        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.classList.toggle(classTrigger);
        } else {
          accordionList.forEach(function (item) {
            if (item.classList.contains('active')) {
              item.classList.remove("active");
              item.nextElementSibling.classList.remove("active");
              item.nextElementSibling.style.maxHeight = null;
            }

          });
          panel.style.maxHeight = panel.scrollHeight + "px";
          this.classList.toggle(classTrigger);
          panel.classList.toggle(classTrigger);
        }
      })
    }
  }
}

acc2 = new AccordionCustom('.list__item-name');
acc2.createAccordionCustom();

let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    history.pushState(null, null, hashval)
    e.preventDefault()
  })
}

// Найти все пункты в списке вопросов 
let faqList = document.querySelectorAll('.list_questions .list__item-name');

const funcArr = function (number) {
  faqList.forEach(function (item) {
    item.style.opacity = number;
  });
};

if (document.documentElement.clientWidth >= 1024) {
  document.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('list__item-name')) {
      funcArr('0.5');
      event.target.style.opacity = "1";
    }
  });

  document.addEventListener('mouseout', function (event) {
    if (event.target.classList.contains('list__item-name')) {
      funcArr('1');
    }
  });
} else if (document.documentElement.clientWidth < 1024) {

  document.addEventListener('click', function (event) {

    if (event.target.classList.contains('list__item-name')) {

      if (event.target.classList.contains('open-content')) {
        event.target.classList.remove('open-content')
        funcArr('1');

      } else {
        event.target.classList.add('open-content')
        funcArr('0.5');
        event.target.style.opacity = "1";
      }

    };

  });

};

// if (window.innerWidth >= 992) {
  //выполнять
  if (document.querySelector('.card-info__tabs-list') && window.innerWidth <= 992) {
    console.log('wow');
    let customTabsList = document.querySelectorAll('.card-info__tabs-content');
    let customTabСontrol = document.querySelectorAll('.tab-item tabs__control');
 

    for (let customTabsItem of customTabsList) {
      customTabsItem.classList.add('hidden');
    }

    for (let customTabcontrolItem of customTabСontrol) {
      customTabcontrolItem.classList.remove('active');
    }

  };
// }