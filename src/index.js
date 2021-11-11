import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import mainPage from "./modules/mainPage";
import sliderSwiper from "./modules/sliderSwiper";
import tabs from "./modules/tabs"
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer('30 november 2021');
menu();
modal();
calculator();
mainPage();
sliderSwiper();
tabs();
slider('.portfolio-content', '.portfolio-dots', '.portfolio-item');
sendForm({
    formId:'form1',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId:'form3'
});
sendForm({
    formId:'form2',
    someElement:[
        {
            id: 'form2-message'
        }
    ]
});