

import { Staysure } from './components/pages/Staysure';

import { Headline } from './components/common/Headline';
import { ParaText } from './components/staysure/common/Paratext';
import { Image,BackgroundImage } from './components/staysure/common/Image';
import { TopBar,Header,HeaderInfoTile,HeaderInfoBar } from './components/staysure/common/Header';
import { Button } from './components/staysure/common/Button';
import { IntroSlider } from './components/staysure/home/IntroSlider';
import { InfoTopContent } from './components/staysure/home/InfoTopContent';
import { Home } from './components/staysure/home/home';
import { InfoArticles } from './components/staysure/home/InfoArticles';
import { Footer } from './components/staysure/common/Footer';
import { Quotation } from './components/staysure/quotation/Quotation';
import { EditableCard } from './components/staysure/common/Card';
import { EditableFormElement,FormEditableArea } from './components/staysure/form/form/FormElement';
import { InputBoxWithState } from './components/staysure/form/input-box/InputBox';
import { ButtonWithState } from './components/staysure/form/button/ButtonWithState';

const config = {
    'componentMappings':{
        'spa:pages/Staysure': Staysure,

        'spa:components/Headline': Headline,
        'spa:components/ParaText': ParaText,
        'spa:components/Image': Image,
        'spa:components/TopBar': TopBar,
        'spa:components/Header': Header,
        'spa:components/HeaderInfoTile': HeaderInfoTile,
        'spa:components/HeaderInfoBar': HeaderInfoBar,
        'spa:components/Button': Button,
        'spa:components/IntroSlider': IntroSlider,
        'spa:components/BackgroundImage': BackgroundImage,
        'spa:components/InfoTopContent': InfoTopContent,
        'spa:components/Home': Home,
        'spa:components/InfoArticles': InfoArticles,
        'spa:components/Footer': Footer,
        'spa:components/Quotation': Quotation,
        'spa:components/EditableCard': EditableCard,
        'spa:components/EditableFormElement': EditableFormElement,
        'spa:components/FormEditableArea': FormEditableArea,
        'spa:components/InputBoxWithState': InputBoxWithState,
        'spa:components/ButtonWithState': ButtonWithState,
    }
};

export default config;
